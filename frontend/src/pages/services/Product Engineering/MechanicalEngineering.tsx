import { Hammer, Settings2, Wrench } from "lucide-react";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import ClientMarquee from "@/components/service/ClientsMarque";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const MechanicalEngineering = () => {
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
        bgImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
        caption="Precision 3D CAD & Mechanics"
        title="Mechanical Engineering"
        subtitle="Translating cutting-edge concepts into tangible, structurally sound physical products through advanced modeling, simulation, and meticulous material science."
        watermarkNumber="03"
      />
      <ServiceDetail
        image="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2000"
        caption="Physical World Solutions"
        leftTitle="Core Capabilities"
        leftParagraphs={[
          "Advanced 3D Modeling & Kinematics: Creating incredibly detailed, parametric 3D models for complex moving assemblies and static structures across leading CAD platforms.",
          "Finite Element Analysis (FEA): Subjecting digital prototypes to rigorous thermal, fluid, and structural stress simulations to validate mechanical integrity long before physical production.",
          "Industrial Engineering & DFM: Refining geometry, material choices, and tooling strategies to dramatically lower machining and injection molding costs while retaining structural strength.",
          "Technical Drafting & GD&T: Producing meticulous 2D manufacturing prints equipped with Geometric Dimensioning and Tolerancing to ensure zero ambiguity on the factory floor.",
        ]}
        rightTitle="Mastery Over Matter"
        rightParagraphs={[
          "Great mechanical engineering isn't just about making things fit; it's about optimizing weight, durability, thermal dynamics, and manufacturability perfectly into a single, cohesive form.",
          "Our team delivers industrial-grade mechanical solutions that form the indestructible backbone of automation equipment, consumer products, and heavy machinery, ensuring your vision survives the rigors of the real world.",
        ]}
        features={[
          "Complex Assembly Design",
          "Material Science Expertise",
          "Rapid Prototyping Coordination",
        ]}
        ctaLabel="Review Our CAD Portfolio"
        onCtaClick={() => {
          console.log("Mechanical CTA clicked");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Conceptualization & Feasibility",
            description:
              "We assess form factor requirements, environmental stresses, and user interactions to establish the core mechanical architecture and select appropriate base materials.",
          },
          {
            number: "02",
            title: "Parametric CAD Design",
            description:
              "Our mechanical designers build highly accurate, robust 3D models of individual parts and complex interlocking assemblies, ensuring perfect spatial alignment and kinematic motion.",
          },
          {
            number: "03",
            title: "Simulated Validation",
            description:
              "Utilizing advanced FEA and CFD software, we apply virtual stress, heat, and fluid dynamics to identify points of failure computationally, saving massive prototyping costs.",
          },
          {
            number: "04",
            title: "Documentation & Release",
            description:
              "Finalizing the process with the generation of comprehensive Bills of Materials (BOM) and highly detailed 2D technical drawings ready for CNC, molding, or sheet metal fabrication.",
          },
        ]}
      />
      <ClientMarquee clients={clients} />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our mechanical ethos"
        eyebrowHighlight="ethos"
        title="Form follows flawless function"
        paragraphs={[
          "We approach mechanical engineering with a deep respect for the physical limitations of materials and manufacturing processes. An elegant design on a screen is meaningless if it cannot be forged, machined, or molded efficiently.",
          "We operate strictly in accordance with ASME Y14.5 standards. This guarantees that the geometric tolerances we specify are universally understood by top-tier manufacturers globally, eliminating misinterpretation and costly recuts.",
        ]}
        items={[
          {
            icon: <Settings2 size={32} strokeWidth={1.2} />,
            label: "Precision Tolerances",
            description: "Micron-level accuracy in all designs",
            progress: 97,
          },
          {
            icon: <Wrench size={32} strokeWidth={1.2} />,
            label: "Manufacturability",
            description: "Designs optimized for massive scale",
            progress: 92,
          },
          {
            icon: <Hammer size={32} strokeWidth={1.2} />,
            label: "Structural Integrity",
            description: "Built to withstand maximum stress",
            progress: 96,
          },
        ]}
      />

      <Testimonials
        eyebrow="Client Testimonials"
        eyebrowHighlight="Client"
        heading="Engineering the Indestructible"
        watermarkText="Feedback"
        bgImage="https://images.unsplash.com/photo-1711199694531-e982a79ea381?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        testimonials={[
          {
            title: "Optimization Masters",
            rating: 5,
            review:
              "They took our bulky, multipiece housing assembly and redesigned it for single-shot injection molding. Not only did they reduce our unit cost by 40%, but the new part is actually stronger.",
            name: "Thomas Vance",
            company: "Product Director, AeroTech Medical",
            avatar:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          },
          {
            title: "Exceptional Kinetic Understanding",
            rating: 5,
            review:
              "The custom robotic end-effectors they modeled for our assembly line were flawless. The 3D kinematics they simulated perfectly matched real-world performance on day one. Astounding precision.",
            name: "Rebecca Lin",
            company: "Chief Automation Officer, OmniRobotics",
            avatar:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Transform concepts into reality"
        eyebrowHighlight="reality"
        heading="Need world-class mechanical design and simulation to bring your next physical product to market?"
        primaryLabel="Talk to our CAD Experts"
        secondaryLabel="Request a Quote"
        onPrimaryClick={() => {
          console.log("CAD Experts clicked");
        }}
        onSecondaryClick={() => {
          console.log("Quote clicked");
        }}
      />
    </PageLayout>
  );
};

export default MechanicalEngineering;
