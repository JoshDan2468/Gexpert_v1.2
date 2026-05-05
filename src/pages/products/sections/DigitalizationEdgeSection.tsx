import image from "@/assets/home_assets/image11.jpg";
import ProductSectionLayout from "@/pages/products/ProductSectionLayout";
import { productPartners } from "@/pages/products/productPartners";

const DigitalizationEdgeSection = () => (
  <ProductSectionLayout
    id='digitalization-edge'
    title='Digitalization and Edge Computing'
    short='Smart connected systems'
    summary='We provide digitalization and edge computing solutions that help clients collect, process, and act on operational data closer to the source.'
    details='This offering is well suited for remote operations, real-time dashboards, and connected industrial systems that depend on low-latency visibility. It helps teams respond faster, improve control over distributed assets, and strengthen resilience across data-driven field operations through solution sizing, integration guidance, and deployment support.'
    image={image}
    imageAlt='Digitalization and edge computing systems'
    imageClassName='lg:h-[360px]'
    partner={productPartners.penguin}
  />
);

export default DigitalizationEdgeSection;
