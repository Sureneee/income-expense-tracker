import { memo, useCallback, useEffect, useState } from "react";
import { CustomPieChart } from "@/components/PieChart";
import Image from "next/image";
import withAuth from "@/components/WithAuth";
import Card from "@/assets/Card.png";
import axiosInstance from "axios";
import  BarChart2  from "@/components/BarChart";
import { CustomCard } from "@/components/CustomCard";
import { formatCurrency } from "@/lib/utils";
import { Donut } from "@/components/PieChart";
import { Records } from "@/components/Records";


const Dashboard = () => {
  
//   const [pieChartData, setPieChartData] = useState([]);

//   const fetchPieChartData = useCallback(async () => {
//     try {
//       const response = await axiosInstance.get("http://localhost:8000/record/pieChart");
//       const formattedData = response.data.map((item) => ({
//         ...item,
//         fill: `var(--color-${item.categoryname})`,
//       }));
//       setPieChartData(formattedData);
//     } catch (error) {
//       console.error("Error fetching pie chart data:", error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchPieChartData();
//   }, [ fetchPieChartData]);


  const CardWithImage = () => (
    <div className="relative">
      <Image alt="VirtualCard" src={Card} width={384} height={216} />
      <div className="absolute z-10 text-white bottom-10 left-10">
        <p className="leading-6 opacity-50">Cash</p>
        <span className="text-[24px] leading-8 font-semibold">
          {/* {formatCurrency(1000000)} */}
        </span>
      </div>
    </div>
  );
    return (
    
    <div className="flex flex-col gap-6 bg-slate-100">
      <div className="flex gap-6">
        <CardWithImage />
        <CustomCard />
        <CustomCard
          color="bg-[#0166FF]"
          title="Total Expenses"
          balance={-1200000}
          percent={-30}
        />
      </div>
      <div className="flex gap-6">
        <BarChart2/>
        <Donut/>
        {/* <CustomPieChart chartData={pieChartData} /> */}
      </div>
      <Records/>
    </div>
  );
};
           
 

export default Dashboard;