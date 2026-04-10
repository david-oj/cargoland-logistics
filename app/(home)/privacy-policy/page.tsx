import TermsAndPrivacyContents from "@/components/termsAndPrivacy/TermsAndPrivacyContents";
import TermsAndPrivacyHero from "@/components/termsAndPrivacy/TermsAndPrivacyHero";

export default function PrivacyPolicyPage() {
  return (
    <>
      <TermsAndPrivacyHero
        title="Privacy Policy"
        description="Learn how we collect, use, and protect your personal information while ensuring privacy, security, and transparency across all services."
      />
      <TermsAndPrivacyContents />
    </>
  );
}
