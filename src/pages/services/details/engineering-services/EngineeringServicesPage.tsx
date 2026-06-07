import ServiceDetailLayout from "@/pages/services/ServiceDetailLayout";
import { engineeringServicesData } from "./EngineeringServicesData";

const EngineeringServicesPage = () => (
  <ServiceDetailLayout {...engineeringServicesData} />
);

export default EngineeringServicesPage;
