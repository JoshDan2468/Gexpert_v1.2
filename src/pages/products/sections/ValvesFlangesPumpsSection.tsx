import image from "@/assets/about/image2.jpg";
import ProductSectionLayout from "@/pages/products/ProductSectionLayout";
import { productPartners } from "@/pages/products/productPartners";

const ValvesFlangesPumpsSection = () => (
  <ProductSectionLayout
    id='valves-flanges-pumps'
    title='Valves, Flanges and Pumps'
    short='Industrial flow control'
    summary='We provide valves, flanges, and pumps that support fluid handling systems where durability, fit, and dependable operation are essential.'
    details='This product group serves process utilities, industrial transfer systems, and operating environments that require robust flow components. It improves project fit and continuity across demanding operations through component selection, specification support, technical guidance, and deployment-stage assistance.'
    image={image}
    imageAlt='Valves, flanges, and pumps for industrial systems'
    partner={productPartners.smith}
    reverse
  />
);

export default ValvesFlangesPumpsSection;
