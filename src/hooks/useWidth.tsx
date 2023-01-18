import { useEffect, useState } from "react";


export const useWidth = (): number => {
  const [width, setWidth] = useState<number>(0);

  const handleWindowWidth = () => {
    setWidth(window.outerWidth);
  }

  useEffect(() => {
    handleWindowWidth();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth);

    return () => window.removeEventListener('resize', handleWindowWidth);
  }, [width])

  return width;
}
