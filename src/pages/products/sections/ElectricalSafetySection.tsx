import image from "@/assets/home_assets/image13.jpg";
import ProductSectionLayout from "@/pages/products/ProductSectionLayout";
import { productPartners } from "@/pages/products/productPartners";

const ElectricalSafetySection = () => (
  <ProductSectionLayout
    id='electrical-safety'
    title='Electrical Equipment and Safety'
    short='Certified protection systems'
    summary='We deliver electrical and safety-focused equipment that supports compliance, operational protection, and safer working conditions in critical environments.'
    details='This product category is ideal for hazardous-area installations, asset protection, and operations that require strong safety assurance. It improves compliance readiness and protects both people and equipment, with support covering product selection, application guidance, documentation, and technical assistance through deployment.'
    image={image}
    imageAlt='Electrical safety equipment and monitoring'
    partner={productPartners.exertherm}
  />
);

export default ElectricalSafetySection;
