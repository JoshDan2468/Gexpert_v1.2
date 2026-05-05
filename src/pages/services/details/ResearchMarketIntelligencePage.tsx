import { CheckCircle2, ClipboardList, Target } from "@/lib/icons";
import ServiceDetailLayout from "@/pages/services/ServiceDetailLayout";
import marketImage from "@/assets/home_assets/image12.jpg";

const ResearchMarketIntelligencePage = () => (
  <ServiceDetailLayout
    eyebrow='Market Insight'
    title='Research and Market Intelligence'
    summary='Global Experts Consultoria one of the core businesses, and strength is to render marketing research services. We provide discerning information that will help clients solve issues and achieve objectives.'
    intro='Whether quantitative, qualitative research methodologies or both, the output of our research projects and efforts, have seen our clients acquire leadership roles in their respective sectors. We apply standard practices in research project management, scope definition, design of concepts/objectives, questionnaires, data analysis, and engagement of personnel to run the projects. We have quality assurance process built into our research projects framework which ensures quality work is done by all and all data is back checked and validated. Quality of our work is assured, and research reports are delivered on time.'
    heroImage={marketImage}
    heroImageAlt='Market intelligence and business insight analysis'
    imageSectionTitle='Research support built around real business questions'
    imageSectionCopy='Our reports come with elaborate executive summaries that help rejuvenate, build, and reposition brands and businesses.'
    featureCards={[
      {
        icon: ClipboardList,
        title: "Scope",
        copy: "Structured around intelligence priorities, research depth, and decision support.",
        bullets: ["Market research", "Consumer research", "Social research"],
      },
      {
        icon: Target,
        title: "Outcomes",
        copy: "Focused on clearer commercial visibility and stronger opportunity selection.",
        bullets: ["Leadership insight", "Issue solving", "Objective support"],
      },
      {
        icon: CheckCircle2,
        title: "Delivery",
        copy: "Coordinated through research, interpretation, quality checks, and recommendation.",
        bullets: ["Data back-checking", "Validation", "On-time reports"],
      },
    ]}
    capabilities={[
      "Political and Election opinion poll and trends",
      "Consumers Research",
      "Social Research",
      "Customer Satisfaction Survey",
      "New Product Testing and implementation",
      "Pricing Studies",
      "Product Evaluation Study",
      "Impact Assessment",
      "Awareness and Usage Study",
      "Advert and campaign evaluation",
      "Opinion Poll",
      "Continuous Assessment",
      "Quality of Service",
    ]}
    outcomes={[
      "Face to face interviews",
      "Group Interview",
      "Social and Religious Center sampling",
      "On-line surveys",
      "Mobile survey",
      "Focus group discussions (FGDs)",
      "In-depth interviews (IDI)s",
      "Telephone aided interview",
      "Audits",
      "Desk research",
    ]}
    process={[
      "Semi/fully structured questionnaires",
      "FGD Moderating guide",
      "IDI guide",
      "Mobile equipment (Android phones, tablet, etc) with illustrative images by the side",
    ]}
  />
);

export default ResearchMarketIntelligencePage;
