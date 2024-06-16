import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data/data";
import Clients from "@/components/Clients";
import WorkExperience from "@/components/WorkExperience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
    <main className="w-full min-h-screen overflow-clip bg-[#000319]">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
      </div>
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <WorkExperience/>
        <Approach/>
        <Footer/>
    </main>
    </>
  );
}
