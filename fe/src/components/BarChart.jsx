import { ChartContainer } from "@/components";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import axios from "axios";
const BarChart2 = () => {
    const [chartData, setChartData] = useState([]);
    const fetchData =  async () => {
        const res = await axios.get('http://localhost:8000/record/barChart');
        setChartData(res.data);
    }
    useEffect(() => {
        fetchData()
    }, [])


  const chartConfig = {
    income: {
      label: "Desktop",
      color: "#2563eb",
    },
    expense: {
      label: "Mobile",
      color: "#60a5fa",
    },
  };

  return (
    <div>
      <ChartContainer config={chartConfig} className="h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <YAxis

          />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Bar dataKey="income" fill="var(--color-income)" radius={4} />
          <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default BarChart2;
 