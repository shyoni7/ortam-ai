# Ortam AI - Next.js Project

## תקציר הפרויקט / Project Summary

מערכת מבוססת Next.js עם TypeScript, TailwindCSS ותמיכה ב-RTL עבור עברית וערבית. הפרויקט כולל מערכת ניהול מובנית לעריכת תכנים ותמונות.

A Next.js-based system with TypeScript, TailwindCSS, and RTL support for Hebrew and Arabic. The project includes a built-in admin system for content and image management.

## טכנולוגיות / Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing
- **React Hook Form + Zod** - Form handling and validation
- **Jose + bcryptjs** - Authentication
- **RTL Support** - Hebrew and Arabic language support

## מבנה הפרויקט / Project Structure

```
ortam-ai/
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # Reusable React components
│   ├── admin/         # Admin panel components and pages
│   ├── styles/        # Global styles and Tailwind imports
│   ├── lib/           # Utility functions and configurations
│   └── utils/         # Helper functions
├── public/            # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

## התקנה והרצה / Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/yonibmyguest/ortam-ai.git
cd ortam-ai
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## מערכת הניהול / Admin System

הפרויקט כולל מערכת ניהול מובנית הנגישה בכתובת `/admin`:

- **התחברות מאובטחת** - מערכת אימות עם הצפנת סיסמאות
- **עריכת תכנים** - ממשק פשוט לעדכון טקסטים
- **ניהול תמונות** - העלאה וניהול של קבצי מדיה
- **תמיכה ב-RTL** - ממשק מותאם לעברית וערבית

The project includes a built-in admin system accessible at `/admin`:

- **Secure Authentication** - Password-encrypted login system
- **Content Editing** - Simple interface for updating texts
- **Image Management** - Upload and manage media files
- **RTL Support** - Interface adapted for Hebrew and Arabic

## פיתוח / Development

### הוספת קומפוננטות חדשות / Adding New Components

כל הקומפוננטות נמצאות תחת `src/components/` ומשתמשות ב-TypeScript ו-TailwindCSS.

### עיצוב RTL

הפרויקт תומך ב-RTL באמצעות TailwindCSS עם הגדרות מותאמות לעברית וערבית.

### סקריפטים זמינים / Available Scripts

- `npm run dev` - הרצת שרת פיתוח
- `npm run build` - בניית גרסת production
- `npm run start` - הרצת שרת production
- `npm run lint` - בדיקת קוד עם ESLint

## רישיון / License

This project is private and proprietary.

---

**הערה:** קבצי אזור הניהול נמצאים תחת `src/admin/` וכוללים דפים לכניסה וניהול תוכן.

**Note:** Admin area files are located under `src/admin/` and include login and content management pages.
