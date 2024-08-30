import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { ICONS } from "@/constants/index";
import { DialogContext } from "@/pages/_app";
import { useContext } from "react";


// import { CategoryBtnRef } from "@/pages/_app";



export function AddCategory() {
  const { CategoryBtnRef } = useContext(DialogContext); 

  return (
    <Dialog>
      <DialogTrigger asChild>
          <Button ref={CategoryBtnRef} variant="outline">
            <Plus className="mr-[6.5px]" /> Add Category
          </Button>
        
      </DialogTrigger>
      <DialogContent className="min-w-[494px]">
        <DialogHeader className="border-b py-5 px-6 border-slate-400">
          <DialogTitle>Add Category</DialogTitle>
        </DialogHeader>
        <form>
          <div className="flex ">
            <div className="w-full p-[24px] flex flex-col gap-[20px]">
              <div className="flex gap-3">
                <Select>
                  <SelectTrigger className="w-[84px] h-[48px] p-4 text-[16px] border-slate-300 text-4 font-normal bg-slate-100 text-slate-400">
                    <SelectValue placeholder="Home" />
                  </SelectTrigger>

                  <SelectContent className="text-[16px] font-normal">
                    {ICONS.map((icons) => {
                      return (
                        <SelectItem
                          value={icons}
                          className=" flex items-center gap-2 px-3 "
                        >
                          {icons}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full h-[48px] p-4 text-[16px] border-slate-300 text-4 font-normal bg-slate-100 text-slate-400">
                    <SelectValue placeholder="Name" />
                  </SelectTrigger>

                  <SelectContent className="text-[16px] font-normal"></SelectContent>
                </Select>
              </div>
              <Button className="bg-[#16A34A]">Add</Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
