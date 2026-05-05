import { CheckCircle2, ClipboardList, Target } from "@/lib/icons";
import ServiceDetailLayout from "@/pages/services/ServiceDetailLayout";
import operationsImage from "@/assets/home_assets/image10.jpg";

const OilGasManagementPage = () => (
  <ServiceDetailLayout
    eyebrow='Sector Operations'
    title='Oil and Gas Offers'
    summary='Measures are suggested to enhance better operation, local content development, reduced OPEX and CAPEX costs for exploration, drilling and production sustainability and optimization.'
    intro='Improvement in the oversight function of Operators, contract administration and processing, monitoring of assets, local content development and monitoring, in-country capacity development, transparency CSR for communities. The suggestions are to enhance smooth and unhindered operation thus, majority will be driven by Information Technology and implemented real time at little or no cost. So, the suggestions predominantly focus on the local contents, IOCs mode of operations, cost saving and optimization of limited resources available in the country.'
    heroImage={operationsImage}
    heroImageAlt='Oil and gas operations management planning'
    imageSectionTitle='Oil and gas value-chain cost management and reconciliation'
    imageSectionCopy='GExpert Consulting guides and advises on oil and gas value chain cost management and reconciliation across technical, management, and financial committee levels.'
    featureCards={[
      {
        icon: ClipboardList,
        title: "Scope",
        copy: "Structured around oversight, continuity, and delivery control.",
        bullets: ["Operator oversight", "Contract administration", "Asset monitoring"],
      },
      {
        icon: Target,
        title: "Outcomes",
        copy: "Focused on visibility, cost saving, local content, and optimized resources.",
        bullets: ["Reduced OPEX", "Reduced CAPEX", "Production sustainability"],
      },
      {
        icon: CheckCircle2,
        title: "Delivery",
        copy: "Coordinated across technical, commercial, local-content, and field inputs.",
        bullets: ["Real-time IT support", "Community transparency", "Capacity development"],
      },
    ]}
    capabilities={[
      "Improvement in the oversight function of Operators",
      "Contract administration & processing",
      "Monitoring of assets",
      "Local content development and monitoring",
      "In-country capacity development",
      "Transparency CSR for communities",
    ]}
    outcomes={[
      "The suggestions are to enhance smooth and unhindered operation thus, majority will be driven by Information Technology and implemented real time at little or no cost.",
      "So, the suggestions predominantly focus on the local contents, IOCs mode of operations, cost saving and optimization of limited resources available in the country.",
    ]}
    process={[
      "Subcommittee (SUBCOM)",
      "Technical Committee (TECOM)",
      "Management Committee (MACOM)",
      "Financial Committee (FINCOM)",
    ]}
    sections={[
      {
        title: "Oil and Gas Service Areas",
        items: [
          "Oilfield Technical Audit/Value for Money Audit/Cost Verification for Exploration; Development-(CAPEX); Facilities-(OPEX/CAPEX); Drilling-(DRILLEX); Decommissioning & Abandonment Cost; and General Expenses & Administration",
          "Field Decommissioning & Abandonment",
          "Oilfield Operations Technical work program Review-Annually",
          "Oilfield Budget & Performance Review-Annually",
          "Review each contractor's annual work programme & budget and reported performance",
          "Review contracts more than contractor's limit",
          "Review project scopes, schedule and costs",
          "Carry out annual cost verification exercise",
          "Verifies crude oil allocation for payment of royalty, cost oil, ppt & profit through cost Recovery team",
          "Oilfield Operations Cost Control & Monitoring",
          "Oilfield Production Cost Control & Monitoring",
          "Oilfield Projects Cost Control & Monitoring",
          "Crude Oil Output Control & Monitoring/Inspection",
          "Downstream Marketing, Supply & Distribution/Inspection of imported Products",
          "Retail Supply and Distribution of Various products-Filling Station Outlets",
        ],
      },
    ]}
  />
);

export default OilGasManagementPage;
