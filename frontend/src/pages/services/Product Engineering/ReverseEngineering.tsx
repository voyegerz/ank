import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import DetailedProcessSection from "../../../components/service/DetailedProcessSection";
import type { ProcessStep } from "../../../components/service/DetailedProcessSection";
import CTASection from "@/components/service/CTA";

const ReverseEngineering = () => {
  const steps: ProcessStep[] = [
    {
      number: "1",
      title: "Data Acquisition",
      subtitle: "3D Scanning & Measurement",
      description:
        "Using high-precision 3D laser scanners and CMM probes, we capture the exact geometry of physical components, including internal structures and complex surface curves.",
      images: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "2",
      title: "CAD Reconstruction",
      subtitle: "Geometric Modeling",
      description:
        "The scanned point cloud data is converted into clean, editable parametric CAD models. We ensure structural integrity and correct any wear or damage found in the original part.",
      images: [
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "3",
      title: "Material & FEA Analysis",
      subtitle: "Performance Verification",
      description:
        "We analyze material properties and use Finite Element Analysis (FEA) to verify that the reconstructed model meets or exceeds the original performance specifications.",
      images: [
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
      ],
    },
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
        caption="Design Restoration"
        title="Reverse Engineering"
        subtitle="Transform physical parts into digital assets. We provide comprehensive reverse engineering services to replicate, optimize, or document legacy industrial components."
        watermarkNumber="05"
      />

      <DetailedProcessSection
        eyebrow="Precision Reconstruction"
        title="From Physical to Parametric"
        description="Our reverse engineering workflow combines high-end scanning technology with deep mechanical engineering expertise to bridge the gap between legacy hardware and modern manufacturing."
        steps={steps}
      />

      <CTASection
        eyebrowHighlight="Restore"
        eyebrow="Legacy Support"
        heading="Need to replicate or improve an obsolete part? Let's bring it into the digital age."
        primaryLabel="Start Scanning"
        secondaryLabel="Technical Consultation"
      />
    </PageLayout>
  );
};

export default ReverseEngineering;
