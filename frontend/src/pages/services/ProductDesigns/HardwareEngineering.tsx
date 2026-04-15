import { Cpu, Microchip, Zap } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import CTASection from "@/components/service/CTA";

const HardwareEngineering = () => {
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
        bgImage="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=2000"
        caption="Advanced Electronic & PCB Design"
        title="Hardware Engineering"
        subtitle="From microscopic sensor interfaces to high-power control systems, we engineer resilient hardware solutions built for the world's most demanding environments."
        watermarkNumber="02"
      />
      <ServiceDetail
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
        caption="Uncompromising Precision"
        leftTitle="Core Capabilities"
        leftParagraphs={[
          "PCB Architecture & Layout: Executing high-density interconnect (HDI), multi-layer, and high-speed PCB designs with rigorous attention to signal integrity and thermal dissipation.",
          "Embedded Systems & Custom Microcontrollers: Designing bespoke compute modules tailored for extreme form-factor constraints and low-power operations, bridging the gap between logic and physical action.",
          "Power Electronics & Motor Control: Developing efficient power supplies, inverters, and drive systems capable of managing substantial voltages with absolute precision and safety.",
          "DFM & Production Readiness: Optimizing every component selection and trace routing to ensure seamless transition from prototyping to high-yield mass production without supply chain bottlenecks.",
        ]}
        rightTitle="Why Trust Our Hardware?"
        rightParagraphs={[
          "Hardware iteration is inherently costly and time-sensitive. We mitigate risk through an uncompromising design methodology, utilizing advanced simulation prior to manufacturing to ensure \"first-pass success.\"",
          "Whether you are developing next-generation medical devices, aerospace avionics, or ruggedized industrial IoT gateways, our engineers deliver highly optimized, compliant, and durable electronics.",
        ]}
        features={[
          "EMI/EMC Compliance Engineering",
          "Advanced Thermal Analysis",
          "Lifecycle Component Sourcing",
        ]}
        ctaLabel="Start Your Hardware Project"
        onCtaClick={() => {
          console.log("Hardware CTA clicked");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Systems Architecture",
            description:
              "We define the overarching hardware strategy, determining optimal component selections, power budgets, and interfacing standards to meet strict operational profiles.",
          },
          {
            number: "02",
            title: "Schematic & Layout",
            description:
              "Our dedicated PCB layout engineers translate the architecture into precise schematic diagrams and highly optimized physical board layouts, navigating complex routing constraints.",
          },
          {
            number: "03",
            title: "Prototyping & Bring-up",
            description:
              "We supervise rapid prototype fabrication and conduct systematic board bring-up, verifying every electrical subsystem against the initial design specifications.",
          },
          {
            number: "04",
            title: "Validation & Certification",
            description:
              "Comprehensive testing in environmental chambers and anechoic rooms ensures your hardware passes rigorous CE, FCC, and industry-specific compliance certifications.",
          },
        ]}
      />
      <ClientMarquee clients={clients} />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1621333100200-84381387d853?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our hardware mandate"
        eyebrowHighlight="mandate"
        title="Engineered for harsh realities"
        paragraphs={[
          "Industrial hardware does not have the luxury of failing gracefully. It must endure extreme temperatures, intense vibration, and severe electromagnetic interference. Our engineering process is built around survival in these conditions.",
          "By adhering to IPC Class 2 and Class 3 manufacturing standards, we guarantee that the hardware we design will function reliably for years, dramatically reducing your total cost of ownership and field replacement rates.",
        ]}
        items={[
          {
            icon: <Zap size={32} strokeWidth={1.2} />,
            label: "Signal Integrity",
            description: "Flawless high-speed data transmission",
            progress: 94,
          },
          {
            icon: <Microchip size={32} strokeWidth={1.2} />,
            label: "Component Reliability",
            description: "Sourcing verified, long-lifecycle parts",
            progress: 99,
          },
          {
            icon: <Cpu size={32} strokeWidth={1.2} />,
            label: "Thermal Efficiency",
            description: "Advanced heat dissipation modeling",
            progress: 89,
          },
        ]}
      />

      <CTASection
        eyebrow="Bring your electronics to life"
        eyebrowHighlight="electronics"
        heading="Looking for an engineering team capable of solving complex hardware challenges with uncompromising precision?"
        primaryLabel="Connect with an Engineer"
        secondaryLabel="Explore Capabilities"
        onPrimaryClick={() => {
          console.log("Connect clicked");
        }}
        onSecondaryClick={() => {
          console.log("Capabilities clicked");
        }}
      />
    </PageLayout>
  );
};

export default HardwareEngineering;
