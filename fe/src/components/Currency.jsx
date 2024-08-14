import { CurrencyIcon } from '@/components/icon/CurrencyIcon';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const Currency = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 mb-6">
        <CurrencyIcon />
        <h1 className="text-2xl font-semibold text-[#0F172A]">
          Select base currency
        </h1>
      </div>
      <Select>
        <SelectTrigger className="w-full h-[64px] p-4 text-[16px] font-semibold">
          <SelectValue placeholder="MNT - Mongolian Tugrik" />
        </SelectTrigger>
        <SelectContent className="text-[16px] font-semibold">
          <SelectItem value="MNT">MNT - Mongolian Tugrik</SelectItem>
          <SelectItem value="USD">USD - US Dollar</SelectItem>
        </SelectContent>
      </Select>
      <p className="text-[12px] font-normal leading-4 mt-3 mb-8 text-[#475569]">
        Your base currency should be the one you use most often. All transaction
        in other currencies will be calculated based on this one
      </p>
    </div>
  );
};