import { useEffect, useRef, useState } from "react";

const FadeIn = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.02 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-800 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
