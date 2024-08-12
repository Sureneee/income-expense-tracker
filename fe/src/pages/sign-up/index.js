
import { Form } from "@/components/Form";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";

const SignupPage = () => {
  const [error, setError] = useState("");
  const BASE_URL = "http://localhost:8000";
  const router = useRouter();
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();

    const username = formRef.current[0].value;
    const password = formRef.current[1].value;
    const rePassword = formRef.current[2].value;

    if (!username || password != rePassword || !password) {
    setError('Aldaa garlaa!')
      return
    }

    const { data } = await axios.post(BASE_URL + "/auth/signUp", {username: formRef.current[0].value, password: formRef.current[1].value, });
  //   if(data) {
  //     router.push("/");
  //   }
  };

  return (
    <div className="grid w-full h-screen grid-cols-2">
      <div className="flex items-center justify-center">
        <Form ref={formRef} onSubmit={onSubmit} error={error}/>
      </div>
      <div className="bg-[#0166FF]"></div>

    </div>
  );
};

export default SignupPage;