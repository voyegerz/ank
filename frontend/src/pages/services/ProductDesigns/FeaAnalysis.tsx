import { ShieldAlert, BarChart3, Binary } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import CTASection from "@/components/service/CTA";

const FeaAnalysis = () => {
  const navigate = useNavigate();

  const feaImages = [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
        caption="Virtual Testing & Simulation"
        title="FEA Analysis Services"
        subtitle="Validate your designs through advanced Finite Element Analysis (FEA) and Finite Element Method (FEM). We simulate real-world physical stresses, thermal loads, and fluid dynamics to ensure safety and optimize performance before physical prototyping."
        watermarkNumber="05"
      />
      <ServiceDetail
        images={feaImages}
        caption="Predictive Engineering"
        leftTitle="Simulating Reality"
        leftParagraphs={[
          "We utilize state-of-the-art simulation software like Finite Element Analysis (FEA) and Finite Element Method (FEM) to predict how your products will react to real-world forces, vibration, heat, and fluid flow. We identify potential failure points early in the design cycle, saving significant time and costs.",
        ]}
        features={[
          "Static & Dynamic Analysis",
          "Thermal & Fluid Simulation",
          "Fatigue & Durability Testing",
          "Material Optimization Reports",
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
            title: "Data Preparation",
            description:
              "Preparing CAD geometry for analysis by simplifying non-critical features and defining precise material properties.",
          },
          {
            number: "02",
            title: "Meshing & Setup",
            description:
              "Generating high-quality mesh networks and defining boundary conditions, loads, and environmental constraints.",
          },
          {
            number: "03",
            title: "Solver Execution",
            description:
              "Running advanced mathematical solvers to calculate stress distributions, displacements, and safety factors.",
          },
          {
            number: "04",
            title: "Reporting & Iteration",
            description:
              "Delivering comprehensive technical reports with visual plots and providing design recommendations for improvement.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our analytical ethos"
        eyebrowHighlight="ethos"
        title="Validated by Science"
        paragraphs={[
          "Simulation is not just about pretty pictures; it's about the rigorous mathematical validation of engineering intent. We combine theoretical knowledge with practical experience to deliver results you can trust and optimize designs for their intended environment.",
        ]}
        imageSize="xs"
        iconSize={80}
        items={[
          {
            icon: <ShieldAlert size={20} strokeWidth={1.2} />,
            label: "Risk Mitigation",
            description: "Identify failures before they happen",
            progress: 100,
          },
          {
            icon: <BarChart3 size={20} strokeWidth={1.2} />,
            label: "Performance Optimization",
            description: "Maximum strength with minimum weight",
            progress: 96,
          },
          {
            icon: <Binary size={20} strokeWidth={1.2} />,
            label: "Numerical Precision",
            description: "Validated against physical test benchmarks",
            progress: 98,
          },
        ]}
      />

      <CTASection
        eyebrow="Simulate the future"
        eyebrowHighlight="future"
        heading="Ensure your designs are safe and optimized with our advanced simulation services."
        primaryLabel="Talk to our FEA Experts"
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

export default FeaAnalysis;
