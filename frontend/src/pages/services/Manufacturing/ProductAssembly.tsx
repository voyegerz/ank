import { Box, Layers, Settings } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import CTASection from "@/components/service/CTA";

const ProductAssembly = () => {
  const clients = [
    { name: "TechCorp", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Innovate AI", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "CloudSync", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "DataFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
    { name: "LogicGate", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "NetSys", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Samsung_wordmark.svg" },
  ];

  const assemblyImages = [
    "https://images.unsplash.com/photo-1518709216056-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
        caption="Comprehensive System Integration"
        title="Product Assembly"
        subtitle="End-to-end assembly solutions transforming individual hardware, electronics, and mechanical components into finished, market-ready industrial goods."
        watermarkNumber="11"
      />
      <ServiceDetail
        images={assemblyImages}
        caption="Integrated Excellence"
        leftTitle="Core Assembly Capabilities"
        leftParagraphs={[
          "We manage full box-build integration, including PCBA installation, wiring harnesses, power supplies, and mechanical enclosure assembly in a unified workflow. Our technicians skillfully finalize complex industrial housings from machined or 3D printed components with absolute attention to fit and finish.",
          "By consolidating assembly, testing, and packaging, we eliminate cross-vendor friction and provide a high-fidelity finished product. Every unit undergoes rigorous sub-system and full-system verification to ensure your market-ready goods meet the highest standards of quality.",
        ]}
        features={[
          "Full Quality Traceability",
          "Custom Packaging Design",
          "Serialized System Validation",
        ]}
        ctaLabel="Integrate Your Product"
        onCtaClick={() => {
          console.log("Product CTA clicked");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Cell Setup",
            description:
              "We design custom assembly cells with specialized jigs and fixtures to ensure repetitive accuracy and optimized through-put for your specific batch size.",
          },
          {
            number: "02",
            title: "System Integration",
            description:
              "Our technicians carefully integrate electronic and mechanical subsystems, following strict torque and routing specifications to ensure longevity.",
          },
          {
            number: "03",
            title: "Final Verification",
            description:
              "Every unit is subjected to a final functional checklist, checking all interface points and external connectors for flawless performance.",
          },
          {
            number: "04",
            title: "Packaging & Logis",
            description:
              "Final products are kitted with documentation, labeled for traceability, and packaged in custom-designed protection for secure global shipment.",
          },
        ]}
      />
      <ClientMarquee clients={clients} />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our assembly philosophy"
        eyebrowHighlight="assembly"
        title="Predictable Final Quality"
        paragraphs={[
          "The mark of a true engineering partner is absolute consistency. Our philosophy centers on ensuring that the thousandth unit off the assembly line is as perfect as the first, with pride in craftsmanship and industrial precision.",
        ]}
        imageSize="xs"
        iconSize={80}
        items={[
          {
            icon: <Settings size={20} strokeWidth={1.2} />,
            label: "Precision Fit",
            description: "Meticulous assembly of all enclosures",
            progress: 96,
          },
          {
            icon: <Layers size={20} strokeWidth={1.2} />,
            label: "System Integrity",
            description: "Full cross-subsystem verification",
            progress: 99,
          },
          {
            icon: <Box size={20} strokeWidth={1.2} />,
            label: "Packaging Excellence",
            description: "Custom protection and branding",
            progress: 92,
          },
        ]}
      />

      <CTASection
        eyebrow="Consolidate your build"
        eyebrowHighlight="build"
        heading="Ready to scale your production with a manufacturing partner that prioritizes absolute build quality and system integrity?"
        primaryLabel="Schedule Assembly Consult"
        secondaryLabel="View Capability List"
        onPrimaryClick={() => {
          console.log("Product Start clicked");
        }}
        onSecondaryClick={() => {
          console.log("Capabilities clicked");
        }}
      />
    </PageLayout>
  );
};

export default ProductAssembly;
