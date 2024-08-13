import { Stepper } from "@/components/Stepper";
import { Coin } from "@/components/icon/Coin";


const CurrencyPage = () => {
    return (
        <div>
            <div className="mt-[40px] mb-[141px]">
                <Stepper/>
            </div>
            <div className="flex items-center">
                <div className="bg-[#0166FF] p-2 rounded-[100px] w-[32px] h-[32px]">
                    <Coin/>
                </div>
``
            </div>
        </div>
    );
};

export default CurrencyPage;