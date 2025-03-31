import { motion } from "framer-motion";
import { skillsData } from "@/data/skillsData";
import { Progress } from "@/components/ui/progress";
import { 
  FaLinkedinIn, 
  FaGithub
} from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am a business analyst with a strong background in digital transformation, data analytics, and product development. My journey started with an interest in technology and problem-solving, which led me to work on various projects involving web development, ERP implementation, and process automation. I specialize in analyzing business requirements, identifying pain points, and implementing data-driven strategies to optimize workflows and improve efficiency.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Throughout my career, I have collaborated with stakeholders, developers, and designers to bridge the gap between business needs and technological advancements. I focus on delivering actionable insights, improving decision-making, and creating seamless digital experiences for users. My experience in handling Smart City projects has further enhanced my ability to work on large-scale initiatives that impact communities and drive innovation.
            </p>
            <div className="mb-6">
              <span className="font-medium text-gray-700 dark:text-gray-200">Core Competencies:</span>
              <div className="mt-3 space-y-2">
                {[
                  "Business Analysis & Process Improvement",
                  "Product Development & Management",
                  "Data-Driven Decision Making",
                  "Web & Mobile App Development",
                  "ERP Implementation & Optimization",
                  "Agile & Scrum Methodologies",
                  "Stakeholder Communication & Collaboration",
                  "Digital Transformation Strategies"
                ].map((competency, index) => (
                  <motion.div 
                    key={competency}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.2 + index * 0.08,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <motion.span 
                      className="text-primary mr-2 font-bold"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.08 }}
                    >
                      ✔
                    </motion.span>
                    <span className="text-gray-600 dark:text-gray-300">{competency}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              className="space-y-3 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="font-medium text-primary mr-2">🎯</span>
                <div>
                  <span className="font-medium">Current Role:</span> 
                  <span className="text-gray-600 dark:text-gray-300"> Business Analyst at TACT, working on Smart City Projects, managing digital solutions for governance and public services.</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="font-medium text-primary mr-2">💡</span>
                <div>
                  <span className="font-medium">Interests:</span> 
                  <span className="text-gray-600 dark:text-gray-300"> Data Analytics, Product Management, and Digital Transformation.</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="font-medium text-primary mr-2">🔥</span>
                <div>
                  <span className="font-medium">Goal:</span> 
                  <span className="text-gray-600 dark:text-gray-300"> To leverage technology and data-driven insights to build and scale innovative tech products that solve real-world problems.</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.a 
                href="https://www.linkedin.com/in/sandeepwork" 
                target="_blank" 
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full transition-all duration-300" 
                aria-label="LinkedIn" 
                title="LinkedIn"
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: "#0077b5",
                  color: "white" 
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedinIn className="text-gray-700 dark:text-gray-300" />
              </motion.a>
              <motion.a 
                href="https://github.com/Sandeep24402" 
                target="_blank" 
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full transition-all duration-300" 
                aria-label="GitHub" 
                title="GitHub"
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: "#333",
                  color: "white" 
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-gray-700 dark:text-gray-300" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Skills</h3>
            
            {/* Analytics Skills */}
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-primary dark:text-primary">Analytics</h4>
              <div className="space-y-3">
                {skillsData.frontend.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="skill-item"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >{skill.level}%</motion.span>
                    </div>
                    <motion.div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary" 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Business Skills */}
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-primary dark:text-primary">Business</h4>
              <div className="space-y-3">
                {skillsData.backend.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="skill-item"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      >{skill.level}%</motion.span>
                    </div>
                    <motion.div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary" 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Other Skills */}
            <div>
              <h4 className="text-lg font-medium mb-3 text-primary dark:text-primary">Tools & Others</h4>
              <div className="flex flex-wrap gap-2">
                {skillsData.tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="py-1 px-3 bg-gray-100 dark:bg-gray-700 text-sm font-normal transition-all duration-300 hover:shadow-md hover:border-primary"
                    >
                      {tool}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
