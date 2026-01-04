# BloomQuest

> **Gamify your life, grow your garden.**
> A full-stack gamified habit tracker built with Next.js 16, MongoDB, and Tailwind CSS.


## 📖 Project Overview

**BloomQuest** transforms personal growth into a gardening game. As users complete real-life habits, focus sessions, and daily challenges, they earn XP and Coins to nurture a virtual plant, unlock decorations, and level up their personal dashboard.

### Key Features
*   **🌱 Gamified Habits**: Complete daily habits to water your plant and earn rewards.
*   **🧘 Focus Timer**: Built-in Pomodoro timer (Focus Mode) to stay productive.
*   **⚔️ Daily Quests**: Specific challenges generated daily to keep engagement high.
*   **🛍️ Shop System**: Use earned coins to buy new pots, decorations, and backgrounds.
*   **📊 Statistics**: Visualize progress with beautiful charts and streak tracking.
*   **🔐 Secure Auth**: Complete authentication system using JWT and Bcrypt.js.
*   **🌙 Dark Mode**: Fully responsive UI with seamless dark/light mode switching.

---

## 🛠️ Tech Stack

### Core
*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Server Actions)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)

### Backend & Database
*   **Runtime**: Node.js (via Next.js API Routes)
*   **Database**: [MongoDB](https://www.mongodb.com/)
*   **ODM**: [Mongoose](https://mongoosejs.com/)

### Security & Auth
*   **Hashing**: `bcryptjs`
*   **Tokens**: `jsonwebtoken` (JWT)

### UI Libraries
*   **Animation**: `framer-motion`, `canvas-confetti`
*   **Components**: `radix-ui` primitives
*   **Charts**: `recharts`
*   **Theme**: `next-themes`

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
*   Node.js 18+ installed
*   MongoDB installed locally or a MongoDB Atlas connection string

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/bloom-quest.git
    cd bloom-quest
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env.local` file in the root directory and add:
    ```env
    MONGODB_URI=mongodb://localhost:27017/bloom-quest
    JWT_SECRET=your_super_secret_jwt_key_here
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  **Open the app**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Folder Structure

A quick guide to the codebase structure:

```
src/
├── app/                  # Next.js App Router (Pages & API)
│   ├── (auth)/           # Route Group for Login/Register
│   ├── api/              # Backend API Routes (Auth, Habits, Shop, etc.)
│   ├── dashboard/        # Main Game Dashboard
│   ├── garden/           # Fullscreen Garden View
│   ├── shop/             # In-game Store
│   └── layout.tsx        # Root Layout
│
├── components/           # Reusable React Components
│   ├── dashboard/        # Dashboard-specific widgets (HabitList, Stats)
│   ├── plant/            # Dynamic Plant visualizer
│   ├── ui/               # Generic UI tokens (Buttons, Cards, Inputs)
│   └── layout/           # Navbar, Footer
│
├── lib/                  # Utilities & Configuration
│   ├── db.ts             # MongoDB Connection Helper
│   ├── auth.ts           # JWT & Password Utils
│   └── constants.ts      # Game Config (XP rates, Rewards)
│
├── models/               # Mongoose Database Schemas
│   ├── User.ts
│   ├── Habit.ts
│   └── Challenge.ts
│
└── types/                # Shared TypeScript Interfaces
    └── index.ts          # Centralized DTOs (IUser, IHabit, etc.)
```

## 📜 Scripts

*   `npm run dev`: Starts local dev server with hot-reload.
*   `npm run build`: Compiles the project for production.
*   `npm start`: Runs the production build.
*   `npm run lint`: Checks for code style issues.

---

## 🤝 Contributing

Contributions are welcome!
1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

