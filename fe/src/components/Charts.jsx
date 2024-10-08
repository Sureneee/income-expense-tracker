import { Bar, BarChart, YAxis, XAxis, CartesianGrid } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Donut } from "@/components/PieChart";

const styles = {
  Chart: "w-[588px] h-fit rounded-[12px] bg-white",
};

export const Charts = () => {
  const [chartData, setChartData] = useState([]);
  const fetchData = async () => {
    const res = await axios.get('http://localhost:8000/record/barChart');
    setChartData(res.data);
}
useEffect(() => {
    fetchData()
}, [])
  
  const chartConfig = {
    income: {
      label: "Income",
      color: "#84CC16",
    },
    mobile: {
      label: "Expense",
      color: "#F2901C",
    },
  };
  return (
    <div className="flex mt-6 gap-6">
      {/* Chart1 */}
      <div className={styles.Chart}>
        <div className="py-4 px-6 border-b">
          <p className="font-semibold text-4 text-slate-900">
            Income - Expense
          </p>
        </div>
        <div className="py-[32px] px-[24px]">
          <ChartContainer config={chartConfig} className="max-h-[200px] w-full">
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
        <div className="flex justify-between py-4 px-6 border-b">
          <p className="font-semibold text-4 text-slate-900 ">
            Income - Expense
          </p>
          <p className="font-normal text-4 text-gray-500">Jun 1 - Nov 30</p>
        </div>
        <div className="flex py-[32px] px-[24px] gap-[47px]">
          <div className="w-[156px]">
            <Donut />
          </div>
          <div className="w-[337px] text-[14px] font-normal flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex items-center gap-2 w-1/3 ">
                <div className="w-3 h-3 bg-[#0166FF] rounded-full"></div>
                <p>Bills</p>
              </div>
              <p className="w-1/3 flex justify-center">5,000,000₮</p>
              <p className="w-1/3 flex justify-center">15.50%</p>
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
