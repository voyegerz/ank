import { Cpu, Zap, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const PcbDesign = () => {
  const navigate = useNavigate();

  const pcbImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1518433278988-2b2f1f6c5fd5?auto=format&fit=crop&q=80&w=2000",
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
          "We specialize in creating robust PCB designs that meet your specific electrical and mechanical requirements. Our team focuses on optimal component placement, signal integrity, and thermal management to ensure long-term reliability.",
          "From simple single-layer boards to complex multi-layer high-speed designs, we provide comprehensive schematic capture and layout services using industry-leading EDA tools.",
        ]}
        rightTitle="Turnkey Manufacturing"
        rightParagraphs={[
          "Our PCB services extend beyond design. We manage the entire fabrication and assembly process, including component procurement and quality inspection. This ensures that your electronics are built to the highest standards.",
          "We offer both prototyping and low-to-medium volume assembly services, providing you with fully tested and functional boards that are ready for integration into your products or systems.",
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
          "A well-designed PCB is a work of engineering art. It requires a perfect understanding of physics, electricity, and manufacturing limitations to create a truly reliable foundation for digital intelligence.",
          "We approach electronics with a focus on 'Design for Excellence' (DFX), ensuring that our boards are not only functional but also cost-effective to manufacture and easy to assemble.",
        ]}
        items={[
          {
            icon: <Cpu size={32} strokeWidth={1.2} />,
            label: "Signal Integrity",
            description: "Clean data and power flow",
            progress: 100,
          },
          {
            icon: <Zap size={32} strokeWidth={1.2} />,
            label: "High Reliability",
            description: "Built for industrial lifecycles",
            progress: 98,
          },
          {
            icon: <Settings size={32} strokeWidth={1.2} />,
            label: "Precision Layout",
            description: "Optimized for dense footprints",
            progress: 99,
          },
        ]}
      />

      <Testimonials
        eyebrow="Electronic Success"
        eyebrowHighlight="Success"
        heading="Client Feedback"
        watermarkText="PCBA"
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
        testimonials={[
          {
            title: "Miniaturization Mastery",
            rating: 5,
            review:
              "ANK helped us shrink our sensor board by 50% without compromising on signal quality. Their expertise in 4-layer PCB layout was exactly what we needed for our IoT project.",
            name: "Dr. Arun V.",
            company: "CTO, SmartSense Systems",
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
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
