import { LogoIcon } from "@/components/icon/LogoIcon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";

export const Form = forwardRef ((props, ref) => {
    return (
        <form className="flex flex-col items-center w-[384px] gap-10" onSubmit={props.onSubmit} ref={ref}>
          <LogoIcon/>
          <div className="space-y-1  text-center">
            <h1 className="text-slate-900 text-2xl font-semibold">Create Geld account</h1>
            <p className="text-slate-700">Sign up below to create your Wallet account</p>
          </div>
          <div className="space-y-2 w-full">
            <Input placeholder = "Name" className="w-full bg-[#F3F4F6]" />
            <Input placeholder = "Email" type="email" className="w-full bg-[#F3F4F6]"/>
            <Input placeholder = "Password" type="password" className="w-full bg-[#F3F4F6]"/>
            <Input placeholder = "Re-password" type="password" className="w-full bg-[#F3F4F6]"/>
            
            {props.error && <p className="text-red-600 font-medium">{props.error}</p>}

            <Button type="submit"className="w-full rounded-2xl bg-[#0166FF]">Sign up</Button>
            </div>
            <div className="flex">
              <p className="text-slate-700">Already have account?</p>
              <button className="text-[#0166FF] px-[12px]">Log in</button>
            </div>
        </form>
    );
});

Form.displayName = "Form";
