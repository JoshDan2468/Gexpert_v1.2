import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PolicyBreadcrumb from "@/pages/guiding-policies/PolicyBreadcrumb";
import PolicyContentSection from "@/pages/guiding-policies/PolicyContentSection";
import PolicyFooter from "@/pages/guiding-policies/PolicyFooter";
import PolicyHero from "@/pages/guiding-policies/PolicyHero";
import PolicyNotFound from "@/pages/guiding-policies/PolicyNotFound";
import {
  policyDetailMap,
  policyLinks,
} from "@/pages/guiding-policies/policyData";

const PolicyDetail = () => {
  const { policySlug } = useParams<{ policySlug: string }>();
  const initialPolicySlug = policySlug ?? "quality-policy";
  const [activePolicySlug, setActivePolicySlug] = useState(initialPolicySlug);
  const policy = policyDetailMap[activePolicySlug] ?? null;

  useEffect(() => {
    setActivePolicySlug(initialPolicySlug);
  }, [initialPolicySlug]);

  if (!policy) {
    return <PolicyNotFound />;
  }

  return (
    <main className='overflow-x-hidden bg-[#eef2f5]'>
      <Navbar />
      <PolicyHero policy={policy} />
      <PolicyBreadcrumb policy={policy} />
      <PolicyContentSection
        activePolicySlug={activePolicySlug}
        onPolicyChange={setActivePolicySlug}
        policy={policy}
        policyLinks={policyLinks}
      />
      <PolicyFooter />
    </main>
  );
};

export default PolicyDetail;
