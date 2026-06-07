import { CheckCircle2, ClipboardList, Target } from "@/lib/icons";
import heroImage from "@/assets/home_assets/build.jpg";

export const researchDevelopmentData = {
  eyebrow: 'Construction Support',
  title: 'Engineering Research & Development',
  summary: 'Construction activities are driven by client demands and the process includes cost estimation, schedule, resources, quality, communication risk, construction planning, field procurement, equipment installation, commissioning, start-up support, and training.',
  intro: 'Construction activities are driven by client demands and process includes: costs estimation, time schedule, resources quality, communication risk, construction planning, field procurement, equipment installation, commissioning, start-up support, and training.',
  heroImage: heroImage,
  heroImageAlt: 'Engineering research, design, and construction planning',
  imageSectionTitle: 'Construction-focused engineering research and development support',
  imageSectionCopy: 'We support construction planning and technical delivery by organizing project needs around cost, schedule, resources, quality, risk, and readiness.',
  featureCards: [
    {
      icon: ClipboardList,
      title: "Planning",
      copy: "Covers cost, schedule, resources, quality, communication, and risk planning.",
      bullets: ["Costs estimation", "Time schedule", "Resources quality"],
    },
    {
      icon: Target,
      title: "Execution",
      copy: "Supports procurement, construction, installation, commissioning, and start-up.",
      bullets: ["Field procurement", "Equipment installation", "Commissioning"],
    },
    {
      icon: CheckCircle2,
      title: "Protection",
      copy: "Includes environmental, workplace safety, health, and fire protection requirements.",
      bullets: ["Environmental protection", "Safety at work", "Fire protection"],
    },
  ],
  capabilities: [
    "Costs estimation",
    "Time schedule",
    "Resources Quality",
    "Communication Risk",
    "Construction planning",
    "Field procurement",
    "Equipment installation",
    "Commissioning",
    "Start-up support",
    "Training",
  ],
  outcomes: [
    "The detailed design is the last step of the design documentation elaborated in detail which are necessary for procurement and construction.",
    "States the requirements on environmental protection, safety at work, health protection and fire protection.",
  ],
  process: [],
};
