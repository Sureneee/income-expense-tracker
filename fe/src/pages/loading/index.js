import { LogoIcon } from "@/components/icon/LogoIcon";

const LoadingPage = () => {
    return (
        <div className="flex w-[1440px] flex-col items-center justify-center h-screen gap-[18px]">
            <div>
                <LogoIcon className = "w-[172px] h-[64px] pt-5 "/>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className=" border-4 rounded-[50px] border-slate-300 border-t-indigo-700"></div>
                <p className="text-[16px] leading-6 font-semibold">Түр хүлээнэ үү...</p>
            </div>
        </div>
    );
};

export default LoadingPage;


