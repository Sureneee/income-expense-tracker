import { Cards } from "@/components/Cards";
import { Charts } from "@/components/Charts";
import { AddIcon } from "@/components/icon/AddIcon";
import { LogoVector } from "@/components/icon/LogoVector";
import { Button } from "@/components/ui/button";
import Image from "next/image";




const Dashboard = () => {
    return (
    
        <div className="bg-zinc-100">
{/* Navbar */}
          <div className="flex w-[1200px] py-4 px-[120px] justify-between bg-white items-center">
            <div className="flex items-center gap-[24px]">
              <LogoVector/>
              <h1 className="text-[16px] font-semibold">Dashboard</h1>
              <p className="text-[16px] font-medium">Records</p>
            </div>
            <div className="flex gap-[24px] h-10">
              <Button className="w-full rounded-2xl bg-[#0166FF] text-[16px] font-normal "> <AddIcon/>  Record</Button>
              <Image src="/assets/Avatar.png" width={40} height={40} alt="Avatar Image"/>             
            </div>
          </div>
          <Cards/>
          <Charts/>
           

              </div>


             
           
    );
};

export default Dashboard;