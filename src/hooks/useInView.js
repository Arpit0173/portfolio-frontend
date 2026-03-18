import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that uses Intersection Observer to detect
 * when an element enters the viewport.
 *
 * @param {Object} options - IntersectionObserver options
 * @returns {[React.RefObject, boolean]}
 */
export default function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once visible, stop observing (animate only once)
          observer.unobserve(element);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}