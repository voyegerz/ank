import { Cpu, Microchip, ShieldCheck } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const PCBassembly = () => {
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
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
        caption="Precision Electronics Manufacturing"
        title="PCB Assembly"
        subtitle="High-reliability SMT and through-hole PCB assembly services for industrial control, medical devices, and aerospace systems."
        watermarkNumber="10"
      />
      <ServiceDetail
        image="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=2000"
        caption="Uncompromising Reliability"
        leftTitle="Core PCB Capabilities"
        leftParagraphs={[
          "Advanced SMT & Through-Hole: Implementing high-speed Surface Mount Technology and precise manual through-hole assembly for complex, high-density PCBs.",
          "Rigid, Flex, & Rigid-Flex: Assembly expertise spanning various board materials and multi-layer stackups, including high-speed and HDI designs.",
          "AOI & X-Ray Inspection: Every board is subjected to Automated Optical Inspection (AOI) and X-ray analysis to verify joint integrity and component placement accuracy.",
          "Turnkey Component Sourcing: We manage the full supply chain, sourcing verified, long-lifecycle components directly from authorized distributors to mitigate risk.",
        ]}
        rightTitle="Why Trust Our PCB Assembly?"
        rightParagraphs={[
          "Electronics are the brain of your industrial assets. We treat every board with absolute precision, utilizing an antistatic environment and climate-controlled storage for moisture-sensitive components.",
          "By strictly adhering to IPC-A-610 Class 2 and Class 3 standards, we guarantee that your PCBs will function reliably for years, dramatically reducing your field replacement rates and long-term costs.",
        ]}
        features={[
          "IPC Class 3 Solder Quality",
          "Automated Optical Inspection",
          "Clean-Room Quality Assembly",
        ]}
        ctaLabel="Consult PCB Expert"
        onCtaClick={() => {
          console.log("PCB CTA clicked");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Sourcing & Stencil",
            description:
              "We procure high-quality components and laser-cut ultra-precise stainless steel stencils for accurate solder paste deposition.",
          },
          {
            number: "02",
            title: "SMT & Pick-and-Place",
            description:
              "Our high-speed automated assembly lines place components with micrometer-level precision, followed by optimized reflow profiling.",
          },
          {
            number: "03",
            title: "In-Line Inspection",
            description:
              "Every PCB undergoes automated visual and optical verification before and after reflow to identify any defects in placement or soldering.",
          },
          {
            number: "04",
            title: "Functional Testing",
            description:
              "We perform full-board bring-up and functional testing using custom test fixtures to ensure your board is ready for the field.",
          },
        ]}
      />
      <ClientMarquee clients={clients} />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our assembly philosophy"
        eyebrowHighlight="assembly"
        title="Predictable Electronics Excellence"
        paragraphs={[
          "Precision is not an option; it is a requirement. In the electronics sector, a single loose joint can lead to catastrophic system failure. Our philosophy centers on absolute quality control and traceability for every component.",
          "Whether you are developing next-generation medical devices or ruggedized industrial IoT gateways, our high-end PCB assembly processes provide the reliability that your strategic mission demands.",
        ]}
        items={[
          {
            icon: <Microchip size={32} strokeWidth={1.2} />,
            label: "Joint Integrity",
            description: "IPC Class 3 solder quality focus",
            progress: 99,
          },
          {
            icon: <ShieldCheck size={32} strokeWidth={1.2} />,
            label: "Zero-Defect Goal",
            description: "Rigorous AOI and X-ray inspection",
            progress: 98,
          },
          {
            icon: <Cpu size={32} strokeWidth={1.2} />,
            label: "Static Safety",
            description: "ESD-safe manufacturing environment",
            progress: 94,
          },
        ]}
      />

      <Testimonials
        eyebrow="Client Reviews"
        eyebrowHighlight="Reviews"
        heading="Electronics Under Extreme Pressure"
        watermarkText="Impact"
        bgImage="https://images.unsplash.com/photo-1544256718-3b2234b751ee?auto=format&fit=crop&q=80&w=2000"
        testimonials={[
          {
            title: "Unmatched Build Quality",
            rating: 5,
            review:
              "ANK Design managed our 30-layer board assembly with incredible poise. Every board passed our internal QC on the first pass, a feat no other vendor has achieved for us.",
            name: "Dr. Ethan Brooks",
            company: "Principal Engineer, BioMed Robotics",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          },
          {
            title: "Sourcing Done Right",
            rating: 5,
            review:
              "Their grasp of component lifecycles saved our project from a massive supply chain bottleneck. They found verified alternatives for obsolete parts without missing our launch date.",
            name: "Rebecca Vance",
            company: "Ops Director, Telelink Global",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Bring your PCB to life"
        eyebrowHighlight="PCB"
        heading="Ready to build your mission-critical electronics with high-precision manufacturing and absolute reliability?"
        primaryLabel="Schedule Assembly"
        secondaryLabel="View Quality Standards"
        onPrimaryClick={() => {
          console.log("PCB Start clicked");
        }}
        onSecondaryClick={() => {
          console.log("Standards clicked");
        }}
      />
    </PageLayout>
  );
};

export default PCBassembly;
