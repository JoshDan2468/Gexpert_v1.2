import image10 from "@/assets/home_assets/image10.jpg";
import image11 from "@/assets/home_assets/image11.jpg";
import image12 from "@/assets/home_assets/image12.jpg";
import image13 from "@/assets/home_assets/image13.jpg";
import image14 from "@/assets/home_assets/image14.jpg";
import image16 from "@/assets/home_assets/image16.jpg";
import aboutImage2 from "@/assets/about/image2.jpg";
import type { ProductSectionLayoutProps } from "@/pages/products/ProductSectionLayout";
import { productPartners } from "@/pages/products/productPartners";

export const productSections = [
  {
    id: "digitalization-edge",
    title: "Digitalization and Edge Computing",
    short: "Smart connected systems",
    summary:
      "We provide digitalization and edge computing solutions that help clients collect, process, and act on operational data closer to the source.",
    details:
      "This offering is well suited for remote operations, real-time dashboards, and connected industrial systems that depend on low-latency visibility. It helps teams respond faster, improve control over distributed assets, and strengthen resilience across data-driven field operations through solution sizing, integration guidance, and deployment support.",
    image: image11,
    imageAlt: "Digitalization and edge computing systems",
    partners: [productPartners.penguin, productPartners.cryotos],
  },
  {
    id: "digital-twin",
    title: "Digital Twin Services",
    short: "Live asset simulation",
    summary:
      "Our digital twin services help clients model assets and processes so they can monitor current conditions, anticipate issues, and optimize performance.",
    details:
      "The solution supports asset performance visualization, scenario testing, and predictive planning for maintenance and optimization decisions. It delivers deeper operational visibility and reduces uncertainty around asset behavior while we support clients with twin strategy, data mapping, configuration guidance, and operational interpretation.",
    image: image12,
    imageAlt: "Digital twin monitoring and simulation",
    partners: [productPartners.beasy, productPartners.cenosco],
    reverse: true,
  },
  {
    id: "electrical-safety",
    title: "Electrical Equipment and Safety",
    short: "Certified protection systems",
    summary:
      "We deliver electrical and safety-focused equipment that supports compliance, operational protection, and safer working conditions in critical environments.",
    details:
      "This product category is ideal for hazardous-area installations, asset protection, and operations that require strong safety assurance. It improves compliance readiness and protects both people and equipment, with support covering product selection, application guidance, documentation, and technical assistance through deployment.",
    image: image13,
    imageAlt: "Electrical safety equipment and monitoring",
    partners: [productPartners.exertherm, productPartners.varixx],
  },
  {
    id: "flexible-tank",
    title: "Flexible Tank",
    short: "Rapid storage deployment",
    summary:
      "Our flexible tank solutions support temporary or mobile storage needs where speed, durability, and practical deployment matter.",
    details:
      "They are useful for fuel, water, and process fluid containment, especially in remote or fast-changing locations where rapid setup is important. The value comes from quick operational readiness, site adaptability, and less dependence on rigid storage infrastructure, supported by capacity planning, handling guidance, and field deployment assistance.",
    image: image14,
    imageAlt: "Flexible tank and fluid storage system",
    partners: [productPartners.blt],
    reverse: true,
  },
  {
    id: "flowmeters-sensors",
    title: "Flowmeters and Sensors",
    short: "Precision measurement tools",
    summary:
      "We supply flowmeters and sensors that help clients monitor process conditions accurately and maintain confidence in field measurements.",
    details:
      "These solutions support process control, instrumentation programs, and operating environments that need real-time measurement feedback. They improve measurement confidence and process visibility while helping teams run safer and more efficient operations through instrument selection, technical interpretation, and deployment guidance.",
    image: image14,
    imageAlt: "Flowmeters and industrial sensors",
    partners: [productPartners.spectraflow, productPartners.evident],
  },
  {
    id: "ndt-laser",
    title: "NDT Products Innovation and Laser Scanning",
    short: "Inspection and 3D capture",
    summary:
      "We provide NDT innovation and laser scanning solutions that help clients inspect assets, verify conditions, and build stronger technical understanding.",
    details:
      "The offering is designed for integrity assessment, site capture, dimensional verification, and inspection-driven documentation. It gives teams better insight into asset condition and more accurate field verification, with support for technology selection, inspection workflow planning, and field application guidance.",
    image: aboutImage2,
    imageAlt: "NDT technology and laser scanning support",
    partners: [productPartners.evident, productPartners.beasy],
    reverse: true,
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy",
    short: "Hybrid energy systems",
    summary:
      "Our renewable energy offerings help clients explore and implement practical energy alternatives that strengthen resilience and long-term efficiency.",
    details:
      "They fit hybrid power systems, decentralized energy use cases, and sustainability initiatives where cleaner and more reliable energy matters. This section supports energy resilience, operational efficiency, and long-term sustainability goals through fit assessment, project planning, and implementation guidance.",
    image: image16,
    imageAlt: "Renewable energy technologies",
    partners: [productPartners.dahaiSolar, productPartners.varixx],
  },
  {
    id: "safety-hse",
    title: "Safety and HSE",
    short: "Protection and compliance tools",
    summary:
      "We provide safety and HSE products selected to help clients maintain safer worksites, stronger compliance practices, and more confident field operations.",
    details:
      "This category supports worksite safety programs, compliance-oriented environments, and field operations that rely on protective systems and tools. It strengthens safety culture and operational risk awareness through requirement-based selection, deployment planning, usage guidance, and continued implementation support.",
    image: image10,
    imageAlt: "Safety and HSE operational equipment",
    partners: [productPartners.cenosco, productPartners.cryotos],
    reverse: true,
  },
  {
    id: "forecourt-automation",
    title: "Software and Hardware Forecourt Automation",
    short: "Automated forecourt control",
    summary:
      "Our forecourt automation solutions help clients modernize monitoring, transaction visibility, and operational control for service environments.",
    details:
      "They are designed for fuel stations and distributed forecourt assets where inventory tracking, transaction accuracy, and control across service points are essential. The result is stronger operational visibility and workflow efficiency, with support for planning, hardware and software integration, and rollout coordination.",
    image: image11,
    imageAlt: "Forecourt automation software and hardware",
    partners: [productPartners.cryotos, productPartners.penguin],
  },
  {
    id: "test-equipment",
    title: "Test Equipment",
    short: "Calibration and verification tools",
    summary:
      "We supply test equipment that supports technicians and engineers in verifying performance, diagnosing issues, and maintaining confidence in system behavior.",
    details:
      "These tools are suited for calibration, troubleshooting, field verification, and maintenance workflows that demand dependable technical insight. They improve diagnostic confidence and quality assurance capability through careful equipment selection, application guidance, and support for adoption into maintenance operations.",
    image: image13,
    imageAlt: "Professional test equipment and tools",
    partners: [productPartners.varixx, productPartners.evident],
    reverse: true,
  },
  {
    id: "thermal-monitoring",
    title: "Thermal Monitoring",
    short: "Condition visibility solutions",
    summary:
      "Our thermal monitoring solutions help clients see temperature-related issues sooner, support preventive action, and improve equipment oversight.",
    details:
      "They are valuable for anomaly detection, condition monitoring, and maintenance diagnostics around critical assets. The benefit is earlier visibility into developing issues and better-informed maintenance planning, supported by solution selection, workflow guidance, and help with operational interpretation.",
    image: image12,
    imageAlt: "Thermal monitoring and condition assessment",
    partners: [productPartners.pipecare, productPartners.exertherm],
  },
  {
    id: "valves-flanges-pumps",
    title: "Valves, Flanges and Pumps",
    short: "Industrial flow control",
    summary:
      "We provide valves, flanges, and pumps that support fluid handling systems where durability, fit, and dependable operation are essential.",
    details:
      "This product group serves process utilities, industrial transfer systems, and operating environments that require robust flow components. It improves project fit and continuity across demanding operations through component selection, specification support, technical guidance, and deployment-stage assistance.",
    image: aboutImage2,
    imageAlt: "Valves, flanges, and pumps for industrial systems",
    partners: [productPartners.smith, productPartners.pipecare],
    reverse: true,
  },
] satisfies ProductSectionLayoutProps[];
