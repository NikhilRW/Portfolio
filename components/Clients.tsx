import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data/data";
function Clients() {
  return (
    <>
    <div id="testimonials">

      <div className="py-20">
        <h1 className="heading text-white ">
          Kind Words From
          <p className="text-purple">From Satisfied Clients</p>
        </h1>
        <div className="flex flex-col items-center max-lg:mt-10 sm:mt-8">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
              />
            <div className="flex flex-wrap lg:gap-x-20 md:gap-x-16 sm:gap-x-8 px-10 gap-x-4 mt-10 max-lg:mt-10  ">
                {companies.map(({id,img,name,nameImg})=>{
                    return <div key={id} className="flex md:max-w-60 max-w-32 gap-2 sm:mt-4">
                        <img src={img} alt="img" className="md:w-10 sm:w-5 w-5" />
                        <img src={nameImg} alt={"nameImg"} className="md:w-24 sm:w-10 w-10" />
                     </div>
                })}

            </div>
        </div>
      </div>
            </div>
    </>
  );
}

export default Clients;
