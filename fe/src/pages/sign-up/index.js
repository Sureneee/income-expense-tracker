
import axiosInstance from "axios";
import { useRouter } from "next/router";
import { SIGNUP_INPUTS } from "@/constants";
import { useRef } from "react";
import { Header } from "@/components/Header";
import { WelcomeMessage } from "@/components/Welcome";
import { CustomForm } from "@/components/CustomForm";
import { CustomLink } from "@/components/CustomLink";


const SignupPage = () => {
  const router = useRouter();
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const { email, name, password, rePassword } = Object.fromEntries(formData);

    if (password !== rePassword) {
      alert("Passwords do not match");
      formRef.current.reset();
      return;
    }

    try {
      const response = await axiosInstance.post("/api/signup", {
        email,
        password,
        name,
        currency_type: "MNT",
      });

      localStorage.setItem("user", JSON.stringify(response.data.user));
      router.push("/stepper");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="flex">
      <div className="flex items-center justify-center w-1/2 h-screen">
        <div className="flex flex-col gap-10 min-w-[384px]">
          <Header />
          <WelcomeMessage
            title="Create Geld account"
            subTitle="Sign up below to create your Wallet account"
          />
          <CustomForm
            ref={formRef}
            onSubmit={handleSubmit}
            inputs={SIGNUP_INPUTS}
            btnText="Sign up"
          />
          <CustomLink
            title="Already have account?"
            linkName="Log in"
            href="/login"
          />
        </div>
      </div>
      <div className="w-1/2 h-screen bg-[#0166FF]" />
    </div>
  );
};

export default SignupPage;