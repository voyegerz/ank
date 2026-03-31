# Home Page Template Specification (Amwerk Style)

## Overview
Based on the `ank_website_design_files/Theme_Example_Template_Pages/Home.html` template. The design is industrial, professional, and high-contrast, featuring large typography, accent colors (Sky Blue), and clean grid layouts.

## Design System

### 1. Colors
- **Primary Accent:** `#00a0dd` (Tailwind `sky-500`)
- **Secondary Accent:** Dark Indigo/Navy (for contrast)
- **Backgrounds:**
  - Pure White: `#ffffff`
  - Light Gray: `#f8f8f8` / `#f1f1f1`
  - Deep Dark: `#181818` (used for footer and high-impact sections)
- **Status/Hover:** Brightening of primary accent.

### 2. Typography
- **Headlines:** Large, bold (Nebulica Bold).
- **Outline Text:** Large background text with `text-transparent` and `-webkit-text-stroke`.
- **Labels:** Small, uppercase, letter-spaced (Tracking Widest).
- **Body:** Clean sans-serif (Nebulica Regular).

### 3. Layout Patterns
- **Grid:** 4-column grids for features and services.
- **Spacing:** Generous vertical padding (Section spacing 80px-120px).
- **Transitions:** Smooth entrance animations (Framer Motion).

---

## Page Structure

### 1. Hero Slider (Main Slider)
- **Content:**
  - Slide 1: "Future Engineering" / Outline: "Future"
  - Slide 2: "Design & Automation" / Outline: "Design"
  - Slide 3: "Make it possible" / Outline: "Possible"
- **Styling:** Full-width, high-quality industrial backgrounds with dark overlays.

### 2. Feature Highlights (4-Column)
- **Items:**
  - **Integrity:** Light gray box, top icon.
  - **Automation:** Light gray box, top icon.
  - **Innovation:** Light gray box, top icon.
  - **Get in Touch:** Sky-500 background box, white text, contact details.

### 3. Mission / "Our Story" Section
- **Left:** Small "OUR STORY" label, large headline, detailed paragraph.
- **Bottom-Left Grid:** 3 stats (e.g., 1K+ Visits, 98% Satisfaction).
- **Right:** Stylized image grid or large featured industrial image.

### 4. Business Units / Services (4-Column)
- **Cards:** White background, large icon, bold title, short description, "Learn More" link with chevron.
- **Hover:** Subtle elevation or border-bottom accent.

### 5. Testimonial Quote
- **Content:** Large blockquote, attribution, professional headshot.
- **Background:** Light gray or subtle image tint.

### 6. Client Logos
- Grayscale logos in a horizontal scrolling container.

### 7. Final CTA
- **Background:** Deep Dark (`#181818`).
- **Content:** "Ready to launch your next project?", description, "Get started" button.
