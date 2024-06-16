"use client"
import React from 'react'
import { CanvasRevealEffect } from './ui/CanvasRevealEffect'
import { AnimatePresence, motion } from "framer-motion";
function Approach() {
  return (
  <section className='py-20' >
    <h1 className='lg:text-3xl justify-center gap-2 font-bold md:text-2xl sm:text-xl text-lg flex '>
        My <p className='text-purple'>Approach</p>
    </h1>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center  gap-4 mx-auto px-8">
        <Card title="Planning And Strategy" desc={`We'll collaborate to map out your
website'sgoals, target audience, and
key functionalities. We'll discuss things
like site structure, navigation, and`} icon={<AceternityIcon title='Phase 1'/>}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Development & Progress Update" desc={`Once we agree on the plan, I cue my lofi
playlist and dive into coding. From initial
sketches to polishedcode, I keep you
updated every step of the way.`} icon={<AceternityIcon title='Phase 2'/>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Development & Launch" desc={`This is where the magic happens! Based
on the approved design, I'll translate
everything into functional code, building
your website from the ground up.`} icon={<AceternityIcon title='Phase 3' />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
  </section >
  )
}
const Card = ({
  title,
  icon,
  children,
  desc
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  desc?: String;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
 
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="dark:text-white text-xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {desc}
        </h2>
        
      </div>
    </div>
  );
};
 
const AceternityIcon = ({title}:{title:string}) => {
  return (
    <button className="myText2 relative inline-flex h-12 overflow-hidden rounded-xl p-[1px]  focus:outline-none">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className={`inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 myText2 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl`}>
      {title}
    </span>
  </button>
  );
};
 
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default Approach