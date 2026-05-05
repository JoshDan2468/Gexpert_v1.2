import image from "@/assets/home_assets/image16.jpg";
import ProductSectionLayout from "@/pages/products/ProductSectionLayout";
import { productPartners } from "@/pages/products/productPartners";

const RenewableEnergySection = () => (
  <ProductSectionLayout
    id='renewable-energy'
    title='Renewable Energy'
    short='Hybrid energy systems'
    summary='Our renewable energy offerings help clients explore and implement practical energy alternatives that strengthen resilience and long-term efficiency.'
    details='They fit hybrid power systems, decentralized energy use cases, and sustainability initiatives where cleaner and more reliable energy matters. This section supports energy resilience, operational efficiency, and long-term sustainability goals through fit assessment, project planning, and implementation guidance.'
    image={image}
    imageAlt='Renewable energy technologies'
    partner={productPartners.dahaiSolar}
  />
);

export default RenewableEnergySection;
