# 📋 Planned GitHub Issues

Here are the formatted issues you selected. Copy and paste these Title/Body pairs into GitHub 'New Issue' page.

---

## Issue 1: Shop Tooltips 🟢 (Good First Issue)

**Title:**
`feat: add tooltips for shop items`

**Label:** `enhancement`, `good first issue`

**Body:**
```markdown
**Description**
Currently, items in the Shop (`src/app/shop/page.tsx`) only display an image and name. Users don't know the flavor text or description of an item (e.g., "Neon Pot: Glows in the dark") before buying it.

**Goal**
Implement a tooltip or popover that appears when hovering over a shop item card.

**Tasks**
- [ ] Install `radix-ui/react-tooltip` (or use existing UI component).
- [ ] Wrap the Shop Item Card in a Tooltip Trigger.
- [ ] Display the item's `description` field in the Tooltip Content.
- [ ] Ensure it works on mobile (tap to see description).

**Area**
- `src/app/shop/page.tsx`
```

---

## Issue 2: Implement Item Effects 🔴 (Advanced)

**Title:**
`feat: implement shop item effects (XP Boosts)`

**Label:** `enhancement`, `backend`

**Body:**
```markdown
**Description**
Currently, shop items are purely cosmetic. We want them to have gameplay effects! For example, a "Sunflower Pot" should give a 10% XP boost when completing habits.

**Goal**
Update the backend to calculate XP based on equipped items.

**Tasks**
- [ ] Update `src/data/shopItems.ts` to include an `effects` field (e.g., `{ multiplier: 1.1 }`).
- [ ] Update `src/app/api/habits/[id]/complete/route.ts` to check the user's `equippedItems`.
- [ ] Apply the multiplier to the XP gained.

**Area**
- `src/app/api/habits/[id]/complete/route.ts`
```

---

## Issue 3: Custom Habit Frequencies 🟡 (Feature)

**Title:**
`feat: support custom habit frequencies (Weekly/Specific Days)`

**Label:** `enhancement`

**Body:**
```markdown
**Description**
Right now, all habits are assumed to be "Daily". We need to support more flexible schedules like "3 times a week" or "Every Monday and Friday".

**Goal**
Update the Habit model and UI to support custom frequency configurations.

**Tasks**
- [ ] **Backend**: Update `src/models/Habit.ts` Schema.
  - Add `frequencyType`: 'daily' | 'weekly' | 'specific_days'
  - Add `frequencyDays`: number[] (e.g., [1, 3, 5] for Mon/Wed/Fri)
- [ ] **Frontend**: Update the "Add Habit" form in `DashboardView.tsx` to allow selecting these options.
- [ ] **Logic**: Update the "Daily Reset" logic to only uncheck habits that are due today.

**Area**
- `src/models/Habit.ts`
- `src/components/dashboard/DashboardView.tsx`
```

---

## Issue 3: Rate Limiting 🛡️ (Security)

**Title:**
`security: add rate limiting to login endpoint`

**Label:** `security`, `help wanted`

**Body:**
```markdown
**Description**
The login endpoint `src/app/api/auth/login` currently has no protection against brute-force attacks. An attacker could try millions of passwords without being blocked.

**Goal**
Implement a rate limiter that blocks an IP address after a certain number of failed attempts.

**Tasks**
- [ ] Choose a rate-limiting strategy (e.g., in-memory Map for simple deployment, or Redis/Upstash for production).
- [ ] Check the IP address of the incoming request.
- [ ] If > 5 failed attempts in 10 minutes, return `429 Too Many Requests`.
- [ ] Add headers `X-RateLimit-Limit` and `X-RateLimit-Remaining`.

**Area**
- `src/app/api/auth/login/route.ts`
```

---

## Issue 4: Zod Validation Refactor 🧹 (Refactor)

**Title:**
`refactor: use Zod for validation in habits API`

**Label:** `refactor`, `good first issue`

**Body:**
```markdown
**Description**
Currently, in `src/app/api/habits/route.ts`, validation is done via manual if-statements:
`if (!title) return NextResponse.json(...)`

**Goal**
Refactor this endpoint to use the **Zod** library for robust schema validation.

**Tasks**
- Define a standard Zod schema for habit creation (title, difficulty).
- Use `schema.safeParse(body)` to validate the incoming request.
- Return structured error messages if validation fails.
- Remove the old manual checks.

**Area**
- `src/app/api/habits/route.ts`

---

## Issue 5: Infinite Leveling System 🚀 (Feature)

**Title:**
`feat: implement infinite leveling or prestige system`

**Label:** `enhancement`

**Body:**
```markdown
**Description**
Currently, the game stops leveling up after Stage 3 (Bloom) at 120 XP. Users can continue earning XP, but nothing happens.

**Goal**
Implement a system to handle progression past the initial stages.

**Ideas**
- **Infinite Levels**: Calculate level based on XP formula (e.g., `Level = floor(sqrt(XP / 100))`).
- **New Stages**: Add Stage 4, 5, 6 with generic visual scaling.

**Area**
- `src/app/api/habits/[id]/complete/route.ts`
- `src/components/dashboard/DashboardView.tsx`

---

## Issue 6: Refactor Daily Stats 🔴 (Advanced)

**Title:**
`refactor: move dailyStats to separate MongoDB collection`

**Label:** `refactor`, `backend`, `performance`

**Body:**
```markdown
**Description**
Currently, `dailyStats` is an array stored *inside* the `User` document. As a user plays for months/years, this array will grow indefinitely. This risks hitting the MongoDB 16MB document size limit and slows down fetching the User object.

**Goal**
Refactor the database schema to store stats in a separate `DailyStat` collection.

**Tasks**
- Create a new Mongoose model `DailyStat` (`userId`, `date`, `xpGained`, `habitsCompleted`).
- Update `src/app/api/stats/route.ts` to query this new collection instead of `user.dailyStats`.
- Update `src/app/dashboard/page.tsx` aggregation logic.
- Ensure the Frontend still receives the data in the same format (or update Frontend to match).

**Area**
- `src/models/User.ts`
- `src/models/DailyStat.ts` (New)
- `src/app/api/stats/route.ts`

---

## Issue 7: Polish Garden Edit UI 🎨 (Design)

**Title:**
`design: improve visual appeal of garden edit mode`

**Label:** `design`, `frontend`, `ui`

**Body:**
```markdown
**Description**
When you enter "Edit Mode" in the Garden (`src/app/garden/page.tsx`), the inventory dock at the bottom looks very basic. It's just a scrolling row of buttons with no clear structure.

**Goal**
Redesign the inventory dock to be more visually appealing and user-friendly.

**Ideas**
- **Tabs**: Group items by "Pots", "Decor", and "Themes".
- **Glassmorphism**: Use a blurred background with rounded corners for the dock.
- **Animations**: Add slide-up animations when the dock opens.
- **Drag Preview**: Show a ghost image of the item while dragging it.

**Area**
- `src/app/garden/page.tsx`

---

## Issue 8: Achievements System 🏆 (Intermediate)

**Title:**
`feat: implement achievements and badging system`

**Label:** `enhancement`, `gamification`, `backend`

**Body:**
```markdown
**Description**
Gamification needs more than just coins. We want to reward specific behaviors (consistency, focus, collection) with permanent "Badges" on the user profile.

**Goal**
Create an extensible Achievements system.

**Tasks**
- **Database**: Add `badges` array to `User` schema (e.g., `[{ id: 'early_bird', date: Date }]`).
- **Logic**: Create a helper function `checkAchievements(user)` called after habit completion or focus sessions.
- **Badges to Implement**:
  - *Early Bird*: Complete a habit before 8 AM.
  - *Zen Master*: Accumulate 100 total minutes of focus time.
  - *Big Spender*: Buy 5 items from the shop.
- **UI**: Add a "Trophy Case" section to the Stats page (`src/app/stats/page.tsx`).

**Area**
- `src/models/User.ts`
- `src/app/stats/page.tsx`
- `src/lib/achievements.ts` (New)
```

---

## Issue 9: Plant Withering (Loss Aversion) 🍂 (Advanced)

**Title:**
`feat: implement plant withering mechanics`

**Label:** `enhancement`, `gamification`, `backend`

**Body:**
```markdown
**Description**
Games are stickier when you have something to *lose*. If a user hasn't logged in for a few days, their plant should visibly show it!

**Goal**
Implement a decay system based on `lastActiveDate`.

**Tasks**
- **Backend**: Update `src/models/User.ts` logic (or a cron job) to check `lastActiveDate`.
- **Logic**: If `Date.now() - lastActiveDate > 3 days`, apply "Withered" state.
- **Penalty**: Deduct 50 XP per day of inactivity (optional: or just stop growth).
- **Frontend**: Add a visual overlay (brown filter or drooping animation) when state is 'withered'.

**Area**
- `src/models/User.ts`
- `src/components/plant/DynamicPlant.tsx`

---

## Issue 10: Timezone Reset Bug 🐛 (Bug)

**Title:**
`fix: habits reset at UTC midnight instead of local time`

**Label:** `bug`, `backend`

**Body:**
```markdown
**Description**
Currently, the daily stats and habit completion logic relies on `new Date().toISOString().split('T')[0]`. This uses **UTC** time.
For users in India (IST), "Tomorrow" starts at 5:30 AM. If they complete a habit at 1 AM, it counts for the *previous* day.

**Goal**
Store the user's timezone (e.g., `Asia/Kolkata`) in their profile and use `date-fns-tz` to interpret dates correctly.

**Tasks**
- [ ] Add `timezone` field to `User` model (default 'UTC').
- [ ] Detect user timezone on frontend (Intl API) and send to backend on login/register.
- [ ] Update `src/app/api/habits/[id]/complete/route.ts` to use `toZonedTime(now, user.timezone)`.

**Area**
- `src/models/User.ts`
- `src/app/api/habits/[id]/complete/route.ts`

---

## Issue 11: Shop Race Condition 🐛 (Bug)

**Title:**
`fix: prevent double-spending in shop using atomic updates`

**Label:** `bug`, `backend`, `security`

**Body:**
```markdown
**Description**
The current Shop Buy logic (`src/app/api/shop/buy/route.ts`) uses a `findById` -> `check balance` -> `user.save()` pattern.
This is vulnerable to **Race Conditions**. If a user sends two requests simultaneously (e.g., clicking 'Buy' on two different tabs), they could spend the same coins twice.

**Goal**
Refactor the purchase logic to use MongoDB **Atomic Operators** (`$inc`, `$push`).

**Tasks**
- Replace the manual `save()` logic with `User.findOneAndUpdate`.
- Logic: `User.updateOne({ _id: userId, coins: { $gte: price } }, { $inc: { coins: -price }, $push: { inventory: itemId } })`
- Ensure the API handles the case where the update fails (i.e., user didn't have enough money or race condition occurred).

**Area**
- `src/app/api/shop/buy/route.ts`

---

## Issue 12: Inaccessible Plant Component ♿ (Bug/Frontend)

**Title:**
`fix: add aria-labels to dynamic plant component`

**Label:** `bug`, `frontend`, `accessibility`

**Body:**
```markdown
**Description**
The main plant component (`src/components/plant/DynamicPlant.tsx`) is built entirely using `<div>`s for visual styling (CSS art).
Screen readers (VoiceOver, NVDA) verify this as empty space. A blind user has no idea what their plant looks like, what stage it is at, or what items are equipped.

**Goal**
Make the plant accessible to screen readers.

**Tasks**
- Add `role="img"` to the main container.
- Add a dynamic `aria-label` that describes the scene (e.g., "A blooming sunflower in a neon pot with a gnome decor").
- Ensure all decorative elements (leaves, petals) are hidden from the accessibility tree (`aria-hidden="true"`).

**Area**
- `src/components/plant/DynamicPlant.tsx`
```

---

## Issue 13: Dynamic Challenge System 🎲 (Feature)

**Title:**
`feat: dynamic community-sourced daily challenges`

**Label:** `enhancement`, `good first issue`

**Body:**
```markdown
**Description**
Currently, the Daily Challenge (`src/app/api/challenges/today/route.ts`) picks from a hardcoded list of only 5 items (e.g., "Drink water"). This gets repetitive fast.

**Goal**
Move challenges to a JSON data file and add categories.

**Tasks**
- [ ] Create `src/data/challenges.json` with a list of 50+ challenges (Community Sourced).
- [ ] Structure: `[{ id: 1, text: "...", category: "health", difficulty: "easy" }]`.
- [ ] Update the API to pick a random challenge from this file.
- [ ] (Bonus) Pick a challenge based on the day of the week (e.g., "Mindful Monday").

**Area**
- `src/app/api/challenges/today/route.ts`
- `src/data/challenges.json` (New)
```
```
```
```

