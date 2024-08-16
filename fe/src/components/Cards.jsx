import { UpIcon } from "@/components/icon/UpIcon";
import Image from "next/image";
import CardImage from "@/assets/Card.png";
import { DownIcon } from "./icon/DownIcon";

const styles = {
    Card: 'w-[384px] h-[216px] rounded-[12px] bg-white'
    
  };

export const Cards = () => {
    return (
        <div className="flex ">
        <div className="flex mt-8 gap-6">
          <Image src={CardImage} width={384} height={216} alt="Card"/>  

          <div className={styles.Card}>
            <div className="flex items-center gap-2 py-4 px-6 py-4 px-6 border-b border-red">
              <div className="w-2 h-2 bg-[#84CC16] rounded-full"></div>
              <p className="text-4 font-semibold">Your Income</p>
            </div>
            <div className="flex flex-col py-[20px] px-6 gap-4">
              <div>
                <div className="flex text-[36px] font-semibold gap-1">
                  <h1>1,200,000 </h1>
                  <h1>₮</h1>
                </div>
                <p className="text-[18px] font-normal text-slate-500">Your Income Amount</p>
              </div>
              <div className="flex">
                <UpIcon/>
                <p>32% from last month</p>
              </div>
            </div>
          </div>

          <div className={styles.Card}>
            <div className="flex items-center gap-2 py-4 px-6 py-4 px-6 border-b border-red">
              <div className="w-2 h-2 bg-[#0166FF] rounded-full"></div>
              <p className="text-4 font-semibold">Total Expenses</p>
            </div>
            <div className="flex flex-col py-[20px] px-6 gap-4">
              <div>
                <div className="flex text-[36px] font-semibold gap-1">
                  <h1>-1,200,000 </h1>
                  <h1>₮</h1>
                </div>
                <p className="text-[18px] font-normal text-slate-500">Your Income Amount</p>
              </div>
              <div className="flex">
                <DownIcon/>
                <p>32% from last month</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  };