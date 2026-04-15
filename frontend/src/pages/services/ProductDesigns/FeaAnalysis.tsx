import { ShieldAlert, BarChart3, Binary } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const FeaAnalysis = () => {
  const navigate = useNavigate();

  const feaImages = [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
        caption="Virtual Testing & Simulation"
        title="FEA Analysis Services"
        subtitle="Validate your designs through advanced Finite Element Analysis. We simulate real-world physical stresses, thermal loads, and fluid dynamics to ensure safety and optimize performance before physical prototyping."
        watermarkNumber="05"
      />
      <ServiceDetail
        images={feaImages}
        caption="Predictive Engineering"
        leftTitle="Simulating Reality"
        leftParagraphs={[
          "We utilize state-of-the-art simulation software to predict how your products will react to real-world forces, vibration, heat, fluid flow, and other physical effects.",
          "Finite Element Analysis (FEA) allows us to identify potential failure points early in the design cycle, saving significant time and costs associated with physical testing.",
        ]}
        rightTitle="Optimization & Safety"
        rightParagraphs={[
          "Beyond simple validation, we use simulation data to optimize material usage and geometry, ensuring the highest performance-to-weight ratios.",
          "Our reports provide clear, actionable insights into safety factors, fatigue life, and structural integrity, ensuring your products meet or exceed regulatory requirements.",
        ]}
        features={[
          "Static & Dynamic Analysis",
          "Thermal & Fluid Simulation",
          "Fatigue & Durability Testing",
          "Material Optimization Reports",
        ]}
        ctaLabel="Consult our Analysts"
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
          "Simulation is not just about pretty pictures; it's about the rigorous mathematical validation of engineering intent. We combine theoretical knowledge with practical experience to deliver results you can trust.",
          "By integrating FEA early in our Product Design workflow, we ensure that every solution we deliver is fundamentally sound and optimized for its intended environment.",
        ]}
        items={[
          {
            icon: <ShieldAlert size={32} strokeWidth={1.2} />,
            label: "Risk Mitigation",
            description: "Identify failures before they happen",
            progress: 100,
          },
          {
            icon: <BarChart3 size={32} strokeWidth={1.2} />,
            label: "Performance Optimization",
            description: "Maximum strength with minimum weight",
            progress: 96,
          },
          {
            icon: <Binary size={32} strokeWidth={1.2} />,
            label: "Numerical Precision",
            description: "Validated against physical test benchmarks",
            progress: 98,
          },
        ]}
      />

      <Testimonials
        eyebrow="Proven Results"
        eyebrowHighlight="Results"
        heading="Client Trust"
        watermarkText="Verified"
        bgImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000&auto=format&fit=crop"
        testimonials={[
          {
            title: "Structural Validation",
            rating: 5,
            review:
              "ANK's FEA reports were instrumental in getting our heavy machinery certified. Their simulation matched our physical drop test results with remarkable accuracy.",
            name: "Vikram Mehta",
            company: "Engineering Head, Mahavir Heavy Industries",
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Simulate the future"
        eyebrowHighlight="future"
        heading="Ensure your designs are safe and optimized with our advanced simulation services."
        primaryLabel="Request a Simulation"
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
