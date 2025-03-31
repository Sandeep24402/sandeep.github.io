import { useState, useEffect } from "react";

interface TypewriterOptions {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenPhrases?: number;
}

export function useTypewriter({
  phrases,
  typingSpeed = 120,
  deletingSpeed = 50,
  delayBetweenPhrases = 1500
}: TypewriterOptions): string {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        // Remove a character
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        // Add a character
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }
      
      // Determine if we're done typing or deleting
      if (!isDeleting && charIndex === currentPhrase.length - 1) {
        // Done typing, start deleting after a pause
        setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenPhrases);
      } else if (isDeleting && charIndex === 0) {
        // Done deleting, move to next phrase
        setIsDeleting(false);
        setPhraseIndex(prev => (prev + 1) % phrases.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [phrases, phraseIndex, charIndex, isDeleting, typingSpeed, deletingSpeed, delayBetweenPhrases]);

  return text;
}
