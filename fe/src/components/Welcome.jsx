export const WelcomeMessage = ({ title, subTitle }) => (
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-[#0F172A] text-[24px] leading-8 font-semibold">
        {title}
      </h3>
      <p className="text-[#334155] leading-6">{subTitle}</p>
    </div>
  );