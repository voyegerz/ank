# Home Page Specification - ANK Corporate Website

## Overview
The Home page is the primary entry point for the ANK website. It follows the "Amwerk" industrial/corporate design theme, characterized by a professional slider, icon-based feature highlights, and clear service categorization.

## Page Structure

### 1. Main Slider (Hero Section)
- **Type:** Full-screen or large height content slider.
- **Backgrounds:** High-quality industrial/engineering images (tinted or with overlays).
- **Slides Content:**
    - **Slide 1:**
        - Headline: "Future Engineering" (Main) / "Future" (Outline/Background text)
        - Subheadline: "Interactively coordinate proactive e-commerce via process-centric 'outside the box' thinking."
        - CTA Button: "Get Started" (Link to /contact)
    - **Slide 2:**
        - Headline: "Design & Automation" / "Design"
        - Subheadline: "We provide expert services in 3D/2D CAD Development, PLC & SCADA Programming."
        - CTA Button: "Our Services" (Link to /services/software-engineering)
    - **Slide 3:**
        - Headline: "Make it possible" / "Possible"
        - Subheadline: "Providing cutting edge solution, design, development & manufacturing services."
        - CTA Button: "About Us" (Link to /about/company-overview)
- **Styling:** 
    - Use `framer-motion` for slide transitions.
    - Large typography with outline text effects for background words.
    - Accent Color: Indigo/Blue (#00a0dd equivalent in Tailwind: `sky-500` or `indigo-600`).

### 2. Feature Highlights (Icon Boxes)
- **Grid:** 4-column layout (stacks on mobile).
- **Items:**
    - **Integrity:** Icon + Title + Brief description ("Taking seamless key performance indicators offline").
    - **Automation:** Icon + Title + Brief description ("Nanotechnology immersion will close the loop").
    - **Innovation:** Icon + Title + Brief description ("Dramatically visualize customer directed convergence").
    - **Get in Touch:** Specific box with Contact Info (Address, Phone, Email) - High contrast background.
- **Styling:** 
    - Light gray backgrounds for first 3 boxes.
    - Solid accent color background for the 4th box (Get in touch).
    - Square/rounded icon containers.

### 3. "Our Story" / Mission Section
- **Layout:** Two columns.
- **Left Column:** 
    - Small Label: "OUR STORY" (Uppercase, tracked).
    - Headline: "We are a multidisciplinary team providing cutting edge solution..."
    - Description Paragraph: Detailed company mission.
    - Stats/KPIs: 3-column grid showing "1K+ Monthly Visits", "98% Satisfaction", "4.9/5 Ratings".
- **Right Column:** 
    - Image Grid: Overlapping images or a large stylized image showing the team/facility.

### 4. Business Units / Services Categories
- **Layout:** Grid of 4 cards.
- **Units:**
    - CAD Design Services
    - Software Development
    - Manufacturing
    - Embedded Systems & IoT
- **Card Design:** 
    - Large icon.
    - Title.
    - Short description.
    - "Learn More" link with chevron.
    - Hover effect: Shift background color or add shadow.

### 5. Quote / Testimonial Section
- **Background:** Image background or solid light gray.
- **Content:** Large blockquote with a professional headshot and attribution.
- **Text:** "Simply the best. Better than all the rest. I’d recommend their service..."

### 6. Partners / Clients Logo Slider (Optional)
- Grayscale logos of collaborated companies or industries.

### 7. Final Call to Action (CTA)
- **Background:** Dark/Accent color.
- **Headline:** "Ready to launch your next project?"
- **Description:** "With having a team of unique minds, you can easily get your imagined idea into reality."
- **Button:** Large "Get started a project" button.

## Technical Requirements
- **Smooth Scroll:** Integrated with Lenis.
- **Animations:** Entrance animations for all sections using `framer-motion`.
- **Responsive:** Fully optimized for mobile, tablet, and desktop (Tailwind breakpoints).
- **Icons:** Use `lucide-react` or similar high-quality SVG icons.

## Assets Needed
- `hero_bg.png`
- `cad_page_bg.png`
- `Software_dev_page_bg.png`
- Team/Office photos (Placeholders for now).
- Client logos (Placeholders).
