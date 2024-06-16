"use client";
import { cn } from "@/utils/cn";
import MagicButton from "@/components/MagicButton";
import dynamic from "next/dynamic";
import Lottie from "react-lottie"
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import { BackgroundGradientAnimation } from "./BGGradientAnimation";
import "@/app/globals.css"
const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[15rem] col-span-3  responsiveGrid px-10 grid-cols-5 pb-10 md:grid-cols-5 gap-4 max-w-7xl  ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  spareImg,
  img,
  imgClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  id: number;
  spareImg:string,
  img: string;
  imgClassName: string;
}) => {
  const [isCopied, setisCopied] =useState(false)
  const handleClick = ():void=>{
    navigator.clipboard.writeText("nikhilwankhede0707@gmail.com")
    setisCopied(true)
  }
    return (
    <div
      className={cn( 
        ` flex relative  responsiveGridItems overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white border border-transparent   space-y-4 `,
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {id == 1 && (
        <>
          <div className="z-20 h-[60px]  group-hover/bento:translate-x-2 transition duration-200">
            <div className="font-sans font-normal text-white">
              {description}
            </div>
            <div className="font-sans md:text-3xl lg:text-2xl font-bold text-neutral-600 z-30 dark:text-neutral-200 pt-5">
              {title}
            </div>
          </div>
          <div className={`"flex justify-center "}`}>
            <div className="absolute top-0 left-0 w-full h-full">
              {img && (
                <>
                  <img
                    src={img}
                    alt={img}
                    className={
                      imgClassName + " " + "object-cover object-center "
                    }
                  />
                </>
              )}
            </div>
          </div>wSA
        </>
      )}
      {id == 4 && (
        <>
          <div className="z-20 group-hover/bento:translate-x-2 transition duration-200">
            <div className="font-sans font-normal text-white">
              {description}
            </div>
            <div className="font-sans md:text-3xl lg:text-2xl font-bold text-neutral-600 z-30 dark:text-neutral-200 mb-2 mt-2">
              {title}
            </div>
          </div>
          <div className={`"flex justify-between flex-col items-center`}>
            <div className="absolute top-0 left-0 w-full h-[50%]">
              {img && (
                <>
                  <img
                    src={img}
                    alt={img}
                    className={
                      imgClassName + " " + "object-cover object-center "
                    }
                  />
                </>
              )}
            </div>
            <div className="absolute top-[65%] left-[45%] w-full h-full">
              {img && (
                <>
                  <img
                    src={spareImg}
                    alt={spareImg}
                    className={
                      imgClassName + " " + "object-cover object-center "
                    }
                  />
                </>
              )}
            </div>
          </div>wSA
        </>
      )}
      {id == 5 && (
        <>
                <BackgroundGradientAnimation className="pt-4 ">
            <div className=" flex gap-2 flex-col relative  z-50  justify-between py-10 items-center">
              <div className=" text-white myText font-bold text-center">
                {title}
              </div>
              <MagicButton className="min-w-60 md:min-w-32   " handleClick={handleClick} title={isCopied?`Email Copied`:`Copy My Email Address`}/>
              <Lottie style={{
              }} height={50}
                width={300}  options={{
                  loop:isCopied,
                  autoplay:isCopied,
                  animationData:animationData,
                  rendererSettings:{
                    preserveAspectRatio:"xMidYMid slice"
                    }
                    }}
                    />
            </div>
                    </BackgroundGradientAnimation>
        </>
      )}
      {id == 6 && (
        <>
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            <div className="font-sans font-normal text-white">
              {description}
            </div>
            <div className="font-sans font-bold md:text-3xl lg:text-2xl text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
              {title}
            </div>
          </div>
          <div className={`flex justify-center  `}>
            <div className="absolute top-[25%] left-0 w-full h-full ">

              {img && (
                <>
                  <img
                    src={img}
                    alt={img}
                    className={
                      imgClassName + " " + "object-cover object-center "
                    }
                  />
                </>
              )}
            </div>
          </div>
        </>
      )}
      {id == 2 && (
        <>
          <div className=" group-hover/bento:translate-x-2 transition duration-200 font-sans font-normal text-white">{description}
          <div className="font-sans text-center text-2xl font-bold  mx-auto text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          </div>
          <div className="absolute top-[0%] -left-4 w-full h-[60%] object-contain ">
            <GlobeDemo />
          </div>
        </>
      )}
      {id == 3 && (
        <>
          
        <div className="flex  items-center justify-start w-50 ">
          <div className="font-sans font-normal text-white-200 lg:text-sm ">
            {description}
          <div className="font-sans text-center text-2xl lg:text-lg font-bold  mx-auto text-neutral-600 dark:text-neutral-200 ">
            {title}
          </div>
        </div>
          </div>
          <div className="flex gap-2 top-[-10%] absolute -right-2">
            <div className="mt-8 flex gap-6 flex-col lg:-right-2 ">
              {["React.js", "Vue.js", "MongoDB",''].map((item, index) => {
                return (
                  <span
                    key={index}
                    className="bg-[#10132e] min-w-20 lg:min-w-16 min-h-9 lg:min-h-7 text-white-200 p-2 rounded-xl"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
            <div className="-right-6 flex gap-6 flex-col lg:-right-2 ">
              {['',"AWS", "SQL", "Next Js"].map((item, index) => {
                return (
                  <span
                    key={index}
                    className="bg-[#10132e] min-w-20 min-h-9 lg:min-w-16  lg:min-h-7 text-white-200 p-2 rounded-xl"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
