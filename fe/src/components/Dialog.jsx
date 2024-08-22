import { AddIcon } from "@/components/icon/AddIcon";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DatePicker } from "./DatePicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogRecord() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"><AddIcon/>  Record</Button>
      </DialogTrigger>
      <DialogContent className="w-[792px]">
        <DialogHeader className="border-b py-5 px-6 border-slate-400">
          <DialogTitle>Add Record</DialogTitle>
        </DialogHeader>
                <div className="flex ">
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
                                <SelectValue placeholder="Choose" />
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
                            <DialogFooter>
                                <Button type="submit" className = " color-[#0166FF]text-white rounded-[20px] w-[348px] h-10">Add Record</Button>
                            </DialogFooter>
                    </div>
                    </div>
                    <div className=" w-[396px] py-[20px] px-[24px] flex flex-col gap-[20px]">
                        <div>
                            <p className="text-[16px]">Payee</p>
                            <Select>
                            <SelectTrigger className="w-full h-[48px] p-4 text-[16px] border-slate-300 text-4 font-normal bg-slate-100 text-slate-400">
                            <SelectValue placeholder="Write here" />
                            </SelectTrigger>
                            <SelectContent className="text-[16px] font-normal">
                            <SelectItem value="Soyoloo">Soyoloo</SelectItem>
                            <SelectItem value="Surenee">Surenee</SelectItem>
                            </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <p className="text-[16px]">Note</p>
                            <Input placeholder = "Write here" className="w-full h-[280px] text-[#D1D5DB]  bg-slate-100 border-slate-300"/>
                        </div>
                    </div>  
               
                </div>
        
      </DialogContent>
    </Dialog>
  )
}
