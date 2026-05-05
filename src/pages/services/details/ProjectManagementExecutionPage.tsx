import { CheckCircle2, ClipboardList, Target } from "@/lib/icons";
import ServiceDetailLayout from "@/pages/services/ServiceDetailLayout";
import executionImage from "@/assets/home_assets/image14.jpg";

const ProjectManagementExecutionPage = () => (
  <ServiceDetailLayout
    eyebrow='End-to-End Delivery'
    title='Project Management and Execution'
    summary='Complexity of processes connected with project execution and variety of the activities connected: tasks and resources planning, co-ordination (client-authorities-vendors), scheduling and cost control, progress control with them.'
    intro='As a result, GEC has a team of engineers and technicians established mainly from own personal sources, which can solve various professional level problems connected with planning, design, procurement and construction.'
    heroImage={executionImage}
    heroImageAlt='Project management and execution planning'
    imageSectionTitle='Project delivery support from planning through closeout'
    imageSectionCopy='We organize project management activities around tasks, resources, coordination, schedule, cost, quality, progress reporting, and client communication.'
    featureCards={[
      {
        icon: ClipboardList,
        title: "Scope",
        copy: "Structured around milestones, ownership, and workstream coordination.",
        bullets: ["Task planning", "Resource planning", "Client-authority-vendor coordination"],
      },
      {
        icon: Target,
        title: "Outcomes",
        copy: "Focused on predictability, control, and delivery accountability.",
        bullets: ["Schedule control", "Cost control", "Progress control"],
      },
      {
        icon: CheckCircle2,
        title: "Delivery",
        copy: "Coordinated from kickoff through closeout and handover.",
        bullets: ["Monthly reporting", "Quality control", "Project meetings"],
      },
    ]}
    capabilities={[
      "Tasks and resources planning",
      "Co-ordination (client-authorities-vendors)",
      "Scheduling and cost control",
      "Progress control",
    ]}
    outcomes={[
      "The project management covers following activities: Progress reporting, Quality control.",
      "The project team is led by project manager (PM) who is responsible for the entire work regarding quality, economy and agreed time schedule.",
      "Submission of a monthly progress report.",
      "Modifications of the project concept made during the progress of the design phase.",
      "Organizes common project meetings with the Client.",
      "Reach conformity between requirements on technical solution level and investment means.",
    ]}
    process={["Progress reporting", "Quality control"]}
    sections={[
      {
        title: "Project Management Services",
        items: [
          "Project Planning & Scheduling",
          "Cost estimates",
          "SOW / ITT activities support",
          "Independent review of detailed engineering design works",
          "Setting up project organization and management structures",
          "Setting up project controls and procedures",
          "Pre-commissioning & Commissioning support",
          "Contracts Administration",
          "Cost Monitoring and cost control",
          "Owners Engineer",
        ],
      },
    ]}
  />
);

export default ProjectManagementExecutionPage;
