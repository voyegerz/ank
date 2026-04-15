import { Layers, Box, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import CTASection from "@/components/service/CTA";

const Fdm3DPrinting = () => {
  const navigate = useNavigate();

  const printingImages = [
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2000"
        caption="Industrial Additive Manufacturing"
        title="3D Printing (FDM)"
        subtitle="Professional FDM 3D printing services for high-strength functional parts, tooling, and complex prototypes. We work with a wide range of industrial-grade filaments to deliver accurate and durable components for your engineering needs."
        watermarkNumber="18"
      />
      <ServiceDetail
        images={printingImages}
        caption="Precision in every Layer"
        leftTitle="Industrial Grade Output"
        leftParagraphs={[
          "We utilize high-end FDM (Fused Deposition Modeling) systems to produce parts with excellent mechanical properties. Our process is optimized for dimensional accuracy and surface quality, making our 3D printed parts suitable for both testing and end-use applications.",
          "Whether you need a single prototype or a low-volume production run, we provide fast and cost-effective additive manufacturing solutions that reduce your development time and material waste.",
        ]}
        rightTitle="Material Versatility"
        rightParagraphs={[
          "Our expertise covers a variety of industrial materials including PLA, ABS, PETG, and high-performance composites like Carbon Fiber reinforced nylon. We help you choose the right material based on your part's strength, temperature, and chemical resistance requirements.",
          "We offer advanced post-processing options including support removal, vapor smoothing, and mechanical finishing to ensure your 3D printed parts meet your aesthetic and functional specifications.",
        ]}
        features={[
          "High-Resolution FDM Printing",
          "Wide Industrial Material Library",
          "Large Format Printing Capability",
          "Advanced Post-Processing",
        ]}
        ctaLabel="Print your Design"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "STL Optimization",
            description:
              "Reviewing your 3D models and optimizing orientation and internal fill patterns for maximum strength and print quality.",
          },
          {
            number: "02",
            title: "Slicing & Setup",
            description:
              "Generating precision toolpaths and defining critical parameters like layer height, nozzle temperature, and cooling profiles.",
          },
          {
            number: "03",
            title: "High-Precision Print",
            description:
              "Executing the print on our industrial FDM systems, monitored for consistent extrusion and dimensional stability.",
          },
          {
            number: "04",
            title: "Finishing & QC",
            description:
              "Performing necessary post-processing and conducting a final quality check against your original CAD dimensions.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our additive ethos"
        eyebrowHighlight="ethos"
        title="Building the Future Layer by Layer"
        paragraphs={[
          "3D printing is not just a prototyping tool; it's a fundamental shift in how we think about manufacturing complexity. We believe that additive manufacturing allows for geometric freedoms that traditional subtractive methods cannot match.",
          "We approach FDM printing with an engineering rigor, focusing on the internal structure and molecular bonding of layers to ensure that every part we produce is ready for the rigors of the industrial environment.",
        ]}
        items={[
          {
            icon: <Layers size={32} strokeWidth={1.2} />,
            label: "Layer Precision",
            description: "Ultra-fine detail settings",
            progress: 98,
          },
          {
            icon: <Box size={32} strokeWidth={1.2} />,
            label: "Material Strength",
            description: "Industrial-grade polymers",
            progress: 95,
          },
          {
            icon: <Cpu size={32} strokeWidth={1.2} />,
            label: "Smart Slicing",
            description: "Optimized internal structures",
            progress: 100,
          },
        ]}
      />

      <CTASection
        eyebrow="Unlock geometric freedom"
        eyebrowHighlight="freedom"
        heading="Need high-quality 3D printed parts for your next project?"
        primaryLabel="Start 3D Print"
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

export default Fdm3DPrinting;
