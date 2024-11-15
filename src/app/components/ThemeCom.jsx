"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeProvider({ children }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className={theme}>
      <div
        className="bg-white text-gray-800 dark:text-gray-100 
      dark:bg-[rgb(10,14,26)] min-h-screen">
        {children}
      </div>
    </div>
  );
}
