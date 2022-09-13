import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function TopPage() {
  const { path } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return null;
}
