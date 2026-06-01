import { lazy, type ComponentType } from "react";

const Home = lazy(() => import("@/pages/home/Home"));
const About = lazy(() => import("@/pages/about/About"));
const Services = lazy(() => import("@/pages/services/Services"));
const EngineeringServicesPage = lazy(
  () => import("@/pages/services/details/EngineeringServicesPage"),
);
const BusinessProcessesPage = lazy(
  () => import("@/pages/services/details/BusinessProcessesPage"),
);
const ResearchDevelopmentPage = lazy(
  () => import("@/pages/services/details/ResearchDevelopmentPage"),
);
const ResearchMarketIntelligencePage = lazy(
  () => import("@/pages/services/details/ResearchMarketIntelligencePage"),
);
const OilGasManagementPage = lazy(
  () => import("@/pages/services/details/OilGasManagementPage"),
);
const ProjectManagementExecutionPage = lazy(
  () => import("@/pages/services/details/ProjectManagementExecutionPage"),
);
const Products = lazy(() => import("@/pages/products/Products"));
const PolicyDetail = lazy(
  () => import("@/pages/guiding-policies/PolicyDetail"),
);
const Articles = lazy(() => import("@/pages/articles/Articles"));
const ArticleDetail = lazy(() => import("@/pages/articles/ArticleDetail"));
const Partners = lazy(() => import("@/pages/partners/Partners"));
const Contact = lazy(() => import("@/pages/contact/Contact"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export interface AppRoute {
  path: string;
  component: ComponentType;
  index?: boolean;
}

export const routes: AppRoute[] = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/services", component: Services },
  {
    path: "/services/engineering-services",
    component: EngineeringServicesPage,
  },
  {
    path: "/services/business-processes",
    component: BusinessProcessesPage,
  },
  {
    path: "/services/research-development",
    component: ResearchDevelopmentPage,
  },
  {
    path: "/services/research-market-intelligence",
    component: ResearchMarketIntelligencePage,
  },
  {
    path: "/services/oil-gas-management",
    component: OilGasManagementPage,
  },
  {
    path: "/services/project-management-execution",
    component: ProjectManagementExecutionPage,
  },
  { path: "/products", component: Products },
  { path: "/products/digitalization-edge", component: Products },
  { path: "/products/digital-twin", component: Products },
  { path: "/products/electrical-safety", component: Products },
  { path: "/products/flexible-tank", component: Products },
  { path: "/products/flowmeters-sensors", component: Products },
  { path: "/products/ndt-laser", component: Products },
  { path: "/products/renewable-energy", component: Products },
  { path: "/products/safety-hse", component: Products },
  { path: "/products/forecourt-automation", component: Products },
  { path: "/products/test-equipment", component: Products },
  { path: "/products/thermal-monitoring", component: Products },
  { path: "/products/valves-flanges-pumps", component: Products },
  { path: "/guiding-policies", component: PolicyDetail },
  { path: "/guiding-policies/:policySlug", component: PolicyDetail },
  { path: "/articles", component: Articles },
  { path: "/articles/:articleSlug", component: ArticleDetail },
  { path: "/partners", component: Partners },
  { path: "/contact", component: Contact },
  { path: "*", component: NotFound },
];
