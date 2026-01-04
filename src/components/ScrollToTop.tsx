import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component
 * Forces the browser to scroll to top (0,0) on every route change.
 * This ensures consistent navigation experience across all pages.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top with a slight delay to ensure route has fully changed
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [pathname]);

  return null;
}
