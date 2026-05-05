import beasyLogo from "@/assets/partners/beasy.png";
import bltLogo from "@/assets/partners/blt.png";
import cenoscoLogo from "@/assets/partners/cenosco.png";
import cryotosLogo from "@/assets/partners/cryotos.png";
import dahaiSolarLogo from "@/assets/partners/solar.png";
import evidentLogo from "@/assets/partners/evident.png";
import exerthermLogo from "@/assets/partners/exertherm.png";
import penguinLogo from "@/assets/partners/penguin solution.png";
import pipecareLogo from "@/assets/partners/pipecare.png";
import smithLogo from "@/assets/partners/smith.png";
import spectraflowLogo from "@/assets/partners/spectraflow.png";
import varixxLogo from "@/assets/partners/varixx.png";

export type ProductPartner = {
  name: string;
  logo: string;
  website: string;
  focus: string;
};

export const productPartners = {
  penguin: {
    name: "Penguin Solutions",
    logo: penguinLogo,
    website: "https://www.penguinsolutions.com/en-us?lang=en",
    focus: "AI, high-performance computing, and edge infrastructure",
  },
  beasy: {
    name: "BEASY",
    logo: beasyLogo,
    website: "https://www.beasy.com/",
    focus: "Digital twin, corrosion, and engineering simulation software",
  },
  exertherm: {
    name: "Exertherm",
    logo: exerthermLogo,
    website: "https://www.exertherm.com/",
    focus: "Continuous thermal monitoring for electrical infrastructure",
  },
  blt: {
    name: "BLT Flexitank",
    logo: bltLogo,
    website: "https://www.flexi-tank.com/",
    focus: "Flexible tank and bulk liquid transportation systems",
  },
  spectraflow: {
    name: "SpectraFlow",
    logo: spectraflowLogo,
    website: "https://www.spectraflow-analytics.com/",
    focus: "Online analyzers, flow measurement, and process visibility",
  },
  evident: {
    name: "Evident",
    logo: evidentLogo,
    website: "https://evidentscientific.com/en/",
    focus: "Inspection, imaging, NDT, and industrial measurement",
  },
  dahaiSolar: {
    name: "Dahai Solar",
    logo: dahaiSolarLogo,
    website: "https://dahaisolar.com/",
    focus: "Solar energy technology and renewable power systems",
  },
  cenosco: {
    name: "Cenosco",
    logo: cenoscoLogo,
    website: "https://cenosco.com/",
    focus: "Asset integrity, reliability, and functional safety software",
  },
  cryotos: {
    name: "Cryotos",
    logo: cryotosLogo,
    website: "https://www.cryotos.com/",
    focus: "CMMS, maintenance workflows, and operational automation",
  },
  varixx: {
    name: "Varixx",
    logo: varixxLogo,
    website: "https://www.varixx.com/",
    focus: "Power electronics, converters, and industrial energy systems",
  },
  pipecare: {
    name: "PIPECARE Group",
    logo: pipecareLogo,
    website: "https://www.pipecaregroup.com/",
    focus: "Pipeline inspection and integrity management",
  },
  smith: {
    name: "Smith Valves",
    logo: smithLogo,
    website: "https://smithvalves.com/",
    focus: "Industrial valves, fittings, flanges, and flow control",
  },
} satisfies Record<string, ProductPartner>;
