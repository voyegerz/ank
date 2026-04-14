import { Box, Layers, Zap } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const Fdm3DPrinting = () => {
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
        bgImage="https://images.unsplash.com/photo-1631034300438-e4b85770337c?auto=format&fit=crop&q=80&w=2000"
        caption="Rapid Additive Manufacturing"
        title="FDM 3D Printing"
        subtitle="High-strength, industrial-grade 3D printing for functional prototypes and low-volume production parts using advanced thermoplastic materials."
        watermarkNumber="09"
      />
      <ServiceDetail
        image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
        caption="Additive Innovation"
        leftTitle="Core Capabilities"
        leftParagraphs={[
          "Industrial-Grade Thermoplastics: Printing with high-performance materials like Carbon Fiber, Nylon, Polycarbonate, and ASA for maximum strength and thermal resistance.",
          "Large-Scale Build Volumes: Accommodating substantial industrial parts with high-precision build plates, reducing the need for assembly from smaller segments.",
          "Complex Geometry Support: Utilizing advanced support structures and soluble filaments to realize intricate designs that are impossible with traditional subtractive manufacturing.",
          "Functional Part Production: Developing high-fidelity end-use parts for industrial machinery, jigs, fixtures, and specialized low-volume custom products.",
        ]}
        rightTitle="Why Our FDM Printing?"
        rightParagraphs={[
          "Prototyping speed is the cornerstone of innovation. Our FDM 3D printing services allow you to move from CAD design to a functional, physical part in 24 hours without the cost and time of traditional tooling.",
          "Whether you need a single proof-of-concept model or a small batch of ruggedized industrial parts, our engineering team ensures dimensional accuracy and structural integrity through every layer.",
        ]}
        features={[
          "Carbon Fiber Reinforced Filament",
          "High-Precision Dimensional QC",
          "Rapid 24-Hour Lead Times",
        ]}
        ctaLabel="Get Your 3D Quote"
        onCtaClick={() => {
          console.log("FDM CTA clicked");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "STL Optimization",
            description:
              "We analyze your 3D models for printability, orienting parts for optimal strength and surface finish while minimizing material waste.",
          },
          {
            number: "02",
            title: "Precision Slicing",
            description:
              "Using advanced slicing algorithms, we define precise layer heights, infill patterns, and temperature profiles for each specific material profile.",
          },
          {
            number: "03",
            title: "High-Fidelity Printing",
            description:
              "Our industrial printers execute the build with meticulous temperature control and layer-by-layer verification to ensure structural consistency.",
          },
          {
            number: "04",
            title: "Post-Processing",
            description:
              "From support removal to heat treatment and surface finishing, we ensure every part meets the required visual and functional specifications.",
          },
        ]}
      />
      <ClientMarquee clients={clients} />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1621333100200-84381387d853?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our printing mandate"
        eyebrowHighlight="mandate"
        title="Additive Strength by Design"
        paragraphs={[
          "3D printing is no longer just for visual models. In the industrial sector, it is a primary tool for functional validation. Our philosophy is to push the boundaries of material science to deliver parts that perform in the real world.",
          "By strictly adhering to high-precision manufacturing protocols and utilizing only verified industrial filaments, we guarantee that the parts we print will endure the stresses of your specific operational environment.",
        ]}
        items={[
          {
            icon: <Layers size={32} strokeWidth={1.2} />,
            label: "Layer Quality",
            description: "Exceptional inter-layer adhesion",
            progress: 98,
          },
          {
            icon: <Zap size={32} strokeWidth={1.2} />,
            label: "Response Speed",
            description: "CAD-to-hand in record time",
            progress: 95,
          },
          {
            icon: <Box size={32} strokeWidth={1.2} />,
            label: "Material Strength",
            description: "Industrial-grade thermoplastic focus",
            progress: 94,
          },
        ]}
      />

      <Testimonials
        eyebrow="Client Success"
        eyebrowHighlight="Success"
        heading="Iterating Faster with Industrial 3D Printing"
        watermarkText="Impact"
        bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
        testimonials={[
          {
            title: "Incredible Turnaround",
            rating: 5,
            review:
              "The carbon fiber parts ANK printed for our robot end-effectors are remarkably stiff and lightweight. We received them within 48 hours, keeping our project ahead of schedule.",
            name: "Mark Sanderson",
            company: "Lead Engineer, AeroSystems",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          },
          {
            title: "Functional Accuracy",
            rating: 5,
            review:
              "Their grasp of tolerances and material shrink rates is impressive. The functional housing they printed for our high-temp sensor fit the assembly perfectly on the first pass.",
            name: "Lydia Grant",
            company: "Founder, Energetic Industries",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Print your future"
        eyebrowHighlight="Print"
        heading="Ready to accelerate your product development with high-performance industrial 3D printing?"
        primaryLabel="Start Your 3D Build"
        secondaryLabel="View Capability Guide"
        onPrimaryClick={() => {
          console.log("FDM Start clicked");
        }}
        onSecondaryClick={() => {
          console.log("Guide clicked");
        }}
      />
    </PageLayout>
  );
};

export default Fdm3DPrinting;
