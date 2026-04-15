import { Cpu, Zap, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import CTASection from "@/components/service/CTA";

const PcbDesign = () => {
  const navigate = useNavigate();

  const pcbImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
        caption="Electronics Engineering & Assembly"
        title="PCB Design & Manufacture"
        subtitle="High-quality printed circuit board (PCB) design, fabrication, and assembly services. We provide end-to-end electronics solutions, from schematic capture and layout optimization to component sourcing and final board testing."
        watermarkNumber="19"
      />
      <ServiceDetail
        images={pcbImages}
        caption="Intelligence on a Board"
        leftTitle="Precision Electronics Design"
        leftParagraphs={[
          "We specialize in creating robust PCB designs that meet your specific electrical and mechanical requirements. Our team focuses on optimal component placement, signal integrity, and thermal management to ensure long-term reliability. From simple single-layer boards to complex multi-layer high-speed designs, we provide comprehensive schematic capture and layout services using industry-leading EDA tools.",
          "Our PCB services extend beyond design; we manage the entire fabrication and assembly process, including component procurement and quality inspection. We offer both prototyping and low-to-medium volume assembly services, providing fully tested and functional boards ready for integration.",
        ]}
        features={[
          "Custom Schematic & PCB Layout",
          "Signal & Power Integrity Analysis",
          "Component Sourcing & Procurement",
          "Fully Assembled & Tested Boards",
        ]}
        ctaLabel="Design your PCB"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Schematic Capture",
            description:
              "Translating your circuit requirements into a detailed electrical schematic with precise component definitions.",
          },
          {
            number: "02",
            title: "PCB Layout",
            description:
              "Designing the physical board layout, prioritizing signal paths, thermal dissipation, and mechanical constraints.",
          },
          {
            number: "03",
            title: "Fabrication & PCBA",
            description:
              "Managing the board fabrication and surface-mount (SMT) or through-hole assembly of all components.",
          },
          {
            number: "04",
            title: "Testing & Validation",
            description:
              "Performing rigorous functional testing and visual inspection to ensure zero defects in the final electronic assembly.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our electronics ethos"
        eyebrowHighlight="ethos"
        title="Logic in Copper"
        paragraphs={[
          "A well-designed PCB is a work of engineering art. We approach electronics with a focus on 'Design for Excellence' (DFX), ensuring that our boards are not only functional but also cost-effective and reliable.",
        ]}
        imageSize="xs"
        iconSize={80}
        items={[
          {
            icon: <Cpu size={20} strokeWidth={1.2} />,
            label: "Signal Integrity",
            description: "Clean data and power flow",
            progress: 100,
          },
          {
            icon: <Zap size={20} strokeWidth={1.2} />,
            label: "High Reliability",
            description: "Built for industrial lifecycles",
            progress: 98,
          },
          {
            icon: <Settings size={20} strokeWidth={1.2} />,
            label: "Precision Layout",
            description: "Optimized for dense footprints",
            progress: 99,
          },
        ]}
      />

      <CTASection
        eyebrow="Empower your product"
        eyebrowHighlight="product"
        heading="Need professional PCB design and assembly services for your next innovation?"
        primaryLabel="Start PCB Project"
        secondaryLabel="Contact Us"
        onPrimaryClick={() => {
          navigate("/contact");
        }}
        onSecondaryClick={() => {
          navigate("/contact");
        }}
      />
    </PageLayout>
  );
};

export default PcbDesign;
