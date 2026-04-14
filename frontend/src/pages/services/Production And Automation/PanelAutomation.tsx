import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import DetailedProcessSection from "../../../components/service/DetailedProcessSection";
import type { ProcessStep } from "../../../components/service/DetailedProcessSection";
import CTASection from "@/components/service/CTA";

const PanelAutomation = () => {
  const steps: ProcessStep[] = [
    {
      number: "1",
      title: "Design & Engineering",
      subtitle: "EPLAN & AutoCAD",
      description:
        "We create comprehensive electrical schematics using industry-standard tools like EPLAN and AutoCAD Electrical, ensuring optimal component layout and wiring efficiency.",
      images: [
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "2",
      title: "Assembly & Wiring",
      subtitle: "Precision Fabrication",
      description:
        "Our skilled technicians assemble and wire panels according to the design, using high-quality components from leading manufacturers like Siemens, ABB, and Schneider.",
      images: [
        "https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "3",
      title: "Testing & QA",
      subtitle: "Safety Verification",
      description:
        "Every panel undergoes rigorous point-to-point continuity testing, insulation resistance checks, and functional logic verification before being dispatched to the site.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=600",
      ],
    },
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=2000"
        caption="Control Excellence"
        title="Panel Automation"
        subtitle="Custom-built electrical control panels designed for reliability and safety. We provide end-to-end solutions from design and fabrication to testing and commissioning."
        watermarkNumber="12"
      />

      <DetailedProcessSection
        eyebrow="Robust Controls"
        title="The Heart of Your Automation"
        description="Our control panels are built to the highest industrial standards, ensuring long-term reliability and ease of maintenance for your complex automated systems."
        steps={steps}
      />

      <CTASection
        eyebrowHighlight="Expert"
        eyebrow="Panel Design"
        heading="Looking for reliable, well-engineered control panels for your facility? Let's discuss your requirements."
        primaryLabel="Get a Panel Quote"
        secondaryLabel="Technical Specs"
      />
    </PageLayout>
  );
};

export default PanelAutomation;
