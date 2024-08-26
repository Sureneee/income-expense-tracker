import { LogoIcon } from "@/components/icon/LogoIcon";
import { useRouter } from "next/router";
import { useRef } from "react";
import axios from "axios";
import { CustomForm } from "@/components/CustomForm";
import { CustomLink } from "@/components/CustomLink";
import { LOGIN_INPUTS } from "@/constants";


const SigninPage = () => {
    const router = useRouter();
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault(); //log darahaar neg l udaa hevledegiig n boliulaad darah bolgond hevlej bolgoj bga

        const [email, password] = formRef.current
        console.log(email.value, password.value)
        try {
            const response = await axios.post('http://localhost:8000/api/signin', {email: email.value, password: password.value });
            localStorage.setItem('user', JSON.stringify(response.data.user[0]))
            router.push("/dashboard");
        }   catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="grid w-full h-screen grid-cols-2">
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center w-[384px] gap-10" onSubmit={handleSubmit} ref={formRef}>
                    <LogoIcon/>
                    <div className="space-y-1 text-center">
                        <h1 className="text-slate-900 text-2xl font-semibold">Welcome Back</h1>
                        <p className="text-slate-700">Welcome back, Please enter your details</p>
                    </div>
                    {/* <div className="space-y-2 w-full">
                        <Input placeholder = "Email" type="email" className="w-full bg-[#F3F4F6]"/>
                        <Input placeholder = "Password" type="password" className="w-full bg-[#F3F4F6]"/>
                        <Button type="submit" className="w-full rounded-2xl bg-[#0166FF]">Log in</Button>
                    </div>
                    <div className="flex">
                        <p className="text-slate-700">Don't have account?</p>
                        <button className="text-[#0166FF] px-[12px]">Sign up</button>
                    </div> */}
                    <div className="space-y-2 w-full">
                    <CustomForm
                        ref={formRef}
                        onSubmit={handleSubmit}
                        inputs={LOGIN_INPUTS}
                        btnText="Log in"
                    />
                    </div>
                    <CustomLink
                        title="Don't have an account?"
                        href="/sign-up"
                        linkName="Sign up"
                    />
                            </div>
            </div>
            <div className="bg-[#0166FF]"></div>

        </div>
    )
};

export default SigninPage;
