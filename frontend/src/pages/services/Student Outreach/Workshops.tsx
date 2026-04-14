import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import DetailedProcessSection from "../../../components/service/DetailedProcessSection";
import type { ProcessStep } from "../../../components/service/DetailedProcessSection";
import CTASection from "@/components/service/CTA";

const Workshops = () => {
  const steps: ProcessStep[] = [
    {
      number: "1",
      title: "Curriculum Design",
      subtitle: "Industry-Relevant Training",
      description:
        "We design our workshops to cover the latest trends in industrial automation, robotics, and software engineering, ensuring students learn skills that are in high demand.",
      images: [
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "2",
      title: "Hands-on Sessions",
      subtitle: "Practical Experience",
      description:
        "Participants work directly with industrial PLC hardware, CAD software, and electronic test equipment under the supervision of senior engineers.",
      images: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      number: "3",
      title: "Certification",
      subtitle: "Skills Verification",
      description:
        "Upon successful completion, students receive a certificate recognized by ANK, validating their technical proficiency and practical knowledge in the subject matter.",
      images: [
        "https://images.unsplash.com/photo-1454165833767-027eeed1a131?auto=format&fit=crop&q=80&w=600",
      ],
    },
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
        caption="Knowledge Transfer"
        title="Technical Workshops"
        subtitle="Intensive, hands-on training led by industry experts. We bridge the gap between academic theory and industrial practice through immersive learning experiences."
        watermarkNumber="02"
      />

      <DetailedProcessSection
        eyebrow="Expert Led"
        title="Learn from the Professionals"
        description="Our workshops are designed to provide students with a deep dive into specific technical domains, from embedded systems to advanced industrial automation."
        steps={steps}
      />

      <CTASection
        eyebrowHighlight="Host"
        eyebrow="A Workshop"
        heading="Interested in hosting a technical workshop at your institution? Let's bring the industry to your campus."
        primaryLabel="Inquire for Booking"
        secondaryLabel="View Curriculum"
      />
    </PageLayout>
  );
};

export default Workshops;
