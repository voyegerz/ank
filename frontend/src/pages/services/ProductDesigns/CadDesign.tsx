import { Hammer, Settings2, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import CTASection from "@/components/service/CTA";

const CadDesign = () => {
  const navigate = useNavigate();

  const cadImages = [
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
        caption="3D Designing & 2D Drafting"
        title="CAD Design Services"
        subtitle="Professional 3D designing and 2D drafting services to support engineering development, manufacturing, and system integration. Our designs are accurate, standards-compliant, and production-ready."
        watermarkNumber="04"
      />
      <ServiceDetail
        images={cadImages}
        caption="Engineering Excellence"
        leftTitle="Core Capabilities"
        leftParagraphs={[
          "Our team converts concepts and references into accurate engineering data, 3D models, and 2D drafting to simplify manufacturing, assembly, and future modifications. We ensure perfect spatial alignment and kinematic motion before production.",
        ]}
        features={[
          "Professional 3D Modeling",
          "2D Technical Drafting",
          "Design for Manufacturing (DFM)",
          "Standards Compliant (ASME/ISO)",
        ]}
        ctaLabel="Contact Us"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Concept Conversion",
            description:
              "Converting initial concepts and references into structured engineering data and preliminary 3D architectures.",
          },
          {
            number: "02",
            title: "Parametric Modeling",
            description:
              "Building highly accurate, editable 3D models of parts and assemblies using industry-leading CAD platforms.",
          },
          {
            number: "03",
            title: "Technical Drafting",
            description:
              "Producing detailed 2D manufacturing prints with precise GD&T to ensure zero ambiguity during production.",
          },
          {
            number: "04",
            title: "Manufacturing Support",
            description:
              "Ensuring our designs are optimized for specific fabrication processes, from CNC machining to injection molding.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Mechanical design with a conscience"
        eyebrowHighlight="Expert"
        title="Precision in every dimension"
        paragraphs={[
          "Practical engineering solutions built with clear thinking, real experience, and a focus on long-term value. We approach every design with a deep respect for physical limitations and manufacturing efficiency.",
        ]}
        imageSize="xs"
        iconSize={80}
        items={[
          {
            icon: <Settings2 size={20} strokeWidth={1.2} />,
            label: "Accuracy & Reliability",
            description: "Micron-level precision in every model",
            progress: 100,
          },
          {
            icon: <Wrench size={20} strokeWidth={1.2} />,
            label: "Production Ready",
            description: "Designs optimized for seamless assembly",
            progress: 100,
          },
          {
            icon: <Hammer size={20} strokeWidth={1.2} />,
            label: "Industry Standards",
            description: "Fully compliant with ASME & ISO norms",
            progress: 100,
          },
        ]}
      />

      <CTASection
        eyebrow="Bridge the gap to industry"
        eyebrowHighlight="industry"
        heading="Need professional 3D design and 2D drafting to bring your next physical product to life?"
        primaryLabel="Talk to our CAD Experts"
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

export default CadDesign;
