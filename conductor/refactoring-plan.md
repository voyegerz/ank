# Implementation Plan - ANK Corporate Website Refactoring

This plan implements the refactoring requested in the handwritten notes (@refactoring_plan/).

## Phase 1: Navigation & Header/Footer Adjustments

### Navbar.tsx
- [ ] **Logo Size:** Increase `h-7` to `h-10`.
- [ ] **Menu Font Size:** Increase from `text-[11px]` to `text-[13px]`.
- [ ] **Menu Rename:** Rename "What we do" to "Our Services".
- [ ] **Services Refactoring:** Update `WHAT_WE_DO_TABS` to `OUR_SERVICES_TABS` with 5 categories:
    1. **Product Designs:** Cad design - 2D/3D, FEA Analysis, Reverse Engineering, SPM.
    2. **Industrial Automation:** PLC Programming, Panel Automation, DCS/SCADA/HMI.
    3. **Software Solutions:** Website design, Application design, SAAS, Mobile App, Web/IoT App, Inventory Mgt.
    4. **Manufacturing:** Rapid Prototyping, 3D Printing, PCB Design/Manufacture.
    5. **Student Outreach:** Schools/College projects, Workshops, P2P, DIY Robotics kits.
- [ ] **Remove CTA:** Remove the "Get a quote" button from the desktop and mobile navbar.
- [ ] **Dropdowns:** Ensure "Careers" and "Contact" have simple dropdowns if requested (Note: "All menu - dropdown except our service"). *Actually, I'll keep them as links unless they need sub-items.*

### Footer.tsx
- [ ] **Font Size:** Increase font sizes for headings (`text-[10px]` -> `text-[12px]`) and links.
- [ ] **Quick Links:** 
    - Remove "Get A Quote".
    - Add "Contact Us".
- [ ] **Alignment:** Ensure professional alignment (likely centered on mobile, well-spaced on desktop).

## Phase 2: Home Page Refactoring (Home.tsx)

- [ ] **Remove Sections:**
    - "Our Team" (Section 8).
    - "Our Work" / Portfolio (Section 12).
    - Any lingering "Performance", "Communication", or "Insight" sections.
- [ ] **Add/Update Services Section:**
    - Rename "What we do" to "Our Services" if it exists as a section.
    - Implement a new "Our Services" section featuring the 5 categories.
- [ ] **Add Student Outreach Section:**
    - Create a dedicated section for "Student Outreach" with the mentioned points and a "Get in touch" button/form.
- [ ] **Update Final CTA:**
    - Redirect "Ready to begin?" buttons to the Services section.

## Phase 3: About Page & Sub-pages

### CompanyOverview.tsx
- [ ] **Content Update:** Ensure it covers "Who we are", "Vision", "Mission", and "Govt" (government associations/certifications).
- [ ] **Stats:** Update to "8+ years of exp", "15+ expertise".

### Routes & Clean-up (App.tsx)
- [ ] **Remove Routes:**
    - Press & Newsroom (`/about/press`)
    - Blogs (`/about/blogs`)
    - Tutorials & Ebooks (`/about/resources`)
    - Whitepapers (`/about/whitepapers`)

### CaseStudies.tsx
- [ ] **Focus:** Ensure "Lung Physio" is featured prominently.

### Careers.tsx
- [ ] **Drop CV Form:** Add a button/form with fields: Name, Number, Email, Location, CV (file upload), Position, Years of Experience (Y.O.E).

## Phase 4: Products Page Refactoring

- [ ] **Clean-up:** Remove "Projects & Modelling" from products.
- [ ] **UI Update:** Use big size fonts for the 5 points and implement dropdowns for product categories.

## Phase 5: Contact Page & Form Refactoring

### Contact.tsx
- [ ] **Information:** Highlight Map, Mail, Cell, Visit.
- [ ] **Form Implementation:** Update/Implement the comprehensive form:
    1. Name
    2. Email
    3. Number
    4. Designation
    5. Company Name
    6. Company Website
    7. Country
    8. Message
- [ ] **Button:** "Send Now".

## Verification Plan

### Manual Testing
- [ ] Verify Navbar logo and font sizes.
- [ ] Test all links in the new "Our Services" dropdown.
- [ ] Confirm removal of specified home page sections.
- [ ] Test the new forms on Careers and Contact pages.
- [ ] Verify Footer links and styling.
- [ ] Check About sub-pages removal (routes should not resolve or be linked).

### Type Checking
- [ ] Run `npm run typecheck` to ensure no TypeScript errors after refactoring.
