import { Layout, Palette, MousePointer2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import CTASection from "@/components/service/CTA";

const ApplicationDesign = () => {
  const navigate = useNavigate();

  const appImages = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000"
        caption="User-Centric Software Design"
        title="Application Design & UI/UX"
        subtitle="Creating intuitive, professional, and high-performance user interfaces for industrial and corporate applications. We bridge the gap between complex functionality and seamless user experience."
        watermarkNumber="12"
      />
      <ServiceDetail
        images={appImages}
        caption="Intuitive by Design"
        leftTitle="Functional User Experiences"
        leftParagraphs={[
          "Great software is only useful if people can actually use it. We specialize in designing application interfaces that simplify complex workflows and empower users to be more productive. Our focus is on creating clear, consistent, and responsive designs that work beautifully across all screen sizes.",
          "Our design process begins with a deep understanding of your users' needs and pain points. We believe that a professional application should be as aesthetically pleasing as it is functional, reflecting your brand's commitment to quality and innovation.",
        ]}
        features={[
          "Industrial Dashboard Design",
          "Interactive UI Prototyping",
          "User Workflow Optimization",
          "Responsive Design Systems",
        ]}
        ctaLabel="Design your App"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "User Research",
            description:
              "Interviewing stakeholders and users to define core goals, personas, and critical workflow requirements.",
          },
            {
            number: "02",
            title: "Wireframing",
            description:
              "Creating low-fidelity structural blueprints to define the information architecture and navigation flow.",
          },
          {
            number: "03",
            title: "Visual Design",
            description:
              "Applying brand identity, typography, and color systems to create high-fidelity, interactive prototypes.",
          },
          {
            number: "04",
            title: "Design Handover",
            description:
              "Providing developers with comprehensive design specs, assets, and documentation for seamless implementation.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our design ethos"
        eyebrowHighlight="ethos"
        title="Simplicity in Complexity"
        paragraphs={[
          "Complexity is a reality in engineering and industrial applications, but it shouldn't be a hurdle for the user. We approach design as an engineering discipline—measurable, structured, and focused on clarity.",
        ]}
        imageSize="xs"
        iconSize={80}
        items={[
          {
            icon: <Layout size={20} strokeWidth={1.2} />,
            label: "Structured Layouts",
            description: "Logical information hierarchy",
            progress: 98,
          },
          {
            icon: <Palette size={20} strokeWidth={1.2} />,
            label: "Clean Aesthetics",
            description: "Modern and professional look",
            progress: 95,
          },
          {
            icon: <MousePointer2 size={20} strokeWidth={1.2} />,
            label: "Seamless UX",
            description: "Frictionless user journeys",
            progress: 100,
          },
        ]}
      />

      <CTASection
        eyebrow="Empower your users"
        eyebrowHighlight="users"
        heading="Ready to transform your complex software into an intuitive user experience?"
        primaryLabel="Talk to our Designers"
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

export default ApplicationDesign;
