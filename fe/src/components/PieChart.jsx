"use client";
import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";
import axios from "axios";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  amount: {
    label: "amount",
  },
  shopping: {
    label: "Shopping",
    color: "#FDBA8C",
  },
  food: {
    label: "Food",
    color: "#E74694",
  },
  bills: {
    label: "Bills",
    color: "#1C64F2",
  },
  clothing: {
    label: "Clothing",
    color: "#F2901C",
  },
  insurance: {
    label: "Insurance",
    color: "#16BDCA",
  },
};

export const Donut = () => {
  //   const chartData = [
  //     { browser: "Bills", visitors: 5000000, fill: "var(--color-chrome)" },
  //     { browser: "Food", visitors: 5000000, fill: "var(--color-safari)" },
  //     { browser: "Shopping", visitors: 5000000, fill: "var(--color-firefox)" },
  //     { browser: "Insurance", visitors: 5000000, fill: "var(--color-edge)" },
  //     { browser: "Clothing", visitors: 5000000, fill: "var(--color-other)" },
  //   ];
  const [piechartData, setPieChartData] = useState([]);
  const fetchData = async () => {
    const res = await axios.get("http://localhost:8000/record/pieChart");
    const formattedData = res.data.map((item) => ({
      ...item,
      fill: `var(--color-${item.categoryname})`,
    }));
    setPieChartData(formattedData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div className="flex mt-6 gap-6">
      <div className="h-[284px] w-[588px] rounded-[12px] bg-white">
        <div className="py-4 px-6 border-b">
          <p className="font-semibold text-4 text-slate-900">
            Income - Expense
          </p>
        </div>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[156px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={piechartData}
            dataKey="amount"
            nameKey="categoryname"
            innerRadius={40}
          />
        </PieChart>
      </ChartContainer>
    </div>
    </div>
  );
};
