import { useEffect, useState } from "react";

/**
 * Tracks which section is currently centred in the scroll container.
 * @param ids  Array of element IDs to observe (in DOM order).
 * @param scrollContainerId  ID of the scrolling element (defaults to "main-scroll").
 */
export function useScrollSpy(
  ids: string[],
  scrollContainerId = "main-scroll",
): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const root = document.getElementById(scrollContainerId) ?? null;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        // Pick the entry whose centre is closest to the container's centre
        const best = visible.reduce((a, b) =>
          a.intersectionRatio >= b.intersectionRatio ? a : b,
        );
        setActive(best.target.id);
      },
      {
        root,
        // Only fire when the section occupies the middle 30% of the container
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      },
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, scrollContainerId]);

  return active;
}
