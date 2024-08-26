import { LogoIcon } from "@/components/icon/LogoIcon";

export const Header = ({ title }) => (
  <div className="flex items-center justify-center p-[5.405px] gap-[9.459px]">
    <LogoIcon />
    <p className="font-semibold text-[32px] leading-7">{title}</p>
  </div>
);