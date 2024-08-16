import { HomeIcon } from "./icon/HomeIcon";



export const Records = () => {
    return (
        <div className="flex flex-col rounded-[12px] mt-6 bg-white max-w-[1200px]">
            <div className="flex py-4 px-[24px] items-center border-b">
                <h1 className="font-semibold text-[16px] leading-[24px] ">Last Records</h1>
            </div>
            <div className="px-[24px]">
            <div className="flex items-center py-[20px] border-b justify-between">
                    <div className="flex gap-4">
                        <div className="bg-[#0166FF] w-10 h-10 rounded-full flex items-center justify-center">
                            <HomeIcon/>
                        </div>
                        <div>
                            <p className="text-[16px] font-normal">Lendiing & Renting</p>
                            <p className="text-[12px] font-normal text-gray-500"> 3 hours ago</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[16px] font-semibold text-[#84CC16]">- 1,000₮</p>
                    </div>

            </div>
            </div>

        </div>
    );
};