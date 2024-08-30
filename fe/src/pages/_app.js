import { DialogRecord } from "@/components/Dialog";
import { BasicLayout } from "@/layout/BasicLayout";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { createContext, useRef } from "react";


export const DialogContext = createContext();

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const btnRef = useRef();
  const CategoryBtnRef = useRef();

  const layoutRoutes = ["/dashboard", "/records"];

  const isLayoutRoute = layoutRoutes.includes(router.pathname);

  return isLayoutRoute ? (
    <DialogContext.Provider value={{ btnRef, CategoryBtnRef }}>
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </DialogContext.Provider>
  ) : (
    <Component {...pageProps} />
  );
}
