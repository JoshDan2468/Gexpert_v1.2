import { CheckCircle2, ClipboardList, Target } from "@/lib/icons";
import ServiceDetailLayout from "@/pages/services/ServiceDetailLayout";
import strategyImage from "@/assets/home_assets/image16.jpg";

const BusinessProcessesPage = () => (
  <ServiceDetailLayout
    eyebrow='Operational Excellence'
    title='Business Advisory'
    summary='We advise our customers on how to improve the performance and effectiveness of their business depending on whether your focus is on transforming your business, containing cost or on sustaining performance and building on achievements.'
    intro='We work collaboratively with organization to find solution after critical review of issues; one such model is depicted as: understand, review, design, implement, check, and improve; followed through within a project management framework to the point where the desired results are achieved. Registration & Tender Assistance: GEC consulting team have the expertise and resources to complete the entire process of setting up and managing your business in the most efficient and cost-effective manner.'
    heroImage={strategyImage}
    heroImageAlt='Business advisory and process improvement planning'
    imageSectionTitle='Business advice focused on performance, effectiveness, and sustainable improvement'
    imageSectionCopy='We help clients review operational issues, shape improvement priorities, and convert advisory work into practical implementation.'
    featureCards={[
      {
        icon: ClipboardList,
        title: "Focus",
        copy: "Supports transformation, cost control, sustained performance, and growth.",
        bullets: ["Transformation", "Cost containment", "Sustained performance"],
      },
      {
        icon: Target,
        title: "Approach",
        copy: "Built on critical review, collaborative problem-solving, and practical action.",
        bullets: ["Issue review", "Solution design", "Implementation support"],
      },
      {
        icon: CheckCircle2,
        title: "Delivery",
        copy: "Managed through a structured project framework until results are achieved.",
        bullets: ["Understand", "Review", "Improve"],
      },
    ]}
    capabilities={[
      "New business",
      "Benchmark Study",
      "Branch Inspection (for financial services organizations)",
      "Business Process Review",
      "Performance Measurement",
      "Product/Concept Review",
      "Risk Assessment",
      "Service Quality Measurement",
      "Strategy Development",
      "Supplier Evaluation & Certification",
    ]}
    outcomes={[
      "Improved business performance and effectiveness",
      "Better clarity on operational issues and improvement priorities",
      "Stronger execution through structured review and implementation",
    ]}
    process={["Understand", "Review", "Design", "Implement", "Check", "Improve"]}
    sections={[
      {
        title: "Registration & Tender Assistance",
        description:
          "GEC consulting team has the expertise and resources to complete the entire process of setting up and managing your business in the most efficient and cost-effective manner.",
        items: [
          "Business setup support",
          "Tender assistance",
          "Registration process guidance",
          "Cost-effective business management support",
        ],
      },
    ]}
  />
);

export default BusinessProcessesPage;
