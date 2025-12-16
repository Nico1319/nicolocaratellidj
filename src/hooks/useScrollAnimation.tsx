import { useEffect, useRef, useState, useCallback } from "react";

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

// Hook for parallax images
export function useParallax(speed: number = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * speed;
      setOffset(rate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
}

// Hook for element parallax based on viewport position
export function useElementParallax(intensity: number = 50) {
  const ref = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState({ y: 0, scale: 1, rotate: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      
      // -1 when element is at top, 0 when centered, 1 when at bottom
      const position = (elementCenter - viewportCenter) / windowHeight;
      
      setTransform({
        y: position * intensity,
        scale: 1 - Math.abs(position) * 0.05,
        rotate: position * 2,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [intensity]);

  return { ref, transform };
}

// Hook for smooth scroll to section
export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  }, []);

  return scrollToSection;
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

export const appleImageRevealStyles = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "scale(1) translateY(0)" : "scale(1.1) translateY(20px)",
  filter: isVisible ? "blur(0px) brightness(1)" : "blur(15px) brightness(0.5)",
  transition: `all 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
});

export const appleRotateStyles = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible 
    ? "perspective(1000px) rotateY(0deg) translateX(0)" 
    : "perspective(1000px) rotateY(-15deg) translateX(-50px)",
  filter: isVisible ? "blur(0px)" : "blur(10px)",
  transition: `all 1.1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
});

export const appleZoomStyles = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "scale(1)" : "scale(0.7)",
  filter: isVisible ? "blur(0px)" : "blur(20px)",
  transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
});
