# American University of Paris - Course Registration System

A beautiful, modern web application for course registration at the American University of Paris. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Secure Login System**: Beautiful login page with authentication flow
- **Course Search & Filter**: Search courses by code, title, or professor with department filtering
- **Course Registration**: Register for courses with real-time availability tracking
- **Schedule Management**: View your registered courses and manage your schedule
- **Credit Tracking**: Monitor total credits registered per semester
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd registration
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
registration/
├── src/
│   ├── components/          # React components
│   │   ├── Login.tsx
│   │   ├── RegistrationDashboard.tsx
│   │   ├── CourseCard.tsx
│   │   └── RegisteredCoursesList.tsx
│   ├── data/               # Sample course data
│   │   └── courses.ts
│   ├── types/              # TypeScript type definitions
│   │   └── course.ts
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Usage

1. **Login**: Enter any email and password to access the registration system (authentication is simplified for demo purposes)

2. **Browse Courses**: Use the search bar and department filter to find courses

3. **Register**: Click "Register for Course" on any available course

4. **Manage Schedule**: View your registered courses in the sidebar and drop courses if needed

5. **Track Credits**: Monitor your total credits in the schedule sidebar

## Customization

### Colors

The app uses AUP (American University of Paris) brand colors defined in `tailwind.config.js`:
- `aup-blue`: #003366
- `aup-gold`: #D4AF37

You can modify these in the Tailwind config file.

### Course Data

Edit `src/data/courses.ts` to add, remove, or modify available courses.

## License

This is a demo project for educational purposes.

