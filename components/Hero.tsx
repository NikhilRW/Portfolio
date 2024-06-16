import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/text-generate-effect";
function Hero() {
  return (
    <div className="w-full relative min-h-screen ">
      <div className="overflow-hidden ">
        <Spotlight
          className="-top-40  -left-10 h-screen md:-top-20 md:left-32"
          fill="white"
        />
        <Spotlight
          className="top-10  left-[90%] h-[80vh] w-[50vw] "
          fill="purple"
        />
        <Spotlight
          className="top-64 opacity-[0.8]  left-[60%] h-[50vh] w-[30vw]"
          fill="blue"
        />
      </div>
      <div className="">
        <div className="h-screen w-screen absolute top-0 left-0 dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.01]  flex items-center justify-center">
          <div className="absolute top-0 h-screen left-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-[#000319] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>
      <div className="title h-screen w-screen flex flex-col justify-center items-center">
        <h2 className="text-sm text-white-100 z-20 tracking-widest">Dynamic Web Magic With Next JS</h2>
      <TextGenerateEffect className="text-[50px] z-20 md:text-4xl text-center" words={"Transforming Concepts Into Seamlesss User Experience"} />
      <p className=" z-20 text-white-100 my-4 ">Hi I Am Nikhil, Next Js Developer Based In India </p>
      <Link href={"#about"}>
      <MagicButton title={"Show My Work"}/>
      </Link>
      </div>
    </div>
  );
}

export default Hero;
