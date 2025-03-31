import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function Home() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors min-h-screen">
      {/* Progress Bar */}
      <div 
        className="h-[3px] bg-gradient-to-r from-primary via-accent to-secondary fixed top-0 left-0 z-50"
        style={{ width: `${scrollProgress}%` }} 
      />
      
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
