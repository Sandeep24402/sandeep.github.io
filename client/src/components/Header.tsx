import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { Link } from "wouter";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll event to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const headerClasses = `
    fixed top-0 left-0 right-0 
    ${isScrolled ? 'shadow-sm' : ''} 
    bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-40 transition-colors
  `;

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-primary dark:text-primary">
            &lt;SS/&gt;
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="hover:text-primary dark:hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-yellow-300" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-yellow-300" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center space-y-8 text-2xl"
          >
            <button 
              onClick={closeMenu}
              className="absolute top-4 right-4 p-2 text-3xl"
              aria-label="Close menu"
            >
              <XIcon className="h-6 w-6" />
            </button>
            
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="hover:text-primary dark:hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
