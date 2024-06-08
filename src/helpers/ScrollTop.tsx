import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Devolvemos null ya que este componente no renderiza nada visualmente
  return null;
};
