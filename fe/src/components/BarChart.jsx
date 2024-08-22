
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import axios from "axios";
import { ChartContainer } from "./ui/chart";


const styles = {
  Chart: " h-fit rounded-[12px] bg-white",
};

const BarChart2 = () => {

  const monthsMapping = {
    '1': 'Jan',
    '2': "Feb",
    '3': "Mar",
    '4': "Apr",
    '5': 'May',
    '6': "Jun",
    '7': "Jul",
    '8': "Aug",
    '9': 'Sep',
    '10': "Oct",
    '11': "Nov",
    '12': "Dec"
  }
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
      color: "#84CC16",
    },
    expense: {
      label: "Mobile",
      color: "#F97316",
    },
  };

  return (
    <div className="flex mt-6 gap-6">
      <div className={styles.Chart}>
        <div className="py-4 px-6 border-b">
          <p className="font-semibold text-4 text-slate-900">
            Income - Expense
          </p>
        </div>
        <div className="py-[32px] px-[24px]">
      <ChartContainer config={chartConfig} className="h-[226px] w-[588px]">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <YAxis

          />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={5}
            axisLine={false}
            tickFormatter={(value) => monthsMapping[value]
            }
          />
          <Bar dataKey="income" fill="var(--color-income)" radius={[1000,1000,0,0]} />
          <Bar dataKey="expense" fill="var(--color-expense)" radius={[1000,1000,0,0]} />
        </BarChart>
      </ChartContainer>
      </div>
      </div>
      </div>
  );
};

export default BarChart2;
 