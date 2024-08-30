import { forwardRef } from "react";
import { Button} from "@/components/ui/button";
import { Input} from "@/components/ui/input";

export const CustomForm = forwardRef(({ onSubmit, inputs, btnText }, ref) => {
  return (
    <form className="flex flex-col gap-4" ref={ref} onSubmit={onSubmit}>
      {inputs.map(({ placeholder, name, type }) => (
        <Input placeholder={placeholder} name={name} type={type} required />
      ))}
      <Button className="rounded-[20px] bg-[#0166FF]" type="submit">
        {btnText}
      </Button>
    </form>
  );
})