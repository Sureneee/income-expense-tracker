
import { Bar, BarChart, YAxis, XAxis, CartesianGrid } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Donut } from "@/components/Pie-chart";

const chartData = [
  { month: "January", income: 3200000, expense: 2500000 },
  { month: "January", income: 3200000, expense: 2500000 },
  { month: "January", income: 3200000, expense: 2500000 },
  { month: "January", income: 3200000, expense: 2500000 },
  { month: "January", income: 3200000, expense: 2500000 },
  { month: "January", income: 3200000, expense: 2500000 }
]

const chartConfig = {
    income: {
      label: "Income",
      color: "#84CC16",
    },
    mobile: {
      label: "Expense",
      color: "#F2901C",
    },
  }

const styles = {
    Chart: 'w-[588px] h-fit rounded-[12px] bg-white'
  };


export const Charts = () => {
    return (

        <div className="flex mt-6 gap-6">
            {/* Chart1 */}
            <div className={styles.Chart}>
                <div className="py-4 px-6">
                    <p className="font-semibold text-4 text-slate-900">Income - Expense</p>
                </div>
                <div className="py-[32px] px-[24px]">
                  <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <BarChart accessibilityLayer data={chartData}>
                      <CartesianGrid vertical={false} />
                      <YAxis />
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
            </div>

            {/* Chart2 */}
            <div className={styles.Chart}>
                <div className="flex justify-between py-4 px-6">
                    <p className="font-semibold text-4 text-slate-900">Income - Expense</p>
                    <p className="font-normal text-4 text-gray-500">Jun 1 - Nov 30</p>
                </div>
                <div className="flex py-[32px] px-[24px] gap-[47px]">
                  <div className="w-[156px]">
                    <Donut/></div>
                  <div className="w-[337px] text-[14px] font-normal flex flex-col gap-4">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 ">
                        <div className="w-3 h-3 bg-[#0166FF] rounded-full"></div>
                        <p>Bills</p>
                        </div>
                      <p>5,000,000₮</p>
                      <p>15.50%</p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 ">
                        <div className="w-3 h-3 bg-[#E74694] rounded-full"></div>
                        <p>Food</p>
                        </div>
                      <p>5,000,000₮</p>
                      <p>15.50%</p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 ">
                        <div className="w-3 h-3 bg-[#FDBA8C] rounded-full"></div>
                        <p>Shopping</p>
                        </div>
                      <p>5,000,000₮</p>
                      <p>15.50%</p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 ">
                        <div className="w-3 h-3 bg-[#16BDCA] rounded-full"></div>
                        <p>Insurance</p>
                        </div>
                      <p>5,000,000₮</p>
                      <p>15.50%</p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 ">
                        <div className="w-3 h-3 bg-[#F2901C] rounded-full"></div>
                        <p>Insurance</p>
                        </div>
                      <p>5,000,000₮</p>
                      <p>15.50%</p>
                    </div>

                  </div>
                
                </div>

                
            </div>

        </div>

);
};

