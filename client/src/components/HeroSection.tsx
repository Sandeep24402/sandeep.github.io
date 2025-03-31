import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/new-hero-image.jpeg";
import resumePDF from "@/assets/Sandeep_Analyst_Resume.pdf";

export default function HeroSection() {
  const typewriterText = useTypewriter({
    phrases: ['Business Analyst', 'Aspiring Data Analyst', 'Digital Product Enthusiast'],
    typingSpeed: 120,
    deletingSpeed: 50,
    delayBetweenPhrases: 1500
  });

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              type: "spring", 
              stiffness: 50 
            }}
          >
            <motion.p 
              className="text-primary dark:text-primary font-medium mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm
            </motion.p>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.span
                initial={{ display: "inline-block" }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Sandeep Sharma 🚀
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-4 h-[40px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="typewriter border-r-[3px] border-current animate-[cursor-blink_1s_step-end_infinite]">
                {typewriterText}
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 mb-8 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Passionate about solving business problems with technology and data-driven insights. I thrive on building digital products that create impact. Let's connect and build something amazing together!
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-primary hover:bg-blue-600 transition-all duration-300">
                  <a href={resumePDF} download="Sandeep_Sharma_Resume.pdf">Download Resume</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <a href="#contact">Contact Me</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hidden md:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.7, 
              delay: 0.3,
              type: "spring",
              stiffness: 50
            }}
          >
            <motion.div 
              className="relative z-10 rounded-lg overflow-hidden shadow-xl border-8 border-white dark:border-gray-800"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)"
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.img 
                src={heroImage} 
                alt="Sandeep Sharma portrait" 
                className="w-full h-auto"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
            <motion.div 
              className="absolute top-1/4 -right-12 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.div 
              className="absolute bottom-1/4 -left-12 w-40 h-40 bg-secondary/20 rounded-full filter blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20 md:mt-24 flex justify-center"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5 
          }}
        >
          <a href="#about" className="text-3xl text-gray-400 hover:text-primary transition-colors">
            <ChevronDown />
          </a>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-100 dark:bg-green-900/20 rounded-full filter blur-3xl"></div>
    </section>
  );
}
