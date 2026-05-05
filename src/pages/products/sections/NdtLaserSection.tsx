import image from "@/assets/about/image2.jpg";
import ProductSectionLayout from "@/pages/products/ProductSectionLayout";
import { productPartners } from "@/pages/products/productPartners";

const NdtLaserSection = () => (
  <ProductSectionLayout
    id='ndt-laser'
    title='NDT Products Innovation and Laser Scanning'
    short='Inspection and 3D capture'
    summary='We provide NDT innovation and laser scanning solutions that help clients inspect assets, verify conditions, and build stronger technical understanding.'
    details='The offering is designed for integrity assessment, site capture, dimensional verification, and inspection-driven documentation. It gives teams better insight into asset condition and more accurate field verification, with support for technology selection, inspection workflow planning, and field application guidance.'
    image={image}
    imageAlt='NDT technology and laser scanning support'
    partner={productPartners.evident}
    reverse
  />
);

export default NdtLaserSection;
