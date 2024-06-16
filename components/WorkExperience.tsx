import { workExperience } from "@/data/data";
import React from "react";
import { Button } from "./ui/MovingBorderButton";
function WorkExperience() {
  return (
    <>
    <div id="workExpeience">
      <div className="py-20">
        <h1 className="heading flex justify-center items-center gap-4 text-white ">
          <p>My</p>
          <p className="text-purple">Work Experience</p>
        </h1>
        <div className="mt-12 grid lg:grid-cols-4  grid-cols-1 gap-10 w-full lg:px-8 md:px-6 sm:px-4 px-3">
                {
                    workExperience.map((card)=>{
                        return <Button
                        key={card.id}
                        borderRadius="1.75rem"
                        duration={Math.floor(Math.random()*10000+10000)}
                        className="
                        flex-1 text-white border-neutral-200 dark:border-slate-800
                        "
                        >
                            <div className="
                            flex lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2
                            ">
                                <img src={card.thumbnail} alt={card.thumbnail}
                                className="lg:w-32 md:w-20 w-16"
                                />
                                <div className="lg:ms-5">
                                    <h1 className="text-start text-xl md:text-2xl font-bold">
                                        {card.title}
                                    </h1>
                                    <p className="text-start  font-semibold">
                                        {card.desc}
                                    </p>

                                </div>
                            </div>
                        </Button>
                    })
                }

        </div>
      </div>
    </div>
    </>
  );
}

export default WorkExperience;
