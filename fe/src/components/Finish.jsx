import { CorrectIcon } from '@/components/icon/CorrectIcon';
import { Input } from "@/components/ui/input";
import React from 'react';


export const Finish = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 mb-6">
        <CorrectIcon />
        <h1 className="text-2xl font-semibold text-[#0F172A]">
        Good Job!
        </h1>
      </div>
      <Input placeholder = "Email" type="email" className="w-full bg-[#F3F4F6]"/>
      <p className="text-[12px] font-normal leading-4 mt-3 mb-8 text-[#475569]">
      Your very first account has been created. Now continue to dashboard and start tracking
      </p>
    </div>
  );
};