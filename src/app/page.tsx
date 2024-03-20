import Banner from "@/components/banner";
import Experience from "@/components/experience";
import TechStack from "@/components/tech-stack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/banner-background.jpeg")' }}>
      <Banner />
      <TechStack />
      <Experience />
    </main>
  );
}
