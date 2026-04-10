import TermsAndPrivacyContents from "@/components/termsAndPrivacy/TermsAndPrivacyContents";
import TermsAndPrivacyHero from "@/components/termsAndPrivacy/TermsAndPrivacyHero";

export default function TermsAndConditionsPage() {
  return (
    <>
      <TermsAndPrivacyHero
        title="Term & Conditions"
        description="Review our terms and conditions to understand your rights, responsibilities, and guidelines when using our shipping services."
      />
      <TermsAndPrivacyContents />
    </>
  );
}
