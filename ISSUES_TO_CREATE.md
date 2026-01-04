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
```
```
