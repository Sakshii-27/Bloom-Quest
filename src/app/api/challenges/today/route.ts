import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Challenge from '@/models/Challenge';
import { getSession } from '@/lib/auth';

import challengesData from '@/data/challenges.json';

const DAY_CATEGORIES: Record<number, string> = {
    1: 'mindfulness', // Monday
    2: 'productivity', // Tuesday
    3: 'health',      // Wednesday
    4: 'social',      // Thursday
    5: 'health',      // Friday
    6: 'social',      // Saturday
    0: 'environment', // Sunday
};

export async function GET() {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    await dbConnect();

    // Get today's date YYYY-MM-DD
    const todayDate = new Date();
    const today = todayDate.toISOString().split('T')[0];

    let challenge = await Challenge.findOne({ date: today });

    if (!challenge) {
        // Pick a challenge based on the day of the week
        const dayOfWeek = todayDate.getDay();
        const category = DAY_CATEGORIES[dayOfWeek];
        
        const filteredChallenges = challengesData.filter(c => c.category === category);
        const pool = filteredChallenges.length > 0 ? filteredChallenges : challengesData;
        
        const selected = pool[Math.floor(Math.random() * pool.length)];

        // XP based on difficulty
        const xpMap = { easy: 30, medium: 50, hard: 100 };
        const xp = xpMap[selected.difficulty as keyof typeof xpMap] || 50;

        challenge = await Challenge.create({
            date: today,
            description: selected.text,
            category: selected.category,
            difficulty: selected.difficulty,
            xp: xp
        });
    }

    return NextResponse.json(challenge);
}

// Completion would be tracked per user, but for MVP checking if user completed the global challenge needs a join or user field.
// Creating a user-challenge completion tracking is separate.
// For now, let's skip "completing" the challenge in backend strictly (adding to User specific table)
// and just assume if they click it, they get XP and we trust client/session for simple MVP?
// No, better to add `challengesCompleted` array to User model or a separate collection.
// Implementation Plan said "Challenge XP gives bonus boost".
// Let's keep it simple: We just give XP via a generic complete endpoint for challenges.
