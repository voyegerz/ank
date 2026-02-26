# ANK Corporate Website - Project Documentation

## Project Overview
This project is a high-end corporate website for **ANK DESIGN & AUTOMATION SOLUTIONS LLP**. It is built using modern web technologies to provide a professional, interactive, and high-performance user experience.

### Main Technologies
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Scrolling:** [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** [React Router 7](https://reactrouter.com/)

### Architecture
The project follows a standard modular React architecture:
- `frontend/src/assets/`: Contains global assets like fonts and images.
- `frontend/src/components/`: Reusable UI components (Navbar, Footer, CommonHero, etc.).
- `frontend/src/pages/`: Individual page components organized by category:
  - `services/`: Specific service pages (e.g., Software Engineering, PCB Assembly).
  - `business-units/`: Detailed business unit pages.
  - `products/`: Product category pages.
  - `about/`: Company information and resource pages.
- `frontend/src/layouts/`: Layout wrappers for consistent page structures.
- `frontend/src/App.tsx`: Central routing and global animation/scrolling setup.

## Building and Running

### Prerequisites
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- npm or yarn

### Installation
```bash
cd frontend
npm install
```

### Development
To start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Building for Production
To create an optimized production build:
```bash
npm run build
```

### Previewing Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## Development Conventions

### Coding Style
- **Functional Components:** Always use functional components with TypeScript interfaces for props.
- **Tailwind CSS:** Use Tailwind utility classes for all styling. Custom theme colors and fonts are defined in `src/index.css`.
- **Naming:** Follow PascalCase for components and camelCase for variables/functions.
- **Folder Structure:** Keep pages in their respective category folders within `src/pages/`.

### Animations
- **Entrance Animations:** Use `framer-motion` for page and element entrance animations.
- **Page Transitions:** Handled via `AnimatePresence` in `App.tsx` and `PageLayout.tsx`.
- **Smooth Scroll:** Lenis is initialized globally via the `SmoothScroll` component.

### Global Components
- **CommonHero:** Use the `CommonHero` component for consistent, professional hero sections with tinted backgrounds on all sub-pages.
- **PageLayout:** Wrap all page contents in `PageLayout` to ensure consistent entrance animations and spacing.

## Key Performance Indicators (KPIs)
The project progress is tracked in the root `kpi_report.md` file. Refer to this file for the current status of milestones and completion percentages.
