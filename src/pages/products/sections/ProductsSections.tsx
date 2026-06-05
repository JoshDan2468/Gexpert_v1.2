import ProductSectionLayout from "@/pages/products/ProductSectionLayout";
import { productSections } from "@/pages/products/sections/productSectionsData";

const ProductsSections = () => (
  <>
    {productSections.map((section) => (
      <ProductSectionLayout key={section.id} {...section} />
    ))}
  </>
);

export default ProductsSections;
