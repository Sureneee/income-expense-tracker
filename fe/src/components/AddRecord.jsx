import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select';
import { DatePicker } from "./DatePicker";

const AddRecord = () => {
    return (
        <div className="w-[792px] h-[512px] rounded-[12px] top-[256px] left-[324px]">
            <div className="flex justify-between py-[20px] px-[24px] border-b border-slate-200">
                <h1 className="font-semibold text-[20px] leading-[28px]">Add Record</h1>
                <button className="font-bold w-[24px] h-[24px]">x</button>
            </div>
            <div>
                <div className="w-[396px] py-[20px] px-[24px] flex flex-col gap-[20px]">
                    <div className="flex gap-1">
                        <Button className="bg-[#0166FF] w-[172px] h-[40px]rounded-3xl  text-white font-normal text-[16px]">Expense</Button>
                        <Button className="bg-slate-200 w-[172px] h-[40px]rounded-3xl  text-black font-normal text-[16px]">Income</Button>
                    </div>
                
                    <div className="flex flex-col gap-[24px]">
                        <div>
                            <p className="text-[16px]">Amount</p>
                            <Input placeholder = "₮ 000.00"  className="w-full text-[#D1D5DB] bg-slate-100 border-slate-300"/>
                        </div>
                        <div>
                        <p className="text-[16px]">Category</p>
                            <Select>
                                <SelectTrigger className="w-full h-[48px] p-4 text-[16px] border-slate-300 text-4 font-normal bg-slate-100 text-slate-400">
                                <SelectValue placeholder="Find or choose category" />
                                </SelectTrigger>
                                <SelectContent className="text-[16px] font-normal">
                                <SelectItem value="Food">Food</SelectItem>
                                <SelectItem value="Bill">Bill</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <DatePicker/>
                            
                            
                        </div>
                    </div>
                </div>  

            </div>
        </div>
    );
};

export default AddRecord;