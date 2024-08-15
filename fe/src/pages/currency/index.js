// // import { Stepper } from "@/components/Stepper";
// // import { Coin } from "@/components/icon/Coin";


// // const CurrencyPage = () => {
// //     return (
// //         <div>
// //             <div className="mt-[40px] mb-[141px]">
// //                 <Stepper/>
// //             </div>
// //             <div className="flex items-center">
// //                 <div className="bg-[#0166FF] p-2 rounded-[100px] w-[32px] h-[32px]">
// //                     <Coin/>
// //                 </div>
// // ``
// //             </div>
// //         </div>
// //     );
// // };

// // export default CurrencyPage;


import { LogoIcon } from '@/components/icon/logoIcon';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import React from 'react';
import { Currency } from '@/components/Currency';
import { Cash } from '@/components/Cash';
import { useRouter } from 'next/router';
import { Finish } from '@/components/Finish';


const styles = {
  tag: 'size-6 bg-[#E5E7EB] rounded-full text-center',
  activeTag: 'size-6 bg-[#0166FF] rounded-full text-center text-white',
  Line: 'w-[220px] h-1 bg-[#E5E7EB] absolute left-6 top-2.5 z-[-1]',
  activeLine: 'w-[118px] h-1 bg-[#0166FF] absolute left-6 top-2.5 z-[-1]',
  activeLine2: 'w-[220px] h-1 bg-[#0166FF] absolute left-6 top-2.5 z-[-1]',
  container: 'flex flex-col items-center gap-[141px] mt-10',
  topContainer: 'flex flex-col items-center gap-12',
  stepContainer: 'flex gap-12 relative',
  step: 'flex flex-col items-center gap-1',
  showContent: 'flex flex-col items-center w-[352px]',
  button: 'w-full h-12 p-4 rounded-[20px] bg-[#0166FF] text-[#FFFFFF]',
};

const Process = ['Currency', 'Balance', 'Finish'];

const SignUpStep = () => {
  const router = useRouter();
  const [showSelect, setShowSelect] = useState(1);

  const handlerClick = () => {
    setShowSelect(showSelect + 1);
    if (showSelect >= 3) {
      router.push('/dashboard');
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <LogoIcon />
        <div className={styles.stepContainer}>
          {Process.map((el, i) => (
            <div className={styles.step}>
              <div
                className={i + 1 <= showSelect ? styles.activeTag : styles.tag}
              >
                {i + 1}
              </div>
              <div className={styles.Line}></div>
              <div
                className={showSelect >= 2 ? styles.activeLine : <></>}
              ></div>
              <div
                className={showSelect >= 3 ? styles.activeLine2 : <></>}
              ></div>
              <p>{el}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.showContent}>
        {showSelect === 1 ? <Currency /> : <></>}
        {showSelect === 2 ? <Cash /> : <></>}
        {showSelect === 3 ? <Finish /> : <></>}
        
        <Button className={styles.button} onClick={handlerClick}>
          {showSelect === 3 ? "Go to dashboard" : "Confirm"}
        </Button>
      </div>
    </div>
  );
};

export default SignUpStep;