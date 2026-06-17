import { useEffect, useRef, type RefObject } from 'react';

/**
 * Applies a subtle vertical parallax translateY to the returned ref's element.
 * The element drifts at `factor` x scrollY pixels (default 0.15).
 * Only active while the user is within the height of the hero section.
 * Fully respects `prefers-reduced-motion`.
 */
export function useParallax<T extends HTMLElement>(
  factor: number = 0.15
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Measure the hero section once at mount; reuse for the scroll handler
    const heroEl = el.closest<HTMLElement>('#hero');
    const heroHeight = heroEl?.offsetHeight ?? window.innerHeight;

    const onScroll = (): void => {
      const scrollY = window.scrollY;
      if (scrollY <= heroHeight) {
        el.style.transform = `translateY(${scrollY * factor}px)`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [factor]);

  return ref;
}
