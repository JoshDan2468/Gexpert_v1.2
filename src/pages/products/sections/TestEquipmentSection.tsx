import image from "@/assets/home_assets/image13.jpg";
import ProductSectionLayout from "@/pages/products/ProductSectionLayout";
import { productPartners } from "@/pages/products/productPartners";

const TestEquipmentSection = () => (
  <ProductSectionLayout
    id='test-equipment'
    title='Test Equipment'
    short='Calibration and verification tools'
    summary='We supply test equipment that supports technicians and engineers in verifying performance, diagnosing issues, and maintaining confidence in system behavior.'
    details='These tools are suited for calibration, troubleshooting, field verification, and maintenance workflows that demand dependable technical insight. They improve diagnostic confidence and quality assurance capability through careful equipment selection, application guidance, and support for adoption into maintenance operations.'
    image={image}
    imageAlt='Professional test equipment and tools'
    partner={productPartners.varixx}
    reverse
  />
);

export default TestEquipmentSection;
