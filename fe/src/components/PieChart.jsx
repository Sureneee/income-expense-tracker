"use client";
import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";
import axios from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const Donut = () => {
//   const chartData = [
//     { browser: "Bills", visitors: 5000000, fill: "var(--color-chrome)" },
//     { browser: "Food", visitors: 5000000, fill: "var(--color-safari)" },
//     { browser: "Shopping", visitors: 5000000, fill: "var(--color-firefox)" },
//     { browser: "Insurance", visitors: 5000000, fill: "var(--color-edge)" },
//     { browser: "Clothing", visitors: 5000000, fill: "var(--color-other)" },
//   ];
  const [piechartData, setPieChartData] = useState([]);
  const fetchData =  async () => {
      const res = await axios.get('http://localhost:8000/record/pieChart');
      setPieChartData(res.data);
  }
  useEffect(() => {
      fetchData()
  }, [])

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Bills",
      color: "#1C64F2",
    },
    safari: {
      label: "Food",
      color: "#E74694",
    },
    firefox: {
      label: "Shopping",
      color: "#FDBA8C",
    },
    edge: {
      label: "Insurance",
      color: "#16BDCA",
    },
    other: {
      label: "Clothing",
      color: "#F2901C",
    },
  };

  return (
    <div>
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
              innerRadius={45}
            />
          </PieChart>
        </ChartContainer>
    </div>
  );

};
