import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import DetailedProcessSection from "../../../components/service/DetailedProcessSection";
import type { ProcessStep } from "../../../components/service/DetailedProcessSection";
import CTASection from "@/components/service/CTA";

const ProjectToProduct = () => {
  const steps: ProcessStep[] = [
    {
      number: "1",
      title: "Commercial Feasibility",
      subtitle: "Market Analysis",
      description:
        "We help students evaluate the commercial potential of their academic prototypes, identifying market needs and potential industrial applications for their innovations.",
      images: [
        "https://images.unsplash.com/photo-1454165833767-027eeed1a131?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "2",
      title: "Design for Manufacturing",
      subtitle: "Industrialization",
      description:
        "Moving from a functional prototype to a scalable product. We guide students through the DFM (Design for Manufacturing) process, selecting industrial-grade components and optimizing production costs.",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "3",
      title: "Incubation Support",
      subtitle: "Launch Assistance",
      description:
        "Selected projects receive incubation support from ANK, including access to our manufacturing supply chain, legal guidance for IP protection, and potential early-stage investment.",
      images: [
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=600",
      ],
    },
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
        caption="From Concept to Market"
        title="Project to Product (P2P)"
        subtitle="Transforming student innovation into industrial reality. Our P2P program incubates promising academic projects and helps turn them into commercially viable hardware and software products."
        watermarkNumber="03"
      />

      <DetailedProcessSection
        eyebrow="Incubation Hub"
        title="Scale Your Innovation"
        description="We believe some of the best industrial solutions start in the lab. Our P2P program provides the resources and expertise to bridge the 'valley of death' between a prototype and a product."
        steps={steps}
      />

      <CTASection
        eyebrowHighlight="P2P"
        eyebrow="Pitch Your Idea"
        heading="Have a prototype with massive industrial potential? Apply for our Project to Product incubation program today."
        primaryLabel="Apply for Incubation"
        secondaryLabel="How it Works"
      />
    </PageLayout>
  );
};

export default ProjectToProduct;
