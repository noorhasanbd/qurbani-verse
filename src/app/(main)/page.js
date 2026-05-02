import HeroSection from "@/components/homepage/hero";
import Image from "next/image";
import data from "@/lib/data/data.json";
import FeaturedAnimals from "@/components/homepage/FeaturedAnimals";
import QurbaniTips from "@/components/homepage/QurbaniTips";

export default async function Home() {
  console.log(data);

  return (
    <div>
      <HeroSection />

      <FeaturedAnimals data={data} />

      <QurbaniTips/>
    </div>
  );
}
