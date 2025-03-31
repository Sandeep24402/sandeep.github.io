import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projectsData";
import { Button } from "@/components/ui/button";
import { Link2Icon, GithubIcon, DribbbleIcon } from "lucide-react";
import ProjectModal from "@/components/ProjectModal";

// Define the project type to match our data structure
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
  liveLink?: string;
  repoLink?: string;
  designLink?: string;
  completionDate: string;
  longDescription?: string;
  challenges?: string;
};

type ProjectCategory = "all" | "web" | "mobile" | "design";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  const handleFilterClick = (filter: ProjectCategory) => {
    setActiveFilter(filter);
  };

  const filteredProjects = projectsData.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  const openProjectModal = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, personal projects, and contributions to open source.
          </p>
        </motion.div>
        
        {/* Project Filters */}
        <motion.div 
          className="flex justify-center flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant={activeFilter === "all" ? "default" : "outline"}
              className={activeFilter === "all" ? "bg-primary text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"}
              onClick={() => handleFilterClick("all")}
            >
              All
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeFilter === "web" ? "default" : "outline"}
              className={activeFilter === "web" ? "bg-primary text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"}
              onClick={() => handleFilterClick("web")}
            >
              Web Apps
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeFilter === "mobile" ? "default" : "outline"}
              className={activeFilter === "mobile" ? "bg-primary text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"}
              onClick={() => handleFilterClick("mobile")}
            >
              Mobile
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeFilter === "design" ? "default" : "outline"}
              className={activeFilter === "design" ? "bg-primary text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"}
              onClick={() => handleFilterClick("design")}
            >
              UI/UX
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * (project.id % 3),
                type: "spring",
                stiffness: 50
              }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative aspect-video overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <p className="text-sm text-gray-200">{project.technologies.join(", ")}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.liveLink && (
                      <motion.a 
                        href={project.liveLink} 
                        className="text-primary hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} live site`}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Link2Icon className="h-5 w-5" />
                      </motion.a>
                    )}
                    {project.repoLink && (
                      <motion.a 
                        href={project.repoLink} 
                        className="text-primary hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} repository`}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <GithubIcon className="h-5 w-5" />
                      </motion.a>
                    )}
                    {/* Design link is omitted as it's not currently used in the data */}
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300"
                      onClick={() => openProjectModal(project)}
                    >
                      View Details
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={closeProjectModal} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
