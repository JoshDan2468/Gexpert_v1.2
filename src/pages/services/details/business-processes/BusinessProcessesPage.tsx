import ServiceDetailLayout from "@/pages/services/ServiceDetailLayout";
import { businessProcessesData } from "./BusinessProcessesData";

const BusinessProcessesPage = () => (
  <ServiceDetailLayout {...businessProcessesData} />
);

export default BusinessProcessesPage;
