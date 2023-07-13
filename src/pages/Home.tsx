import { Button } from "@/components/ui/button";
import banner from "@/assets/images/banner.png";
import hero from "@/assets/images/hero.png";
import { Link } from "react-router-dom";
import Footer from "@/layouts/Footer";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-4xl">Now its ready your  project</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
