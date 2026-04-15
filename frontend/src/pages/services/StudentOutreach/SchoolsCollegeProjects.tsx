import { GraduationCap, Lightbulb, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const SchoolsCollegeProjects = () => {
  const navigate = useNavigate();

  const projectImages = [
    "https://images.unsplash.com/photo-1523240715630-9918c13bc1ad?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1523240715630-9918c13bc1ad?auto=format&fit=crop&q=80&w=2000"
        caption="Empowering Future Engineers"
        title="School & College Projects"
        subtitle="Comprehensive technical support and components for academic engineering projects. We help students bridge the gap between theoretical concepts and practical implementation with expert guidance and high-quality parts."
        watermarkNumber="20"
      />
      <ServiceDetail
        images={projectImages}
        caption="Learning through Doing"
        leftTitle="Hands-on Technical Support"
        leftParagraphs={[
          "We believe that the best way to learn engineering is by building real things. We provide students with the components, tools, and technical mentorship needed to bring their school and college projects to life.",
          "From robotics and automation to electronics and IoT, we offer a curated selection of kits and modules specifically designed for academic learning and competitive projects.",
        ]}
        rightTitle="Mentorship & Guidance"
        rightParagraphs={[
          "Beyond just providing hardware, our experienced engineers offer guidance on project architecture, circuit design, and troubleshooting. We help students overcome technical hurdles and ensure their projects are successful.",
          "We also support engineering colleges in setting up innovation labs and provides specialized training for student teams participating in national and international technical competitions.",
        ]}
        features={[
          "Curated Engineering Project Kits",
          "Component Sourcing for Students",
          "One-on-One Technical Mentorship",
          "Innovation Lab Setup Support",
        ]}
        ctaLabel="Get Project Support"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Concept Discussion",
            description:
              "Meeting with student teams to understand their project goals and defining the required technical architecture.",
          },
          {
            number: "02",
            title: "Component Selection",
            description:
              "Providing the right sensors, actuators, and controllers needed to implement the project efficiently and safely.",
          },
          {
            number: "03",
            title: "Guided Implementation",
            description:
              "Offering technical advice and troubleshooting support as students build and code their project prototypes.",
          },
          {
            number: "04",
            title: "Testing & Validation",
            description:
              "Assisting students in verifying their project's performance and preparing for presentations or competitions.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our educational ethos"
        eyebrowHighlight="ethos"
        title="Inspiring Tomorrow's Innovators"
        paragraphs={[
          "Education is the most powerful tool for engineering the future. We are committed to nurturing the curiosity and technical skills of the next generation through practical, hands-on experience.",
          "We treat every student project with the same level of respect as a professional industrial project, instilling a culture of quality, precision, and systematic problem-solving.",
        ]}
        items={[
          {
            icon: <GraduationCap size={32} strokeWidth={1.2} />,
            label: "Practical Learning",
            description: "Beyond the textbook",
            progress: 100,
          },
          {
            icon: <Lightbulb size={32} strokeWidth={1.2} />,
            label: "Innovation Spark",
            description: "Encouraging creative builds",
            progress: 95,
          },
          {
            icon: <Wrench size={32} strokeWidth={1.2} />,
            label: "Skill Building",
            description: "Real-world technical skills",
            progress: 98,
          },
        ]}
      />

      <Testimonials
        eyebrow="Student Success"
        eyebrowHighlight="Success"
        heading="Academic Feedback"
        watermarkText="Learn"
        bgImage="https://images.unsplash.com/photo-1523240715630-9918c13bc1ad?q=80&w=2000&auto=format&fit=crop"
        testimonials={[
          {
            title: "Competition Winners",
            rating: 5,
            review:
              "The technical mentorship from ANK was instrumental in our team winning the state-level robotics competition. Their insights into motor control were a game-changer.",
            name: "Aditya K.",
            company: "Student Team Lead, Tech-Vidyapeeth",
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Start your engineering journey"
        eyebrowHighlight="journey"
        heading="Need technical support or components for your school or college project?"
        primaryLabel="Talk to our Mentors"
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

export default SchoolsCollegeProjects;
