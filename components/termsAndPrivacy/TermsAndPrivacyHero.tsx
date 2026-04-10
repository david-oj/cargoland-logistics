import React from "react";

interface TermsAndPrivacyHeroProps {
  title: React.ReactNode | string;
  description: React.ReactNode | string;
}

const TermsAndPrivacyHero = ({
  title,
  description,
}: TermsAndPrivacyHeroProps) => {
  return (
    <section className=" pt-[120px] pb-[58px] bg-primary-light ">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-[28px] md:text-[32px] lg:text-[60px] leading-8.5 md:leading-10 lg:leading-18 font-bold text-black ">
          {title}
        </h1>
        <p className="mt-2 text-sm md:text-base lg:text-lg lg:leading-7 max-w-[400px] sm:max-w-[450px] md:max-w-[613px] text-center">
          {description}
        </p>
      </div>
    </section>
  );
};

export default TermsAndPrivacyHero;
