import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import DetailedProcessSection from "../../../components/service/DetailedProcessSection";
import type { ProcessStep } from "../../../components/service/DetailedProcessSection";
import CTASection from "@/components/service/CTA";

const SchoolsCollegeProjects = () => {
  const steps: ProcessStep[] = [
    {
      number: "1",
      title: "Proposal & Selection",
      subtitle: "Academic Collaboration",
      description:
        "Students or institutions submit project proposals. We evaluate them based on innovation, feasibility, and educational value to select projects for our mentorship program.",
      images: [
        "https://images.unsplash.com/photo-1523240715630-9918c13bc1ad?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "2",
      title: "Guided Engineering",
      subtitle: "Hands-on Development",
      description:
        "Selected projects receive technical guidance from our expert engineers. We provide access to professional design tools, simulation software, and industrial insights.",
      images: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "3",
      title: "Prototype Validation",
      subtitle: "Real-world Testing",
      description:
        "We assist students in moving from theory to practice, helping them build and test functional prototypes in a professional industrial environment.",
      images: [
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
      ],
    },
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1523240715630-9918c13bc1ad?auto=format&fit=crop&q=80&w=2000"
        caption="Nurturing Talent"
        title="School & College Projects"
        subtitle="Empowering the next generation of engineers. We provide technical mentorship, resources, and professional guidance for high-impact academic projects."
        watermarkNumber="01"
      />

      <DetailedProcessSection
        eyebrow="Future Innovators"
        title="Bridge the Gap to Industry"
        description="Our student outreach program is designed to bring industrial rigor to academic excellence, helping students solve real-world problems with professional methods."
        steps={steps}
      />

      <CTASection
        eyebrowHighlight="Submit"
        eyebrow="Your Project"
        heading="Working on a breakthrough academic project? Let's take it to the professional level together."
        primaryLabel="Submit Proposal"
        secondaryLabel="Program Details"
      />
    </PageLayout>
  );
};

export default SchoolsCollegeProjects;
