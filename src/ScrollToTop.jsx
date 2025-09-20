import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Route change hone pe page top pe le aao
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
