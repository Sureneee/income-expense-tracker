import { LogoIcon } from "@/components/icon/LogoIcon";
import { Currency } from "lucide-react";

import { useState } from "react";


const stepper = ["1", "2", "3"];

export const Stepper = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = () => {
        setCurrentIndex(currentIndex + 1)
    }


    return (
        <div className="flex flex-col gap-[4px] items-center">
            <LogoIcon/>
            <div className="flex items-center gap-[68px]">
                {stepper.map((step,index) => (
                    <div className=  {`${currentIndex >= index ? "text-white text-center bg-[#0166FF] w-[20px] font-normal text-[14px] items-center rounded-xl" : "text-black text-center w-[20px] font-normal text-[14px] bg-[#E5E7EB] items-center rounded-xl"}`} key={index}>{step}</div>))}
                  
                </div>
            <div className="flex items-center gap-10 text-[14px] font-normal leading-20px">
                <p>Currency</p>
                <p>Balance</p>
                <p>Finish</p>
            </div>
                {/* {currentIndex} === 0 &&  */}

            </div>
    );
};

