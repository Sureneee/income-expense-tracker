import { HomeIcon } from "./icon/HomeIcon";

const dataRecords = [
    {
      icon: <HomeIcon />,
      name: "Lending & Renting",
      time: "3 hours ago",
      amount: "1000",
      currency: "₮",
    },
    {
      icon: <HomeIcon />,
      name: "Lending & Renting",
      time: "3 hours ago",
      amount: "1000",
      currency: "₮",
    },
    {
      icon: <HomeIcon />,
      name: "Lending & Renting",
      time: "3 hours ago",
      amount: "1000",
      currency: "₮",
    },
    {
      icon: <HomeIcon />,
      name: "Lending & Renting",
      time: "3 hours ago",
      amount: "1000",
      currency: "₮",
    },
    {
      icon: <HomeIcon />,
      name: "Lending & Renting",
      time: "3 hours ago",
      amount: "1000",
      currency: "₮",
    },
  ];

export const Records = () => {
    return (
        <div className="rounded-[12px] mt-6 bg-white">
        {dataRecords.map((el, i) => {
            return (
              <div
                className="flex flex-col items-start max-w-[1200px] self-stretch border-t-[1px]"
                key={i}>
                <div className="flex items-center self-stretch justify-between p-5">
                  <div className="flex items-center gap-4 ">
                    <div className="bg-[#0166FF] w-10 h-10 rounded-full flex items-center justify-center">
                      {el.icon}
                      </div>
                    <div className="flex flex-col items-start justify-center">
                      <p>{el.name}</p>
                      <p className="text-xs text-[#6B7280]">{el.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#84CC16]">
                    <p>-</p>
                    <p>{el.amount}</p>
                    <p>{el.currency}</p>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        )}
        // <div className="flex flex-col rounded-[12px] mt-6 bg-white max-w-[1200px]">
        //     <div className="flex py-4 px-[24px] items-center border-b">
        //         <h1 className="font-semibold text-[16px] leading-[24px] ">Last Records</h1>
        //     </div>
        //     <div className="px-[24px]">
        //     <div className="flex items-center py-[20px] border-b justify-between">
        //             <div className="flex gap-4">
        //                 <div className="bg-[#0166FF] w-10 h-10 rounded-full flex items-center justify-center">
        //                     <HomeIcon/>
        //                 </div>
        //                 <div>
        //                     <p className="text-[16px] font-normal">Lendiing & Renting</p>
        //                     <p className="text-[12px] font-normal text-gray-500"> 3 hours ago</p>
        //                 </div>
        //             </div>
        //             <div>
        //                 <p className="text-[16px] font-semibold text-[#84CC16]">- 1,000₮</p>
        //             </div>

        //     </div>
        //     </div>

        // </div>
    