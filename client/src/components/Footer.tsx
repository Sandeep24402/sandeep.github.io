import { ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="py-8 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Sandeep Sharma. All rights reserved.
          </p>
          <p className="text-sm mt-2 md:mt-0 flex items-center">
            Designed & built with <span className="text-red-500 mx-1">❤</span>
          </p>
        </div>

        {/* Scroll to top button */}
        <div className="flex justify-center mt-6">
          <button 
            onClick={scrollToTop}
            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
