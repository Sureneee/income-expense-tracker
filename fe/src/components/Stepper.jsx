import { LogoIcon } from "@/components/icon/LogoIcon";
import { useState } from "react";


const stepper = ["1", "2", "3"];

export const Stepper = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <div className="flex flex-col gap-[48px] items-center">
            <LogoIcon/>
            <div className="flex items-center gap-10">
                {stepper.map((step,index) => (
                    <div className={`${currentIndex >= index ? "text-white bg-[#0166FF] w-[20px] font-normal text-[14px] items-center rounded-xl" : "text-black w-[20px] font-normal text-[14px] bg-[#E5E7EB] items-center rounded-xl"}`} key={index}>{step}</div>))}
                </div>

            </div>
    );
};
