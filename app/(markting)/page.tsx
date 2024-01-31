import { Button } from "@/components/ui/button";
import Image from "next/image";
import Heading from "./_components/Heading";
import Heros from "./_components/Heros";
import Footer from "./_components/Footer";

export default function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10 dark:bg-[#1f1f1f]">
        <Heading />
        <Heros />
        <Footer/>
      </div>
    </div>
  );
}
