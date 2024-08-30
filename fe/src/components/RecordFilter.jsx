import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input} from "@/components/ui/input";
import { RadioButtons } from "@/components/RadioButtons";
import { LeadingIcon } from "@/components/icon/LeadingIcon";
import { ViewIcon } from "@/components/icon/ViewIcon";
import { Slider } from "@/components/ui/slider";
import { useRouter } from "next/router";
import { DialogRecord } from "./Dialog";
import { useContext } from "react";
import { DialogContext } from "@/pages/_app";


const dataCategory = [
    {
      icon: <ViewIcon />,
      category: "Food & Drinks"
    },
    {
        icon: <ViewIcon />,
        category: "Shopping"
    },
    {
        icon: <ViewIcon />,
        category: "Housing"
    },
    {
        icon: <ViewIcon />,
        category: "Transportation"
    },
    {
        icon: <ViewIcon />,
        category: "Vehicle"
    },
    {
        icon: <ViewIcon />,
        category: "Vehicle & Entertainment"
    },
    {
        icon: <ViewIcon />,
        category: "Communication, PC"
    },
    {
        icon: <ViewIcon />,
        category: "Financial Expenses"
    },
    {
        icon: <ViewIcon />,
        category: "Investments"
    },
    {
        icon: <ViewIcon />,
        category: "Income"
    },
    {
        icon: <ViewIcon />,
        category: "Others"
    },

]



const RecordFilter = () => {

    const { btnRef, CategoryBtnRef} = useContext(DialogContext);

    const handleClick = () => {
        
        btnRef.current.click();
    }


    const categoryHandleClick = () => {
        console.log(CategoryBtnRef,'ref')
    // CategoryBtnRef.current.click();
}
    return (
        <div>
            <div className="w-[282px] py-6 px-5 gap-6 flex flex-col bg-white border rounded-[12px]">
                <div className="flex flex-col gap-6">
                    <h1 className="text-[24px] font-semibold leading-[32px]"> Records</h1>
                    {/* <DialogRecord MenuButton={true}/> */}
                    <Button className="rounded-[20px] h-[32px] bg-[#0166FF] text-[16px] font-normal" onClick={handleClick}><Plus className="mr-[6.5px]"/>Add</Button>
                    
                </div>
                <Input placeholder = "Search"  className="w-full text-[#D1D5DB] bg-slate-100 border-slate-300"/>
                <div className="flex flex-col gap-[16px]">
                    <h1 className="text-4 font-semibold">Types</h1>
                    <RadioButtons/>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <h1 className="text-4 font-semibold">Category</h1>
                    <div className="flex flex-col gap-4">
                        {dataCategory.map((el, i) => {
                            return (
                                <div className="flex items-center justify-between" key={i}>
                                    <div className="flex  gap-2 text-4 font-normal items-center">
                                        <button>{el.icon}</button>
                                        <button> {el.category}</button>
                                    </div>
                                    <div>
                                    <LeadingIcon/> </div>
                                </div>
                            )
                        })}
                        
                        <button className="flex  gap-2 text-4 font-normal items-center"><Plus className="mr-[6.5px]" onClick={categoryHandleClick} />Add Category</button>
                        
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <h1 className="text-4 font-semibold">Amount Range</h1>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <Input placeholder = "0"  className="w-[114px] h-12 text-black bg-slate-100 border-slate-300"/>
                                <Input placeholder = "1000"  className="w-[114px] h-12 text-black bg-slate-100 border-slate-300"/>
                            </div>
                            <Slider defaultValue={[0]} max={1000} step={1} />
                        </div>


                    </div>

                    
                </div>
            </div>
            
        </div>
    )
} 

export default RecordFilter;