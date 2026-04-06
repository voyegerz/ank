import { Search, Zap, Database } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const RapidPrototyping = () => {
  const clients = [
    { name: "TechCorp", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Innovate AI", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "CloudSync", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "DataFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { name: "LogicGate", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "NetSys", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Samsung_wordmark.svg" },
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1544256718-3b2234b751ee?auto=format&fit=crop&q=80&w=2000"
        caption="Accelerated Product Development"
        title="Rapid Prototyping"
        subtitle="From CAD to physical proof-of-concept in record time, enabling high-fidelity testing, validation, and design refinement before mass manufacturing."
        watermarkNumber="12"
      />
      <ServiceDetail
        image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
        caption="Design Verification"
        leftTitle="Core Prototyping Capabilities"
        leftParagraphs={[
          "Multi-Material Printing: Utilizing SLA, SLS, and FDM additive manufacturing to deliver prototypes with specific mechanical and thermal properties as per your needs.",
          "High-Precision CNC Machining: Producing high-fidelity functional prototypes from actual production materials like Aluminum, PEEK, and specialized industrial plastics.",
          "Vacuum Casting & Low-Volume Polyurethane: Creating small batches of production-grade parts with custom textures and colors for field testing and market validation.",
          "Functional System Proofs: Developing integrated prototypes that combine physical enclosures with active electronics and firmware for true end-to-end testing.",
        ]}
        rightTitle="Why Prototype with ANK?"
        rightParagraphs={[
          "Product development is a race against both time and technical uncertainty. Our rapid prototyping services are designed to fail fast and learn faster, identifying potential issues long before they become costly tooling errors.",
          "By combining additive and subtractive manufacturing techniques under one roof, we provide the most efficient route from an abstract digital model to a physical product that you can hold, test, and present to stakeholders.",
        ]}
        features={[
          "Functional Load Testing",
          "Aesthetic Surface Finishing",
          "Rapid Design Iterations",
        ]}
        ctaLabel="Prototype Your Idea"
        onCtaClick={() => {
          console.log("Rapid Proto Start clicked");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Model Analysis",
            description:
              "We analyze your CAD geometry for manufacturability, identifying the optimal process—additive or subtractive—to achieve your prototype objectives.",
          },
          {
            number: "02",
            title: "Speed Fabrication",
            description:
              "Using our in-house suite of industrial technologies, we initiate fabrication immediately, often delivering physical models within 24 to 72 hours.",
          },
          {
            number: "03",
            title: "Finishing & Assembly",
            description:
              "We ensure your prototype meets the required visual and functional fidelity through expert sanding, painting, and subsystem integration.",
          },
          {
            number: "04",
            title: "Validation Check",
            description:
              "Before delivery, every prototype is verified against your design specifications to ensure it provides accurate data for your next development phase.",
          },
        ]}
      />
      <ClientMarquee clients={clients} />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our prototyping philosophy"
        eyebrowHighlight="prototyping"
        title="Predictable Speed to Market"
        paragraphs={[
          "A prototype is a bridge between a vision and a reality. Our philosophy centers on technical honesty—delivering models that accurately represent the final product's performance and manufacturability.",
          "We believe that the best prototypes are those that provide actionable data. Whether it is a simple fit-check or a complex functional system, our engineering commitment is to provide the highest clarity in record time.",
        ]}
        items={[
          {
            icon: <Zap size={32} strokeWidth={1.2} />,
            label: "Rapid Realization",
            description: "Industry-leading turnaround times",
            progress: 97,
          },
          {
            icon: <Database size={32} strokeWidth={1.2} />,
            label: "Material Breadth",
            description: "Prototyping with production materials",
            progress: 94,
          },
          {
            icon: <Search size={32} strokeWidth={1.2} />,
            label: "Design Clarity",
            description: "Identifying issues before tooling",
            progress: 98,
          },
        ]}
      />

      <Testimonials
        eyebrow="Success Stories"
        eyebrowHighlight="Stories"
        heading="From Vision to Hand in Record Time"
        watermarkText="Impact"
        bgImage="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=2000"
        testimonials={[
          {
            title: "Incredible Speed",
            rating: 5,
            review:
              "ANK Design managed to deliver a full-scale CNC machined prototype for our aerospace client in just 4 days. The dimensional accuracy was perfect and the surface finish was exceptional.",
            name: "Lucas Grant",
            company: "Engineering VP, Skywards Aerospace",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          },
          {
            title: "Essential Insights",
            rating: 5,
            review:
              "Their grasp of both structural printing and functional vacuum casting saved us from a major design flaw that would have cost us thousands in production tooling later on.",
            name: "Sofia Mendez",
            company: "CTO, Innovate Lab",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Accelerate your design"
        eyebrowHighlight="Accelerate"
        heading="Looking for an engineering team that can transform your complex designs into high-fidelity functional prototypes with record speed?"
        primaryLabel="Schedule Proto Consult"
        secondaryLabel="View Gallery"
        onPrimaryClick={() => {
          console.log("Rapid Proto Start clicked");
        }}
        onSecondaryClick={() => {
          console.log("Gallery clicked");
        }}
      />
    </PageLayout>
  );
};

export default RapidPrototyping;
