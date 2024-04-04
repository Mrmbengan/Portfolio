import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-12">
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <ContactSection/>
        <Footer/>
      </div>
    </main>
  );
}
