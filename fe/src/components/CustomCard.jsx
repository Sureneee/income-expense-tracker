
import { formatCurrency } from "@/lib/utils";
import { ArrowCircleUp } from "@/components/icon/ArrowCircleUp";
import { Leading } from "@/components/icon/Leading";

export const CustomCard = ({
  title = "Your Income",
  balance = 1200000,
  percent = 32,
  color = "bg-[#84CC16]",
}) => {
  const isPositive = percent > 0;
  const IconComponent = isPositive ? Leading : ArrowCircleUp;

  return (
    <div className="max-w-[384px] min-w-[384px] rounded-xl bg-white text-[#0F172A]">
      <div className="flex items-center gap-2 px-6 py-4 border-b border-[#E2E8F0]">
        <div className={`w-2 h-2 rounded-full ${color}`} />
        <h6 className="font-semibold leading-6">{title}</h6>
      </div>
      <div className="flex flex-col gap-4 p-6 pt-5">
        <div className="flex flex-col gap-1">
          {/* <h1 className="text-[36px] font-semibold leading-10">{formatCurrency(balance)}₮</h1> */}
          <p className="text-[#64748B] text-[18px] leading-7">
            Your Income Amount
          </p>
        </div>
        <div className="flex items-center gap-2">
          <IconComponent />
          <p className="text-[18px] leading-7">{percent}% from last month</p>
        </div>
      </div>
    </div>
  );
};
