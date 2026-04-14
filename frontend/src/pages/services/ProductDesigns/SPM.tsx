import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import DetailedProcessSection from "../../../components/service/DetailedProcessSection";
import type { ProcessStep } from "../../../components/service/DetailedProcessSection";
import CTASection from "@/components/service/CTA";

const SPM = () => {
  const steps: ProcessStep[] = [
    {
      number: "1",
      title: "Conceptualization",
      subtitle: "Custom Engineering",
      description:
        "We begin by understanding your unique production constraints. Our team designs custom mechanical and electrical architectures specifically tailored to your specialized manufacturing needs.",
      images: [
        "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "2",
      title: "Advanced Fabrication",
      subtitle: "Precision Assembly",
      description:
        "Using high-grade materials and precision CNC machining, we fabricate every component of the SPM. Our master assemblers ensure sub-micron tolerances for high-speed operation.",
      images: [
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "3",
      title: "Control Integration",
      subtitle: "Smart Automation",
      description:
        "We integrate custom PLC and SCADA systems into the machine, providing intuitive HMI interfaces and real-time monitoring capabilities for maximum operational efficiency.",
      images: [
        "https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=600",
      ],
    },
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000"
        caption="Bespoke Automation"
        title="Special Purpose Machines"
        subtitle="Custom-designed machinery for high-volume, precision manufacturing. We build the tools that don't exist yet to solve your most complex production challenges."
        watermarkNumber="08"
      />

      <DetailedProcessSection
        eyebrow="Unique Solutions"
        title="Engineering Without Boundaries"
        description="Our SPM division specializes in designing and building one-of-a-kind industrial systems that optimize cycle times and improve product quality beyond off-the-shelf capabilities."
        steps={steps}
      />

      <CTASection
        eyebrowHighlight="Build"
        eyebrow="Custom Needs"
        heading="Have a production challenge that standard machines can't solve? Let's build a custom solution."
        primaryLabel="Discuss Your Concept"
        secondaryLabel="View Gallery"
      />
    </PageLayout>
  );
};

export default SPM;
