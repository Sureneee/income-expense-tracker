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
import { DatePicker } from "./DatePicker";
import { Input } from "@/components/ui/input";
import { Home, HomeIcon, Plus } from "lucide-react";
import { CATEGORIES } from "@/constants/index";
import { Label } from "@/components/ui/label";
import { useState, useEffect, useRef, useContext } from "react";
import { AddCategory } from "./AddCategory";
import { axiosInstance } from "@/lib";
import { DialogContext } from "@/pages/_app";

const styles = {
  button1default:
    "w-full px-3 text-white rounded-[20px] bg-[#0166FF] hover:bg-[#0166FF]",
  button1focus:
    "w-full px-3 text-[#1F2937] rounded-[20px] bg-[#F3F4F6] hover:bg-[#F3F4F6]",
  button2default:
    "w-full bg-[#F3F4F6] hover:bg-[#F3F4F6] rounded-[20px] text-[#1F2937]",
  button2focus:
    "w-full bg-[#16A34A] hover:bg-[#16A34A] rounded-[20px] text-white",
};

// export function AddButton () {

//   return (
//       <Button className="rounded-[20px] h-[32px] bg-[#0166FF] text-[16px] font-normal"><Plus className="mr-[6.5px]"/>Add</Button>
//   )
// }
// const icons = {
//   food: <FOod
// }

export function DialogRecord() {
  const [buttonStyles, setButtonStyles] = useState(styles.button1default);
  const [buttonStyles2, setButtonStyles2] = useState(styles.button2default);
  const [transType, setTransType] = useState("EXP");
  const [categoryData, setCategoryData] = useState([]);

  const { btnRef } = useContext(DialogContext);

  
  const formRef = useRef();

  const fetchData = async () => {
    const res = await axiosInstance.get("/category");
    const result = res.data.map((category) => {
      return { ...category, icon: <HomeIcon /> };
    });
    console.log(result);
    setCategoryData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const { name, amount, description, category } = Object.fromEntries(
      formData.entries()
    );

    console.log(name, amount, description, category);
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      const response = await axiosInstance.post("record/create", {
        name: name,
        amount: amount,
        transaction_type: transType,
        description: description,
        category_id: category,
        user_id: user.id,
      });
      console.log(response, "res");
    } catch (error) {}

    // let user = localStorage.getItem("user");
    // console.log(user,'user')
    // // const data = JSON.parse(user);
    // // const userId = data.id;
    // // await axios.post("http://localhost:8000/record/create", {
    // //   user_id: userId,
    // //   name: formRef.current[0].value,
    // //   amount: formRef.current[0].value,
    // //   transaction_type: transType,
    // //   description: formRef.current[1].value,
    // //   category_id: formRef.current[2].value,
    // // });
    // // location.reload();
  };

  const buttonHandler = () => {
    setButtonStyles(styles.button1default);
    setButtonStyles2(styles.button2default);
    setTransType("EXP");
  };

  const buttonHandler2 = () => {
    setButtonStyles2(styles.button2focus);
    setButtonStyles(styles.button1focus);
    setTransType("INC");
  };
  

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
        {/* {MenuButton?<Button className="rounded-[20px] h-[32px] bg-[#0166FF] text-white text-[16px] font-normal" variant="outline" >
            <Plus className="mr-[6.5px]" /> Add
          </Button>:<Button variant="outline" >
            <Plus className="mr-[6.5px]" /> Record
          </Button>} */}
          <Button ref={btnRef} variant="outline" >
            <Plus className="mr-[6.5px]" /> Record
          </Button>
        </DialogTrigger>
        <DialogContent className="min-w-[792px]">
          <DialogHeader className="border-b py-5 px-6 border-slate-400">
            <DialogTitle>Add Record</DialogTitle>
          </DialogHeader>
          <form  onSubmit={handleSubmit} ref={formRef}>
            <div className="flex ">
              <div className="w-[396px] py-[20px] px-[24px] flex flex-col gap-[20px]">
                <div className="flex gap-1">
                  <Button className={buttonStyles} onClick={buttonHandler}>
                    Expense
                  </Button>
                  <Button className={buttonStyles2} onClick={buttonHandler2}>
                    Income
                  </Button>
                </div>

                <div className="flex flex-col gap-[24px]">
                  <div>
                    <p className="text-[16px]">Amount</p>
                    <Input
                      name="amount"
                      placeholder="₮ 000.00"
                      className="w-full text-[#D1D5DB] bg-slate-100 border-slate-300"
                    />
                  </div>
                  <div>
                    <p className="text-[16px]">Category</p>
                    <Select name="category">
                      <SelectTrigger className="w-full h-[48px] p-4 text-[16px] border-slate-300 text-4 font-normal bg-slate-100 text-slate-400">
                        <SelectValue placeholder="Choose" />
                      </SelectTrigger>

                      <SelectContent className="text-[16px] font-normal">
                        <div className="flex">
                          <AddCategory />
                        </div>
                        {categoryData.map((category) => {
                          return (
                            <SelectItem
                              icon={category.icon}
                              value={category.id}
                            >
                              {category.name}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <DatePicker />
                  </div>
                  <DialogFooter>
                    <Button
                      type="submit"
                      className=" color-[#0166FF]text-white rounded-[20px] w-[348px] h-10"
                    >
                      Add Record
                    </Button>
                  </DialogFooter>
                </div>
              </div>
              <div className=" w-[396px] py-[20px] px-[24px] flex flex-col gap-[20px]">
                <div>
                  <p className="text-[16px]">Payee</p>
                  <Input
                    name="name"
                    placeholder="Write here"
                    className="w-full h-[48px] p-4 text-[16px] border-slate-300 text-4 font-normal bg-slate-100 text-slate-400"
                  ></Input>
                </div>
                <div>
                  <p className="text-[16px]">Note</p>
                  <Input
                    name="description"
                    placeholder="Write here"
                    className="w-full h-[280px] text-[#D1D5DB]  bg-slate-100 border-slate-300"
                  />
                </div>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      {/* <button onClick={handleClick}>hello</button> */}
    </>
  );
}
