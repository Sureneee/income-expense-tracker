import { CashIcon } from "@/components/icon/CashIcon";
import { CorrectIcon } from "@/components/icon/CorrectIcon";
import { LeftArrow } from "@/components/icon/LeftArrow";
import { HomeIcon } from "lucide-react";

export const LINKS = [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Records",
      href: "/records",
    },
  ];
  
  export const LOGIN_INPUTS = [
    {
      placeholder: "Email",
      name: "email",
      type: "email",
    },
    {
      placeholder: "Password",
      name: "password",
      type: "password",
    },
  ];

  export const SIGNUP_INPUTS = [
    {
      placeholder: "Name",
      name: "name",
      type: "text",
    },
    {
      placeholder: "Email",
      name: "email",
      type: "email",
    },
    {
      placeholder: "Password",
      name: "password",
      type: "password",
    },
    {
      placeholder: "Re-password",
      name: "rePassword",
      type: "password",
    },
  ];
  
  export const CATEGORIES = [
    {name: "Food & Drinks",
    icon: <HomeIcon/>
    },
    {name: "Shopping",
    icon: <HomeIcon/>
    },
    {name: "Housing",
    icon: <HomeIcon/>
    },
    {name: "Transportation",
      icon: <HomeIcon/>
    },
    {name: "Vehicle",
    icon: <HomeIcon/>
    },
    {name: "Life & Entertainment",
    icon: <HomeIcon/>
    },
    {name: "Communication, PC",
    icon: <HomeIcon/>
    },
    {name: "Finacial expenses",
    icon: <HomeIcon/>
    },
    {name: "Investments",
    icon: <HomeIcon/>
    },
    {name: "Income",
    icon: <HomeIcon/>
    },
    {name: "Others",
    icon: <HomeIcon/>
    }
  ]

  export const ICONS = [
    <HomeIcon/>, <CashIcon/>, <CorrectIcon/>, <LeftArrow/>
  ]
  