import React from "react";
import { projects } from "@/data/data";
import { PinContainer } from "./ui/PinContainer";
import { FaLocationArrow } from "react-icons/fa6";
function RecentProjects() {
  return (
    <div className="py-20">
      <h1 className="heading text-white ">
        A Small Selection Of
        <p className="text-purple">Recent Projects</p>
      </h1>
      <div className="flex text-white flex-wrap item-center justify-center p-4 gap-x-20 gap-y-8 sm:gap-y-24 mt-10 ">
        {projects.map(({ id, title, des, img, iconLists,link }) => {
          return (
            <>
              <div id="projects"
                key={id}
                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[480px] w-[75vw]"
                >
                <PinContainer
                  title={title}
                  href={link}
                  >
                    <div className="relative flex-col
                    flex items-center object-contain justify-center lg:rounded-3xl  sm:w-[480px] w-[75vw] sm:h-[40vh] overflow-hidden h-[30vh] max-h-[300px]
                    ">
                        <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                            <img src="bg.png" alt="bg-photo" />
                        </div>
                        <img src={img} alt={title} 
                        className="absolute z-10 w-[92%] h-[92%]  bottom-0 object-center object-contain "/>
                    </div>
                        <h2 className="font-bold lg:text-xl mt-6 md:text-xl text-base line-clamp-1">
                            {title}
                        </h2>
                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                            {des}
                        </p>
                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex  items-center">
                                {iconLists.map((icon,index) => {
                                    return (
                                        <div key={index}
                                        style={
                                            {transform:`
                                            translateX(-${5*index+2}px)
                                            `}}
                                        className="border rounded-full bg-black  border-white/[0.2]"
                                        >
                                            <img src={icon} alt={icon}
                                            className="p-2 lg:w-10 lg:h-10 w-8 h-8 
                                            "
                                            />
                                            
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex justify-center gap-1 items-center">
                                <p className="lg:text-xl md:text-lg sm:text-sm text-purple">Check Live Site</p>
                                <FaLocationArrow className="ms-3" color="#CBACF9" size={30}/>
                            </div>

                        </div>
                </PinContainer>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default RecentProjects;
