import { LeftArrow } from "@/components/icon/LeftArrow";
import { RightArrow } from "@/components/icon/RightArrow";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select';
  import { Checkbox } from "@/components/ui/checkbox";
  import { HomeIcon } from "./icon/HomeIcon";


  const dataRecords = [
    {
      icon: <HomeIcon />,
      name: "Lending & Renting",
      time: "3 hours ago",
      amount: "1000",
      currency: "₮",
    },
    {
      icon: <HomeIcon />,
      name: "Lending & Renting",
      time: "3 hours ago",
      amount: "1000",
      currency: "₮",
    },
    {
      icon: <HomeIcon />,
      name: "Lending & Renting",
      time: "3 hours ago",
      amount: "1000",
      currency: "₮",
    },
    {
      icon: <HomeIcon />,
      name: "Lending & Renting",
      time: "3 hours ago",
      amount: "1000",
      currency: "₮",
    },
    {
      icon: <HomeIcon />,
      name: "Lending & Renting",
      time: "3 hours ago",
      amount: "1000",
      currency: "₮",
    },
  ];


const Records2 = () => {
    return (
       <div className="ml-8 flex flex-col gap-4 w-full">
            <div className="flex w-full items-start justify-between">
                    <div className="flex items-center gap-4">
                        <button><LeftArrow/></button>
                        <p className="text-4 font-normal">Last 30 Days</p>
                        <button><RightArrow/></button>
                    </div>
                    <Select>
                        <SelectTrigger className="w-[180px] h-12 border border-[#D1D5DB] text-[16px] font-semibold">
                        <SelectValue placeholder="Newest first" />
                        </SelectTrigger>
                        <SelectContent className="text-[16px] font-semibold">
                        <SelectItem value="Newest first">Newest first</SelectItem>
                        <SelectItem value="Oldest">Oldest</SelectItem>
                        </SelectContent>
                    </Select>
                
         </div> 
            <div className="w-full rounded-[12px] border justify-between py-[12px] px-[24px]  bg-white flex">
                <div className="flex items-center gap-4 ">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-4 font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Select all 
                    </label>
                </div>
                <p className="text-[#94A3B8] text-4 font-semibold">-35,500₮</p>

            </div>
            <div className=" flex flex-col gap-3 mt-6">
            <h1 className="text-4 font-semibold">Today</h1>
             {dataRecords.map((el, i) => {
                return (
              <div
                className="flex flex-col rounded-[12px]  bg-white items-start w-full self-stretch border"
                key={i}>
                    <div className="flex items-center self-stretch justify-between h-[64px] p-5">
                    <div className="flex items-center gap-4 ">
                    <Checkbox/>
                    <div className="bg-[#0166FF] w-10 h-10 rounded-full flex items-center justify-center">
                      {el.icon}
                      </div>
                    <div className="flex flex-col items-start justify-center">
                      <p>{el.name}</p>
                      <p className="text-xs text-[#6B7280]">{el.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#84CC16]">
                    <p>-</p>
                    <p>{el.amount}</p>
                    <p>{el.currency}</p>
                  </div>
                </div>
              </div>
            );
          })}
            
          </div>
       
        </div>     
    )}

    export default Records2;