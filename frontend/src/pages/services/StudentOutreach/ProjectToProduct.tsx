import { Rocket, Package, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const ProjectToProduct = () => {
  const navigate = useNavigate();

  const p2pImages = [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
        caption="From Innovation to Market"
        title="Project to Product (P2P)"
        subtitle="Our specialized program designed to help students and early-stage innovators transform their technical prototypes into commercially viable products. We provide the engineering expertise, manufacturing resources, and business guidance needed for market success."
        watermarkNumber="22"
      />
      <ServiceDetail
        images={p2pImages}
        caption="Commercializing Innovation"
        leftTitle="Bridge to the Real World"
        leftParagraphs={[
          "Many great engineering projects never leave the lab. Our P2P program provides the necessary bridge to turn a functional prototype into a polished, manufacturable product that meets market standards.",
          "We help you refine your design for large-scale production, select cost-effective materials, and implement robust quality control measures that ensure your product is ready for real-world use.",
        ]}
        rightTitle="Professional Productization"
        rightParagraphs={[
          "Productization is more than just manufacturing; it's about branding, packaging, certification, and distribution. We provide guidance on navigating regulatory requirements and intellectual property protection.",
          "Through the P2P program, innovators gain access to our network of industrial partners and manufacturing facilities, significantly reducing the capital and expertise required to launch a new hardware product.",
        ]}
        features={[
          "Design for Manufacturability (DFM)",
          "Cost Optimization & Sourcing",
          "Regulatory & Certification Support",
          "Brand & Packaging Development",
        ]}
        ctaLabel="Commercialize your Idea"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Prototype Audit",
            description:
              "Evaluating your current project for technical feasibility, market potential, and manufacturability gaps.",
          },
          {
            number: "02",
            title: "Industrial Design",
            description:
              "Redesigning the project into a professional product form factor, focusing on aesthetics, ergonomics, and durability.",
          },
          {
            number: "03",
            title: "Production Planning",
            description:
              "Developing a bill of materials, identifying suppliers, and setting up the assembly line for low-volume production.",
          },
          {
            number: "04",
            title: "Market Launch",
            description:
              "Assisting with final product testing, certification compliance, and creating the marketing assets needed for launch.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our innovation ethos"
        eyebrowHighlight="ethos"
        title="Innovation with Impact"
        paragraphs={[
          "A project becomes a product when it starts solving problems for others. We believe that some of the most impactful engineering innovations start in student dorms and academic labs.",
          "Our mission is to empower these young innovators with the professional tools and industrial mindset needed to turn their technical dreams into successful, sustainable businesses.",
        ]}
        items={[
          {
            icon: <Rocket size={32} strokeWidth={1.2} />,
            label: "Market Ready",
            description: "From lab to customer hands",
            progress: 95,
          },
          {
            icon: <Package size={32} strokeWidth={1.2} />,
            label: "Polished Quality",
            description: "Industrial-grade finishing",
            progress: 100,
          },
          {
            icon: <TrendingUp size={32} strokeWidth={1.2} />,
            label: "Scalable Growth",
            description: "Built for volume production",
            progress: 98,
          },
        ]}
      />

      <Testimonials
        eyebrow="Innovator Success"
        eyebrowHighlight="Success"
        heading="Program Feedback"
        watermarkText="Impact"
        bgImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
        testimonials={[
          {
            title: "Dream to Reality",
            rating: 5,
            review:
              "The P2P program helped us turn our final year IoT project into a commercial smart energy meter. ANK's help with PCB manufacturing and plastic casing was invaluable.",
            name: "Sandeep T.",
            company: "Founder, EnerGrid Solutions",
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Turn your project into a product"
        eyebrowHighlight="product"
        heading="Ready to take your technical innovation to the next level and launch a real product?"
        primaryLabel="Apply for P2P Program"
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

export default ProjectToProduct;
