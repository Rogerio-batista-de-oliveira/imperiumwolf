import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Faz o scroll subir suavemente ou instantaneamente
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;