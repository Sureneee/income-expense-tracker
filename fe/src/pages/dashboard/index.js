import { LogoVector } from "@/components/icon/LogoVector";


const Dashboard = () => {
    return (
        <div>
          <div className="flex w-[1200px] h-[40px] py-4 px-[120px] justify-between items-center">
            <div className="flex items-center gap-[24px]">
              <LogoVector/>
              <h1 className="text-[16px] font-semibold">Dashboard</h1>
              <p className="text-[16px] font-medium">Records</p>
            </div>
            <div>
              hello
            </div>
          </div>
        </div>
    );
};

export default Dashboard;