import image from "@/assets/home_assets/image14.jpg";
import ProductSectionLayout from "@/pages/products/ProductSectionLayout";
import { productPartners } from "@/pages/products/productPartners";

const FlowmetersSensorsSection = () => (
  <ProductSectionLayout
    id='flowmeters-sensors'
    title='Flowmeters and Sensors'
    short='Precision measurement tools'
    summary='We supply flowmeters and sensors that help clients monitor process conditions accurately and maintain confidence in field measurements.'
    details='These solutions support process control, instrumentation programs, and operating environments that need real-time measurement feedback. They improve measurement confidence and process visibility while helping teams run safer and more efficient operations through instrument selection, technical interpretation, and deployment guidance.'
    image={image}
    imageAlt='Flowmeters and industrial sensors'
    partner={productPartners.spectraflow}
  />
);

export default FlowmetersSensorsSection;
