import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data/projectsData";
import { Link2Icon, GithubIcon, XIcon } from "lucide-react";

interface ProjectModalProps {
  project: typeof projectsData[0];
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    document.addEventListener("keydown", handleKeyDown);
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleBackdropClick}
    >
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
      >
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full aspect-video object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Close modal"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                {tech}
              </Badge>
            ))}
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {project.longDescription || project.description}
          </p>
          
          {project.features && (
            <>
              <h4 className="text-lg font-semibold mb-3">Key Features</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}
          
          {project.challenges && (
            <>
              <h4 className="text-lg font-semibold mb-3">Challenges & Solutions</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {project.challenges}
              </p>
            </>
          )}
          
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              {project.liveLink && (
                <Button asChild className="bg-primary hover:bg-blue-700">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <Link2Icon className="h-4 w-4 mr-2" /> Live Demo
                  </a>
                </Button>
              )}
              
              {project.repoLink && (
                <Button asChild variant="outline" className="bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-900 dark:hover:bg-gray-600">
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-4 w-4 mr-2" /> Repository
                  </a>
                </Button>
              )}
            </div>
            
            {project.completionDate && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Completed: {project.completionDate}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
