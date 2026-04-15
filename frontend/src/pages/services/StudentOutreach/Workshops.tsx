import { Users, BookOpen, PenTool } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import CTASection from "@/components/service/CTA";

const Workshops = () => {
  const navigate = useNavigate();

  const workshopImages = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1523240715630-9918c13bc1ad?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
        caption="Hands-on Technical Training"
        title="Engineering Workshops"
        subtitle="Intensive, practical workshops designed to bridge the gap between academic theory and industrial reality. We provide hands-on training in PLC programming, 3D design, IoT development, and modern manufacturing techniques."
        watermarkNumber="21"
      />
      <ServiceDetail
        images={workshopImages}
        caption="Skill Up for Industry"
        leftTitle="Practical Skill Development"
        leftParagraphs={[
          "Our workshops are led by experienced industrial engineers who bring real-world projects into the classroom. We focus on teaching the tools and methodologies actually used in the industry today.",
          "Participants get hands-on experience with professional hardware and software, from wiring control panels and programming PLCs to designing complex 3D assemblies and printing them.",
        ]}
        rightTitle="Tailored Learning Paths"
        rightParagraphs={[
          "We offer workshops for various skill levels, from introductory sessions for school students to advanced specialized training for engineering graduates and working professionals looking to upskill.",
          "Our curriculum is constantly updated to reflect the latest trends in industrial automation, digital manufacturing, and sustainable engineering practices.",
        ]}
        features={[
          "Hands-on PLC & Automation Training",
          "Industrial 3D Design (CAD) Labs",
          "IoT & Embedded Systems Workshops",
          "Career Guidance & Industry Insights",
        ]}
        ctaLabel="Explore Workshops"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Curriculum Design",
            description:
              "Developing structured learning modules that focus on the most relevant industrial skills and technologies.",
          },
          {
            number: "02",
            title: "Interactive Sessions",
            description:
              "Conducting live demonstrations and guided practical exercises using professional-grade engineering tools.",
          },
          {
            number: "03",
            title: "Project-Based Learning",
            description:
              "Challenging participants to apply their new skills to solve a real-world engineering problem within the workshop.",
          },
          {
            number: "04",
            title: "Certification & Support",
            description:
              "Awarding certificates of completion and providing ongoing resources or mentorship for continued learning.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1523240715630-9918c13bc1ad?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our pedagogical ethos"
        eyebrowHighlight="ethos"
        title="Knowledge Through Application"
        paragraphs={[
          "Engineering cannot be mastered through a screen alone. It requires the tactile experience of assembling parts, the logical challenge of debugging code, and the satisfaction of seeing a machine move.",
          "Our workshops are designed to spark a lifelong passion for building and innovation, providing participants with the confidence to tackle complex technical challenges in their future careers.",
        ]}
        items={[
          {
            icon: <Users size={32} strokeWidth={1.2} />,
            label: "Collaborative Learning",
            description: "Learn together, build together",
            progress: 95,
          },
          {
            icon: <BookOpen size={32} strokeWidth={1.2} />,
            label: "Industry Curriculum",
            description: "Tools used by professionals",
            progress: 100,
          },
          {
            icon: <PenTool size={32} strokeWidth={1.2} />,
            label: "Hands-on Experience",
            description: "Real hardware, real software",
            progress: 98,
          },
        ]}
      />

      <CTASection
        eyebrow="Ignite your technical potential"
        eyebrowHighlight="potential"
        heading="Interested in hosting or attending a high-impact engineering workshop?"
        primaryLabel="View Upcoming Workshops"
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

export default Workshops;
