import { motion } from "framer-motion";
import { blogData } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">My Blog</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, design, and technology.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <motion.article 
              key={post.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="#" className="block">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full aspect-video object-cover"
                />
              </a>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" /> 
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> 
                    {post.readTime} min read
                  </span>
                </div>
                <a href="#" className="block">
                  <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </a>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <a href="#" className="text-primary font-medium hover:underline">
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <a href="#">
              View All Posts <span className="ml-2">→</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
