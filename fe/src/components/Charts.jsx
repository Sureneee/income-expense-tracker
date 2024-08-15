
import { Bar, BarChart } from "recharts"
 
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { month: "January", income: 3200000, expense: 2500000 },
  { month: "January", income: 3200000, expense: 2500000 },
  { month: "January", income: 3200000, expense: 2500000 },
  { month: "January", income: 3200000, expense: 2500000 },
  { month: "January", income: 3200000, expense: 2500000 },
  { month: "January", income: 3200000, expense: 2500000 }
]

const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  }

export function Component() {
    return (
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    )
  }

const styles = {
    Chart: 'flex flex-col w-[588px] h-[284px] rounded-[12px] bg-white'
  };

  

export const Charts = () => {
    return (

        <div className="flex mt-6">
            {/* Chart1 */}
            <div className={styles.Chart}>
                <div className="py-4 px-6">
                    <p className="font-semibold text-4 text-slate-900">Income - Expense</p>
                </div>
                <div className="py-[32px] px-6 ">
                    <Component/>
               
                   

                </div>
            </div>

        </div>

);
};

