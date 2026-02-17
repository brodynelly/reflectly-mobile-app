# Reflectly Mobile App

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![CI](https://github.com/brodynelly/reflectly-mobile-app/workflows/CI/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

A React Native application for daily journaling, mood tracking, and guided reflection.

## Tech Stack

- React Native (Expo)
- Supabase (PostgreSQL + Auth)
- React Context API
- Nativewind (Tailwind CSS)
- TypeScript

## Getting Started

### Prerequisites

- Node.js (LTS)
- npm or Yarn
- Expo CLI (`npm install -g expo-cli`)
- Supabase project ([supabase.com](https://supabase.com))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/brodynelly/reflectly-mobile-app.git
   cd reflectly-mobile-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Supabase — create a `.env` file in the root:
   ```
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

## Usage

```bash
npm start
```

Opens the Expo dev server. Scan the QR code with Expo Go or run on a simulator:

```bash
npm run ios     # iOS simulator
npm run android # Android emulator
```

## Project Structure

```
reflectly-mobile-app/
├── app/          # Screens and navigation (Expo Router)
├── components/   # Reusable UI components
├── context/      # React Context for global state
├── hooks/        # Custom hooks
├── lib/          # Utility functions and third-party configs
├── supabase/     # Supabase client setup and API helpers
└── types/        # TypeScript interfaces and types
```

## License

MIT © 2024 Brody Nelson
