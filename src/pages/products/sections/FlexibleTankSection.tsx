import image from "@/assets/home_assets/image14.jpg";
import ProductSectionLayout from "@/pages/products/ProductSectionLayout";
import { productPartners } from "@/pages/products/productPartners";

const FlexibleTankSection = () => (
  <ProductSectionLayout
    id='flexible-tank'
    title='Flexible Tank'
    short='Rapid storage deployment'
    summary='Our flexible tank solutions support temporary or mobile storage needs where speed, durability, and practical deployment matter.'
    details='They are useful for fuel, water, and process fluid containment, especially in remote or fast-changing locations where rapid setup is important. The value comes from quick operational readiness, site adaptability, and less dependence on rigid storage infrastructure, supported by capacity planning, handling guidance, and field deployment assistance.'
    image={image}
    imageAlt='Flexible tank and fluid storage system'
    partner={productPartners.blt}
    reverse
  />
);

export default FlexibleTankSection;
