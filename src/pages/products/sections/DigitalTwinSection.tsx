import image from "@/assets/home_assets/image12.jpg";
import ProductSectionLayout from "@/pages/products/ProductSectionLayout";
import { productPartners } from "@/pages/products/productPartners";

const DigitalTwinSection = () => (
  <ProductSectionLayout
    id='digital-twin'
    title='Digital Twin Services'
    short='Live asset simulation'
    summary='Our digital twin services help clients model assets and processes so they can monitor current conditions, anticipate issues, and optimize performance.'
    details='The solution supports asset performance visualization, scenario testing, and predictive planning for maintenance and optimization decisions. It delivers deeper operational visibility and reduces uncertainty around asset behavior while we support clients with twin strategy, data mapping, configuration guidance, and operational interpretation.'
    image={image}
    imageAlt='Digital twin monitoring and simulation'
    imageClassName='lg:h-[360px]'
    partner={productPartners.beasy}
    reverse
  />
);

export default DigitalTwinSection;
