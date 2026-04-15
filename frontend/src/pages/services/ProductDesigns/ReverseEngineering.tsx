import { Scan, Microscope, RotateCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const ReverseEngineering = () => {
  const navigate = useNavigate();

  const reImages = [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
        caption="Digital Reconstruction"
        title="Reverse Engineering"
        subtitle="Transform physical objects into accurate digital CAD data. Whether you need to replicate legacy parts, analyze competitor products, or create digital twins of hand-modified prototypes, we provide precise reconstruction services."
        watermarkNumber="06"
      />
      <ServiceDetail
        images={reImages}
        caption="From Physical to Digital"
        leftTitle="Reconstructing Excellence"
        leftParagraphs={[
          "Our reverse engineering process begins with high-precision scanning and measurement of the physical component, capturing every critical dimension and intricate detail.",
          "We convert raw scan data (point clouds/STL) into clean, parametric 3D CAD models that are fully editable and ready for manufacturing or further engineering modifications.",
        ]}
        rightTitle="Legacy Part Recovery"
        rightParagraphs={[
          "Don't let missing drawings stop your production. We specialize in creating digital documentation for legacy parts where the original designs have been lost or never existed.",
          "We analyze material properties and wear patterns to not just replicate the part, but potentially improve its design for modern manufacturing processes.",
        ]}
        features={[
          "Parametric 3D CAD Reconstruction",
          "Legacy Part Documentation",
          "Dimensional Inspection Reports",
          "Digital Twin Generation",
        ]}
        ctaLabel="Start Reconstruction"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Data Acquisition",
            description:
              "Utilizing precision measuring tools and high-resolution 3D scanning to capture the physical geometry of the component.",
          },
          {
            number: "02",
            title: "Data Processing",
            description:
              "Cleaning and aligning raw scan data, identifying critical functional surfaces and alignment datums.",
          },
          {
            number: "03",
            title: "Surface Modeling",
            description:
              "Reconstructing parametric surfaces and solids over the scan data to create a high-fidelity CAD model.",
          },
          {
            number: "04",
            title: "Validation & Export",
            description:
              "Verifying the digital model against the original scan for accuracy and exporting in industry-standard formats like STEP or Parasolid.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our reconstructive ethos"
        eyebrowHighlight="ethos"
        title="Restoring the Lost"
        paragraphs={[
          "Reverse engineering is more than just copying; it's about understanding the original designer's intent. We look beyond the surface to identify functional constraints and performance requirements.",
          "By blending high-tech scanning with traditional engineering knowledge, we bridge the gap between old-world physical components and modern digital manufacturing workflows.",
        ]}
        items={[
          {
            icon: <Scan size={32} strokeWidth={1.2} />,
            label: "High Resolution",
            description: "Capturing the finest details",
            progress: 99,
          },
          {
            icon: <Microscope size={32} strokeWidth={1.2} />,
            label: "Deep Analysis",
            description: "Understanding design intent",
            progress: 95,
          },
          {
            icon: <RotateCw size={32} strokeWidth={1.2} />,
            label: "Parametric Output",
            description: "Fully editable digital models",
            progress: 100,
          },
        ]}
      />

      <Testimonials
        eyebrow="Precision Replicas"
        eyebrowHighlight="Replicas"
        heading="Client Feedback"
        watermarkText="Legacy"
        bgImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
        testimonials={[
          {
            title: "Legacy Recovery",
            rating: 5,
            review:
              "We had a 20-year-old machine part with no drawings. ANK reverse-engineered it perfectly, and the new part fits and performs better than the original.",
            name: "Anil Deshmukh",
            company: "Plant Manager, Heritage Textile Mills",
            avatar:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Bring the past to life"
        eyebrowHighlight="life"
        heading="Need to digitize a physical part or reconstruct a legacy design?"
        primaryLabel="Consult our RE Team"
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

export default ReverseEngineering;
