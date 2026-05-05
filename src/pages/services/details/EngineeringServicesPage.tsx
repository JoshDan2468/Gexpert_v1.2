import { CheckCircle2, ClipboardList, Target } from "@/lib/icons";
import ServiceDetailLayout from "@/pages/services/ServiceDetailLayout";
import engineeringImage from "@/assets/home_assets/build.jpg";
import engineeringIllustration from "@/assets/services/const.jpg";

const EngineeringServicesPage = () => (
  <ServiceDetailLayout
    eyebrow='Technical Delivery'
    title='Engineering Services'
    summary='GEC offers a complete range of engineering services across feasibility, basic engineering, authority engineering, detailed engineering, procurement, purchasing, construction activities, and plant start-up.'
    intro='GEC through her partners has the necessary resources, background, and expertise to perform offered services in a professional and well-organised manner. Our partnership relationship allows us to take part in large projects. GEC has acquired specialist software that enables our engineers to focus on solving client problems effectively. Our advantage is our experience in design engineering and construction of technological complexes, including cooperation with foreign partners and flexibility in problem solving.'
    heroImage={engineeringImage}
    heroImageAlt='Engineering planning and technical collaboration'
    imageSectionTitle='A complete engineering scope from feasibility to start-up'
    imageSectionCopy='Our engineers support feasibility, concept definition, FEED, detailed design, procurement, construction, commissioning, start-up, and training.'
    imageSectionImage={engineeringIllustration}
    imageSectionImageAlt='Engineering team coordination and technical design review'
    featureCards={[
      {
        icon: ClipboardList,
        title: "Planning and Design",
        copy: "Engineering work is organized from screening and pre-FEED through detailed design.",
        bullets: ["Feasibility", "Concept selection", "Detailed design"],
      },
      {
        icon: Target,
        title: "Field Development",
        copy: "A systems approach links reservoir, subsea, and topsides facilities.",
        bullets: ["Greenfield support", "Brownfield support", "Flow assurance"],
      },
      {
        icon: CheckCircle2,
        title: "Execution Readiness",
        copy: "Procurement, construction, commissioning, start-up, and training are supported.",
        bullets: ["Supplier selection", "Commissioning", "Start-up support"],
      },
    ]}
    capabilities={[
      "Detailed engineering design covering corrosion mitigation, cathodic protection, electrical and power systems, instrumentation and controls, civil and structural designs, 3D PDMS modeling, stress analysis, safety studies, equipment sizing, pipeline systems, and mechanical systems.",
      "Concept and front-end engineering design including field development studies, feasibility and concept selection studies, debottlenecking, optimisation, upgrade and revamp studies, pipeline hydraulic studies, flow assurance, outline business case studies, and complete basic engineering packages.",
      "Field development support from conceptual design through pre-FEED, FEED, and detailed design for both greenfield and brownfield developments.",
      "Flow assurance and production chemistry support for new projects and existing downstream assets.",
      "Technical, safety, and quality assurance during construction activities, plus procurement and supplier selection support.",
    ]}
    outcomes={[
      "A systems approach linking reservoir, subsea, and topsides facilities to support successful projects and stronger financial investment decisions.",
      "Professional and well-organised engineering delivery supported by specialist tools, partner capability, and practical design and construction experience.",
      "Improved field development capability through support for complex fluids, lab data, testing, fluid characterization, and OLGA transient multiphase flow modelling.",
      "High system availability through engineering, chemical, operational, safety, and quality support across development and operations.",
    ]}
    process={[
      "Development screening and planning through economic and technical assessment, appraisal data gathering, and impartial recommendations.",
      "Conceptual engineering (Pre-FEED) through concept selection, field architecture, basis of design management, and cost estimation.",
      "Front End Engineering Design (FEED) through concept refinement, technical and economic refinement, development risk assessment, and field layout optimisation.",
      "Detailed design, construction, commissioning, start-up support, training, and procurement coordination.",
    ]}
    sections={[
      {
        title: "Detailed Engineering Design",
        items: [
          "Corrosion mitigation and cathodic protection design",
          "Electrical and power system design",
          "Instrumentation and controls systems",
          "Civil and structural designs for onshore and offshore facilities, including platform design and modeling",
          "3D PDMS modeling and stress analysis",
          "Safety and loss prevention studies and design",
          "Equipment sizing and design calculations",
          "Pipeline systems design",
          "Mechanical systems design",
        ],
      },
      {
        title: "Concept / Front-End Engineering Design",
        items: [
          "Field development studies",
          "Feasibility and concept selection studies",
          "Debottlenecking and optimisation",
          "Upgrade and revamp studies",
          "Pipeline hydraulic studies",
          "Flow assurance studies",
          "Outline business case studies",
          "Complete basic engineering packages",
        ],
      },
      {
        title: "Field Development",
        description:
          "Our engineers focus on delivering field development from conceptual, pre-FEED, FEED, and detailed design projects for greenfield and brownfield developments. We utilize a systems approach linking reservoir, subsea, and topsides facilities.",
        items: [
          "Greenfield and brownfield field development",
          "Specialists in complex fluids including heavy oil, sour service, wax, and hydrates",
          "Lab data and testing management",
          "Fluid characterization",
          "OLGA modelling for transient multiphase flow",
          "Technical, safety, and quality assurance services during construction activities",
        ],
      },
      {
        title: "Development Screening and Planning",
        items: [
          "Economic and technical screening and assessment",
          "Appraisal data gathering",
          "Impartial recommendations",
        ],
      },
      {
        title: "Conceptual Engineering (Pre-FEED)",
        items: [
          "Selection of preferred concept",
          "Field architecture and layout",
          "Basis of design management",
          "Cost estimation and economics",
        ],
      },
      {
        title: "Front End Engineering Design (FEED)",
        items: [
          "Concept development refinement",
          "Technical and economic refinement",
          "Development risk assessment",
          "Field layout optimisation",
        ],
      },
      {
        title: "Detailed Design",
        items: [
          "Detailed engineering for field development, pipelines, and structures",
          "Optimized start-up procedures",
          "Handover and start-up management",
        ],
      },
      {
        title: "Flow Assurance & Production Chemistry",
        description:
          "The team of experts supports field development capabilities as well as operations and optimisation services. We also provide production chemistry support to new projects and existing downstream assets, from fluid sampling and analysis to major incompatibilities, helping maintain high system availability.",
        items: [
          "Fluid sampling and analysis",
          "Engineering and chemical solutions for production continuity",
          "PIPESIM steady state analysis",
        ],
      },
      {
        title: "Operations",
        items: [
          "Operations risk management and mitigation",
          "Operating philosophies and procedures",
          "Debottlenecking",
          "Hydrate and wax deposition strategies",
        ],
      },
      {
        title: "Construction",
        items: [
          "Construction planning",
          "Equipment installation",
          "Commissioning",
          "Start-up support",
          "Training",
        ],
      },
      {
        title: "Procurement",
        description:
          "During detail engineering, the process of offer evaluation follows to select the most suitable suppliers in terms of quality, reliability, and financing.",
        items: [
          "RFQ and solicitation",
          "Evaluation of bids and supplier selection",
          "Purchase orders and contract awards",
          "Logistic and shipping",
        ],
      },
    ]}
  />
);

export default EngineeringServicesPage;
