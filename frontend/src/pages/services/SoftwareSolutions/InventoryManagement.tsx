import { ClipboardList, BarChart3, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../components/PageLayout";
import CommonHero from "../../../components/CommonHero";
import ServiceDetail from "../../../components/service/ServiceDetail";
import ServiceProcess from "@/components/service/ServiceProcess";
import PhilosophySection from "@/components/service/Philosophy";
import Testimonials from "@/components/service/Testinomials";
import CTASection from "@/components/service/CTA";

const InventoryManagement = () => {
  const navigate = useNavigate();

  const inventoryImages = [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000",
  ];

  return (
    <PageLayout>
      <CommonHero
        bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
        caption="Intelligent Stock Control"
        title="Inventory Management Systems"
        subtitle="Custom software solutions to streamline your supply chain and optimize stock levels. We build intelligent inventory management systems that provide real-time tracking, automated reordering, and deep analytical insights for industrial and retail environments."
        watermarkNumber="16"
      />
      <ServiceDetail
        images={inventoryImages}
        caption="Efficiency in Every Unit"
        leftTitle="Unified Stock Visibility"
        leftParagraphs={[
          "We develop inventory management platforms that provide a single source of truth for your stock across multiple locations. Our systems eliminate manual counting errors and provide instant visibility into stock levels, movements, and valuations.",
          "From barcode and QR code integration to advanced RFID tracking, we implement the hardware and software needed to automate your data entry and ensure 100% inventory accuracy.",
        ]}
        rightTitle="Smart Supply Chain Logic"
        rightParagraphs={[
          "Our platforms include intelligent reordering algorithms that analyze historical usage patterns and lead times to prevent stockouts and overstocking. This ensures your capital is utilized as efficiently as possible.",
          "We focus on creating intuitive administrative dashboards that provide your warehouse and procurement teams with the data they need to make faster, better-informed logistics decisions.",
        ]}
        features={[
          "Real-time Stock Tracking",
          "Automated Reordering Logic",
          "Barcode & RFID Integration",
          "Multi-location Management",
        ]}
        ctaLabel="Optimize your Stock"
        onCtaClick={() => {
          navigate("/contact");
        }}
      />
      <ServiceProcess
        items={[
          {
            number: "01",
            title: "Workflow Audit",
            description:
              "Analyzing your current inventory processes, identifying manual bottlenecks, and defining data tracking requirements.",
          },
          {
            number: "02",
            title: "Database Architecture",
            description:
              "Designing a robust, scalable data structure to handle complex SKU hierarchies, locations, and transaction histories.",
          },
          {
            number: "03",
            title: "Platform Development",
            description:
              "Building the web and mobile interfaces for stock entry, management dashboards, and automated reporting engines.",
          },
          {
            number: "04",
            title: "Training & Integration",
            description:
              "Onboarding your team, integrating with existing ERP/Accounting systems, and ensuring a smooth transition to the new platform.",
          },
        ]}
      />

      <PhilosophySection
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
        eyebrow="Our logistics ethos"
        eyebrowHighlight="ethos"
        title="Precision in the Warehouse"
        paragraphs={[
          "Inventory isn't just about items on a shelf; it's about frozen capital. We believe that an effective management system should be invisible, enabling a frictionless flow of goods while providing perfect data behind the scenes.",
          "We apply the same level of engineering precision to our logistics software as we do to industrial machines, ensuring that every transaction is logged with absolute reliability and performance.",
        ]}
        items={[
          {
            icon: <ClipboardList size={32} strokeWidth={1.2} />,
            label: "Total Accuracy",
            description: "Eliminate manual errors",
            progress: 100,
          },
          {
            icon: <BarChart3 size={32} strokeWidth={1.2} />,
            label: "Actionable Data",
            description: "Insight-driven procurement",
            progress: 96,
          },
          {
            icon: <Package size={32} strokeWidth={1.2} />,
            label: "Optimized Flow",
            description: "Reduced warehouse lead times",
            progress: 98,
          },
        ]}
      />

      <Testimonials
        eyebrow="Logistics Success"
        eyebrowHighlight="Success"
        heading="Client Feedback"
        watermarkText="Stock"
        bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
        testimonials={[
          {
            title: "Procurement Mastery",
            rating: 5,
            review:
              "ANK's custom inventory system completely eliminated our 'out-of-stock' issues. The automated reordering logic has saved us countless hours of manual procurement planning.",
            name: "Deepak R.",
            company: "Director, Radiant Logistics",
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
          },
        ]}
      />
      <CTASection
        eyebrow="Streamline your supply chain"
        eyebrowHighlight="supply"
        heading="Ready to take full control of your inventory with a custom intelligent system?"
        primaryLabel="Start Inventory Project"
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

export default InventoryManagement;
