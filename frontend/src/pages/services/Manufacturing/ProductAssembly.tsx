import { Box, Layers, Settings } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
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
        image="https://images.unsplash.com/photo-1518709216056-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
        caption="Integrated Excellence"
        leftTitle="Core Assembly Capabilities"
        leftParagraphs={[
          "Box-Build Integration: Managing full assembly including PCBA installation, wiring harnesses, power supplies, and mechanical enclosure integration in a unified workflow.",
          "Custom Enclosure Finalization: Skillful assembly of complex industrial housings from machined, cast, or 3D printed components with absolute attention to fit and finish.",
          "Inventory & Supply Chain: Full management of your Bill of Materials (BOM), coordinating multiple vendors for a single point of final production and quality accountability.",
          "Environmental & functional testing: Every finished product undergoes rigorous sub-system and full-system verification before packaging and final distribution.",
        ]}
        rightTitle="Why Your Product Needs Us?"
        rightParagraphs={[
          "The most successful products are those where every screw, cable, and component is precisely where it should be. We treat final assembly not as a routine task, but as the final, most critical step in engineering excellence.",
          "By consolidating your assembly, testing, and packaging under one roof, we eliminate cross-vendor friction and provide a high-fidelity finished product that reflects the quality of your brand.",
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
          "The mark of a true engineering partner is what happens at the end of the line. Our philosophy centers on absolute consistency—ensuring that the thousandth unit off the assembly line is as perfect as the first.",
          "We believe that a high-end product deserves a high-end finish. From internal cable management to the label on the outer box, our process is built around pride in craftsmanship and industrial precision.",
        ]}
        items={[
          {
            icon: <Settings size={32} strokeWidth={1.2} />,
            label: "Precision Fit",
            description: "Meticulous assembly of all enclosures",
            progress: 96,
          },
          {
            icon: <Layers size={32} strokeWidth={1.2} />,
            label: "System Integrity",
            description: "Full cross-subsystem verification",
            progress: 99,
          },
          {
            icon: <Box size={32} strokeWidth={1.2} />,
            label: "Packaging Excellence",
            description: "Custom protection and branding",
            progress: 92,
          },
        ]}
      />

      <Testimonials
        eyebrow="Feedback Highlights"
        eyebrowHighlight="Highlights"
        heading="Transforming Components into Results"
        watermarkText="Quality"
        bgImage="https://images.unsplash.com/photo-1541888941259-7128a6f3e791?auto=format&fit=crop&q=80&w=2000"
        testimonials={[
          {
            title: "Uncompromising Finish",
            rating: 5,
            review:
              "Their box-build assembly for our medical imaging devices is flawless. The cable management is incredible and the final fit exceeds our original expectations.",
            name: "Dr. Julianne Gray",
            company: "Founder, Quantis Medical",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          },
          {
            title: "Scaling Effortlessly",
            rating: 5,
            review:
              "Transitioning our assembly from in-house to ANK allowed us to double our production volume without any drop in quality. Their QC process is more rigorous than our own.",
            name: "Victor Thorne",
            company: "COO, HydroTech Solutions",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
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
