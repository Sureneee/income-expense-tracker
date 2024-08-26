import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  amount: {
    label: "amount",
  },
  Shopping: {
    label: "Shopping",
    color: "#FDBA8C",
  },
  Food: {
    label: "Food",
    color: "#E74694",
  },
  Bills: {
    label: "Bills",
    color: "#1C64F2",
  },
  Clothing: {
    label: "Clothing",
    color: "#F2901C",
  },
  Insurance: {
    label: "Insurance",
    color: "#16BDCA",
  },

};
export function CustomPieChart({ chartData }) {
  return (
    <Card className="flex flex-col h-[284px] flex-1">
      <CardHeader className="flex flex-row justify-between px-8 py-4 border-b-[1px]">
        <CardTitle>Income - Expense</CardTitle>
        <p className="text-[#6B7280] leading-6">Jun 1 - Nov 30</p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <ChartContainer
          config={chartConfig}
          className="max-h-[202px] ml-[-25px] mt-[12px]">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="categoryname"
              innerRadius={45}
              
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <ChartLegend
              verticalAlign="middle"
              align="right"
              layout="vertical"
              
              content={
                <ChartLegendContent
                  className="rounded-full"
                  nameKey="categoryname"
                />
              }
              className="flex flex-col items-start gap-4"
            />
          </PieChart>
        </ChartContainer>
        <div className="mt-[25px] ml-[25px]">
            <ul className="flex flex-col gap-[8px]">
              <li>5’000’000₮</li>
              <li>5’000’000₮</li>
              <li>5’000’000₮</li>
              <li>5’000’000₮</li>
              <li>5’000’000₮</li>
            </ul>
          </div>
          <div className="mt-[25px] ml-[25px]">
            <ul className="flex flex-col gap-[8px]">
              <li>15.50%</li>
              <li>15.50%</li>
              <li>15.50%</li>
              <li>15.50%</li>
              <li>15.50%</li>
            </ul>
          </div>
      </CardContent>
    </Card>
  );
}