import PageLayout from "../../components/PageLayout";
import CommonHero from "../../components/CommonHero";
import UnitValue from "../../components/buisness-units/UnitValue";
import UnitClients from "@/components/buisness-units/UnitClients";
import UnitProducts from "@/components/buisness-units/UnitProducts";
import UnitMoreServices from "@/components/buisness-units/UnitMoreServices";

const EmbeddedSystemsIoT = () => {
  return (
    <PageLayout>
      <CommonHero
        title="Embedded & IoT"
        caption="Interconnecting hardware and software for smart industrial ecosystems."
      />

      <UnitValue
        category="IOT ECOSYSTEMS"
        title="Connected Hardware Excellence"
        description="We bridge the gap between physical hardware and digital analytics. Our team specializes in custom embedded logic, secure data warehousing, and real-time visualization for smart industrial ecosystems."
        highlights={[
          "Custom Embedded Logic",
          "IoT Data Warehousing",
          "Live Stream Analytics",
          "Smart Ecosystem Integration",
        ]}
        imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
        buttonText="Connect Your Devices"
      />

      <UnitProducts />

      <UnitClients />

      <UnitMoreServices />
    </PageLayout>
  );
};

export default EmbeddedSystemsIoT;
