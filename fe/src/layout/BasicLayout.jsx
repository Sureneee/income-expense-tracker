import { Navbar } from "@/components";

export const BasicLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center bg-[#F3F4F6]">
      <div className="w-full max-w-[1200px] mb-8">
        <Navbar />
      </div>
      <div className="w-full max-w-[1200px]">
        {children}
      </div>
    </div>
  );
};