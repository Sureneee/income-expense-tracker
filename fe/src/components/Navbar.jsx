import { LogoVector } from "@/components/icon/LogoVector";
import { DialogRecord } from "@/components/Dialog";
import AvatarImage from "@/assets/Avatar.png";
import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/constants";
import { useState } from "react";


export const Navbar = () => {
    const [activeLink, setActiveLink] = useState(0);
    return (
        <div className="flex  py-4 px-[120px] justify-between bg-white items-center">
            <div className="flex items-center gap-[24px]">
              <LogoVector/>
              {LINKS.map(({ href, title }, index) => (
                <Link
                    key={index}
                    onClick={() => setActiveLink(index)}
                    href={href}
                    className={`text-[#0F172A] ${
                    activeLink === index ? "font-semibold" : null
                    } leading-6`}>
                    {title}
                </Link>
                ))}
            </div>
            <div className="flex gap-[24px] h-10">
              <DialogRecord/>
              {/* <Button className="w-full rounded-2xl bg-[#0166FF] text-[16px] font-normal " onclick = {handlerClick}> <AddIcon/>  Record</Button> */}
              <Image src={AvatarImage} width={40} height={40} alt="Avatar Image"/>             
            </div>
          </div>
    )
}

