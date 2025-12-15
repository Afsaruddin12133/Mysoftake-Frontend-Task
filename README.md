# MySoftake Frontend Practical Task

This repository contains the frontend implementation for the **MY SOFTAKE Frontend Developer Technical Interview Task**.

The project is built by converting the provided **Figma design** into a **pixel-perfect, responsive React application**, following clean code practices and proper component architecture.

---

## 🔗 Live Preview

👉 **Live URL For Mountain View:** [(Add your Netlify / Vercel link here)](https://grand-sawine-bbaeb6.netlify.app/)
👉 **Live URL For Super Hero View:** [(Add your Netlify / Vercel link here)](https://grand-sawine-bbaeb6.netlify.app/superhero)
👉 **Live URL For Admin View:** [(Add your Netlify / Vercel link here)](https://grand-sawine-bbaeb6.netlify.app/admin)

## 📦 GitHub Repository

👉 **Repo URL:** (Add your GitHub repo link here)

---

## 🛠 Tech Stack

- **React.js** (Vite)
- **Tailwind CSS**
- **Framer Motion** (animations & transitions)
- **Lucide React** (icons)
- **React Router DOM** (routing)

---

## 📐 Features Implemented

### 🌄 Frontend Landing Pages
- Pixel-perfect UI based on Figma
- Fully responsive (mobile, tablet, desktop)
- Smooth animations using **Framer Motion**
- Dynamic hero sliders
- Circular hero rotation with trigonometry (sin / cos based positioning)
- Hamburger navigation on small devices

### 🦸 SuperHero Section
- Auto-rotating content every **3 seconds**
- Dynamic description updates
- Circular hero avatars with animated rotation
- Mobile-friendly layout (heroes repositioned to bottom)

### 🧑‍💼 Admin Dashboard
- Global **Main Topbar**
- Sidebar navigation with icons
- Default active menu item (`Overview`)
- Page-level Topbar
- Clean and scalable layout structure
- Component-based architecture

---

## 🧩 Project Structure
```
Mysoftake-Frontend-Task/
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── _redirects
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    │   ├── dashboard/
    │   ├── mountain/
    │   └── superhero/
    ├── components/
    │   ├── dashboard/
    │   │   ├── Calendar.jsx
    │   │   ├── EarningsChart.jsx
    │   │   ├── InstitutionOverview.jsx
    │   │   ├── MainTopbar.jsx
    │   │   ├── Sidebar.jsx
    │   │   ├── StatsCard.jsx
    │   │   ├── StudentPieChart.jsx
    │   │   └── Topbar.jsx
    │   ├── mountain/
    │   │   └── Navigation.jsx
    │   └── superhero/
    │       ├── HeroCircles.jsx
    │       ├── HeroRotator.jsx
    │       └── SuperHeroNavigation.jsx
    ├── data/
    │   ├── dashboard/
    │   │   ├── data.js
    │   │   ├── institutions.js
    │   │   └── menu.js
    │   ├── mountain/
    │   │   └── slides.js
    │   └── superhero/
    │       ├── navItems.js
    │       └── superHeroes.js
    ├── layouts/
    │   └── DashboardLayout.jsx
    └── pages/
        ├── dashboard/
        │   └── Dashboard.jsx
        ├── mountain/
        │   └── HeroSlider.jsx
        └── superhero/
            └── SuperHeroLanding.jsx
``

## 🚀 Getting Started

### Clone the repository
```bash
git clone https://github.com/your-username/Mysoftake-Frontend-Task.git
### Install dependencies
```bash
npm install
### Run the project
```bash
npm run dev


