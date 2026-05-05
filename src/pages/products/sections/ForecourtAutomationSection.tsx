import image from "@/assets/home_assets/image11.jpg";
import ProductSectionLayout from "@/pages/products/ProductSectionLayout";
import { productPartners } from "@/pages/products/productPartners";

const ForecourtAutomationSection = () => (
  <ProductSectionLayout
    id='forecourt-automation'
    title='Software and Hardware Forecourt Automation'
    short='Automated forecourt control'
    summary='Our forecourt automation solutions help clients modernize monitoring, transaction visibility, and operational control for service environments.'
    details='They are designed for fuel stations and distributed forecourt assets where inventory tracking, transaction accuracy, and control across service points are essential. The result is stronger operational visibility and workflow efficiency, with support for planning, hardware and software integration, and rollout coordination.'
    image={image}
    imageAlt='Forecourt automation software and hardware'
    partner={productPartners.cryotos}
  />
);

export default ForecourtAutomationSection;
