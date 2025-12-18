import { useEffect, useRef, useState } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  options: ScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate progress from 0 (element enters viewport) to 1 (element leaves viewport)
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight))
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, isVisible, scrollProgress };
}

// Animation style generators
export const appleRevealStyles = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "translateY(0) scale(1)" : "translateY(60px) scale(0.95)",
  filter: isVisible ? "blur(0px)" : "blur(12px)",
  transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
});

export const appleScaleStyles = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "scale(1)" : "scale(0.9)",
  filter: isVisible ? "blur(0px)" : "blur(8px)",
  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
});

export const appleSlideStyles = (isVisible: boolean, direction: "left" | "right" = "left", delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible 
    ? "translateX(0)" 
    : `translateX(${direction === "left" ? "-80px" : "80px"})`,
  filter: isVisible ? "blur(0px)" : "blur(10px)",
  transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
});

export const apple3DStyles = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible 
    ? "perspective(1000px) rotateX(0deg) translateY(0)" 
    : "perspective(1000px) rotateX(-10deg) translateY(40px)",
  filter: isVisible ? "blur(0px)" : "blur(8px)",
  transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
});
