import { Cpu, Box, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import CommonHero from "../../components/CommonHero";
import ServiceDetail from "../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import CTASection from "@/components/service/CTA";

const DiyRoboticsKit = () => {
  const navigate = useNavigate();

  const kitImages = [
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1561144443-f546830b6d9b?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1531746790731-6c087fdec69a?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000"
        caption="Hands-on Robotics Education"
        title="DIY Robotics Kits"
        subtitle="Specially designed robotics and electronics kits to help students learn by building real-world applications. Our kits provide a comprehensive introduction to mechanics, electronics, and programming."
        watermarkNumber="23"
      />
      <ServiceDetail
        images={kitImages}
        caption="Build. Code. Innovate."
        leftTitle="Integrated Learning Systems"
        leftParagraphs={[
          "Our DIY Robotics Kits are more than just toys; they are comprehensive educational platforms designed to bridge the gap between classroom theory and practical engineering. Each kit is meticulously engineered to provide a graduated learning experience, from basic assembly to advanced sensor integration and autonomous control.",
          "We provide everything needed to get started: precision-engineered mechanical parts, high-quality electronic components, and easy-to-follow documentation. Our kits support popular platforms like Arduino, ESP32, and Raspberry Pi, making them compatible with modern industry standards.",
        ]}
        features={[
          "Modular Mechanical Designs",
          "Plug-and-Play Electronic Modules",
          "Comprehensive Coding Guides",
          "Scalable Learning Projects",
        ]}
        ctaLabel="Browse Catalog"
        onCtaClick={() => {
          navigate("/products/diy-robotics-catalog");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Assembly & Mechanics",
            description:
              "Building the physical structure of the robot, learning about structural integrity, gearing, and motor control.",
          },
          {
            number: "02",
            title: "Electronics Wiring",
            description:
              "Connecting sensors, microcontrollers, and actuators to create the robot's nervous system and power distribution.",
          },
          {
            number: "03",
            title: "Programming Logic",
            description:
              "Writing code to bring the robot to life, from simple movements to complex obstacle avoidance and path following.",
          },
          {
            number: "04",
            title: "Advanced Innovation",
            description:
              "Adding custom modules, integrating IoT capabilities, or optimizing algorithms for competitive robotics performance.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1531746790731-6c087fdec69a?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our robotic ethos"
        eyebrowHighlight="ethos"
        title="Democratizing Robotics"
        paragraphs={[
          "We believe that every student should have the opportunity to build their own robot. Our philosophy is to make complex engineering accessible, affordable, and most importantly, fun.",
        ]}
        imageSize="xs"
        iconSize={80}
        items={[
          {
            icon: <Box size={20} strokeWidth={1.2} />,
            label: "Modular Design",
            description: "Easy to assemble and modify",
            progress: 100,
          },
          {
            icon: <Cpu size={20} strokeWidth={1.2} />,
            label: "Industry Standard",
            description: "Learn with real controllers",
            progress: 98,
          },
          {
            icon: <Rocket size={20} strokeWidth={1.2} />,
            label: "Future Ready",
            description: "Skills for the next generation",
            progress: 100,
          },
        ]}
      />

      <CTASection
        eyebrow="Start your robotic adventure"
        eyebrowHighlight="adventure"
        heading="Ready to build your first robot and master the fundamentals of modern engineering?"
        primaryLabel="Browse Catalog"
        secondaryLabel="Contact Us"
        onPrimaryClick={() => {
          navigate("/products/diy-robotics-catalog");
        }}
        onSecondaryClick={() => {
          navigate("/contact");
        }}
      />
    </PageLayout>
  );
};

export default DiyRoboticsKit;
