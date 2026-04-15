import { Rocket, Box, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import CTASection from "@/components/service/CTA";

const RapidPrototyping = () => {
  const navigate = useNavigate();

  const prototypeImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
        caption="From Concept to Reality Fast"
        title="Rapid Prototyping"
        subtitle="Accelerate your product development cycle with our rapid prototyping services. We use advanced manufacturing techniques to quickly create high-fidelity physical models that look, feel, and function like your final product."
        watermarkNumber="17"
      />
      <ServiceDetail
        images={prototypeImages}
        caption="Speed Meets Precision"
        leftTitle="Accelerated Development"
        leftParagraphs={[
          "Time-to-market is critical in today's competitive landscape. Our rapid prototyping services allow you to test and refine your designs in days rather than months, ensuring your final product is perfected before mass production. We combine multiple technologies, including 3D printing, CNC machining, and cast urethane, to create prototypes that match your specific requirements.",
          "A prototype is a critical tool for functional testing. We build prototypes that allow you to verify fit, form, and function in real-world conditions, identifying design flaws early. Our engineering team provides feedback on manufacturability during this phase, helping you optimize for full-scale production while your product is still in development.",
        ]}
        features={[
          "High-Fidelity Visual Models",
          "Functional Mechanical Prototypes",
          "Multi-Material Options",
          "Design for Manufacture (DFM) Feedback",
        ]}
        ctaLabel="Prototype your Idea"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "CAD Review",
            description:
              "Analyzing your 3D models to determine the most efficient prototyping method and material for your goals.",
          },
          {
            number: "02",
            title: "Fabrication",
            description:
              "Utilizing state-of-the-art additive or subtractive manufacturing to create the physical components of your prototype.",
          },
          {
            number: "03",
            title: "Post-Processing",
            description:
              "Cleaning, sanding, painting, or assembling the components to achieve the desired surface finish and functional state.",
          },
          {
            number: "04",
            title: "Testing & Review",
            description:
              "Conducting fit-checks and functional tests, followed by a detailed review session to plan for the next design iteration.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our prototype ethos"
        eyebrowHighlight="ethos"
        title="Fail Fast, Succeed Faster"
        paragraphs={[
          "Prototyping is an insurance policy for your manufacturing budget. We believe that physical interaction with a design provides insights that simulation alone cannot capture, ensuring even our fastest models are built with industrial accuracy.",
        ]}
        imageSize="xs"
        iconSize={80}
        items={[
          {
            icon: <Rocket size={20} strokeWidth={1.2} />,
            label: "Rapid Turnaround",
            description: "From CAD to hand in days",
            progress: 100,
          },
          {
            icon: <Box size={20} strokeWidth={1.2} />,
            label: "Material Variety",
            description: "Wide range of industrial polymers",
            progress: 95,
          },
          {
            icon: <Cpu size={20} strokeWidth={1.2} />,
            label: "Functional Accuracy",
            description: "Perfect fit and movement",
            progress: 98,
          },
        ]}
      />

      <CTASection
        eyebrow="Bring your vision to life"
        eyebrowHighlight="vision"
        heading="Ready to see and feel your design in the real world?"
        primaryLabel="Request a Prototype"
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

export default RapidPrototyping;
