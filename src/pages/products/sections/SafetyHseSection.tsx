import image from "@/assets/home_assets/image10.jpg";
import ProductSectionLayout from "@/pages/products/ProductSectionLayout";
import { productPartners } from "@/pages/products/productPartners";

const SafetyHseSection = () => (
  <ProductSectionLayout
    id='safety-hse'
    title='Safety and HSE'
    short='Protection and compliance tools'
    summary='We provide safety and HSE products selected to help clients maintain safer worksites, stronger compliance practices, and more confident field operations.'
    details='This category supports worksite safety programs, compliance-oriented environments, and field operations that rely on protective systems and tools. It strengthens safety culture and operational risk awareness through requirement-based selection, deployment planning, usage guidance, and continued implementation support.'
    image={image}
    imageAlt='Safety and HSE operational equipment'
    partner={productPartners.cenosco}
    reverse
  />
);

export default SafetyHseSection;
