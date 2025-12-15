# 🚀 MY SOFTAKE — Frontend Developer Practical Task

> **Pixel‑perfect React implementation from Figma** — responsive, animated, and architected with clean, scalable components.

[![React](https://img.shields.io/badge/React-Vite-61DAFB?logo=react\&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss\&logoColor=white)](#)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?logo=framer\&logoColor=white)](#)
[![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?logo=netlify\&logoColor=white)](#)

---

## 🧠 Overview

This repository contains the **frontend implementation** for the **MY SOFTAKE Frontend Developer Technical Interview Task**.
The goal was to convert the provided **Figma design** into a **pixel‑perfect, fully responsive React application**, following **senior‑level best practices**:

* Clean component architecture
* Scalable folder structure
* Reusable UI primitives
* Smooth animations & transitions
* Mobile‑first responsiveness

---

## 🔗 Live Preview

* 🌄 **Mountain View:** [https://grand-sawine-bbaeb6.netlify.app/](https://grand-sawine-bbaeb6.netlify.app/)
* 🦸 **SuperHero View:** [https://grand-sawine-bbaeb6.netlify.app/superhero](https://grand-sawine-bbaeb6.netlify.app/superhero)
* 🧑‍💼 **Admin Dashboard:** [https://grand-sawine-bbaeb6.netlify.app/admin](https://grand-sawine-bbaeb6.netlify.app/admin)

---

## 📦 GitHub Repository

* 🔗 **Repo:** [https://github.com/Afsaruddin12133/Mysoftake-Frontend-Task.git](https://github.com/Afsaruddin12133/Mysoftake-Frontend-Task.git)

---

## 🛠 Tech Stack

* **React.js** (Vite)
* **Tailwind CSS** (utility‑first styling)
* **Framer Motion** (animations & micro‑interactions)
* **Lucide React** (icons)
* **React Router DOM** (client‑side routing)

---

## ✨ Features

### 🌄 Landing Pages (Mountain View)

* Pixel‑perfect UI from Figma
* Fully responsive (mobile / tablet / desktop)
* Smooth page & element animations using **Framer Motion**
* Dynamic hero slider
* Circular hero rotation using **trigonometry (sin / cos)** for precise positioning
* Hamburger navigation for small devices

### 🦸 SuperHero Section

* Auto‑rotating hero content every **3 seconds**
* Dynamic hero descriptions
* Circular hero avatars with animated rotation
* Mobile‑optimized layout (heroes repositioned to bottom)

### 🧑‍💼 Admin Dashboard

* Global **Main Topbar** (persistent across dashboard pages)
* Sidebar navigation with icons
* Default active menu item (`Overview`)
* Page‑level Topbar
* Clean, scalable dashboard layout
* Component‑driven architecture for easy extension

---

## 🧩 Project Structure

```text
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
```

---

## 🎯 Architectural Decisions

* **Layout abstraction:** `DashboardLayout` ensures consistent structure and easy scalability
* **Data separation:** UI logic is decoupled from static data (`/data` folder)
* **Reusable components:** Cards, charts, navigation, and layout primitives are reusable
* **Animation isolation:** Motion logic lives close to the components that need it
* **Mobile‑first:** Tailwind breakpoints used from smallest screen upwards

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Afsaruddin12133/Mysoftake-Frontend-Task.git
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the project

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build locally
```

---

## 📱 Responsiveness

* Mobile navigation with hamburger menu
* Fluid grids and flexible layouts
* Adaptive hero positioning across breakpoints
* Dashboard optimized for both large and small screens

---

## 🧪 Code Quality

* ESLint configured
* Consistent naming conventions
* Clear separation of concerns
* Readable and maintainable component logic

---

## 🙌 Final Notes

This project was completed as part of the **MY SOFTAKE Frontend Developer interview process**, demonstrating:

* Real‑world React architecture
* Strong UI/UX attention to detail
* Animation and layout problem‑solving
* Production‑ready frontend practices

**Thank you for reviewing!** 🙏

---

### 👨‍💻 Author

**Afsar Uddin**
Frontend Developer
