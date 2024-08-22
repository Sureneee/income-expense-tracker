import { Cards } from "@/components/Cards";
import { Charts } from "@/components/Charts";
import { AddIcon } from "@/components/icon/AddIcon";
import { LogoVector } from "@/components/icon/LogoVector";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AvatarImage from "@/assets/Avatar.png";
import { Records } from "@/components/Records";
import BarChart2 from "@/components/BarChart";
import { AddRecord } from "@/components/AddRecord";
import { DialogRecord } from "@/components/Dialog";


const handlerClick = () => {
    router.push('/AddRecord');
  }


const Dashboard = () => {
    return (
    
        <div className="bg-zinc-100 w-full">
{/* Navbar */}
          <div className="flex  py-4 px-[120px] justify-between bg-white items-center">
            <div className="flex items-center gap-[24px]">
              <LogoVector/>
              <h1 className="text-[16px] font-semibold">Dashboard</h1>
              <p className="text-[16px] font-medium">Records</p>
            </div>
            <div className="flex gap-[24px] h-10">
              <DialogRecord/>
              {/* <Button className="w-full rounded-2xl bg-[#0166FF] text-[16px] font-normal " onclick = {handlerClick}> <AddIcon/>  Record</Button> */}
              <Image src={AvatarImage} width={40} height={40} alt="Avatar Image"/>             
            </div>
          </div>
          <div className="max-w-[1200px] flex flex-col">
              <Cards/>
              {/* <Charts/> */}
              <BarChart2 />
              <Records />
          </div>

              </div>


             
           
    );
};

export default Dashboard;