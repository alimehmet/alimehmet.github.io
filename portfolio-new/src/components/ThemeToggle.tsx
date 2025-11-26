"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-muted-foreground">Light</span>
        <div className="w-16 h-8 rounded-full bg-primary/20 border border-primary/30" />
        <span className="text-sm font-medium text-muted-foreground">Dark</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {/* Light Label */}
      <span
        className={`text-sm font-medium transition-colors ${
          !isDark ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        Light
      </span>

      {/* Toggle Switch */}
      <button
        onClick={toggleTheme}
        className="relative w-16 h-8 rounded-full bg-primary/20 border border-primary/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {/* Stars/dots decoration for dark mode */}
        <motion.div
          className="absolute right-2 top-1.5 flex flex-col gap-1"
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          <div className="w-1 h-1 rounded-full bg-white/40 ml-1" />
        </motion.div>

        {/* Toggle Circle */}
        <motion.div
          className="absolute top-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center"
          animate={{
            left: isDark ? "calc(100% - 28px)" : "4px",
            backgroundColor: isDark ? "#1e1e2e" : "#ffffff",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          {/* Sun icon for light mode */}
          <motion.svg
            className="w-4 h-4 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            animate={{ opacity: isDark ? 0 : 1, scale: isDark ? 0.5 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </motion.svg>

          {/* Moon icon for dark mode */}
          <motion.svg
            className="w-4 h-4 text-blue-300 absolute"
            fill="currentColor"
            viewBox="0 0 20 20"
            animate={{ opacity: isDark ? 1 : 0, scale: isDark ? 1 : 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </motion.svg>
        </motion.div>
      </button>

      {/* Dark Label */}
      <span
        className={`text-sm font-medium transition-colors ${
          isDark ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        Dark
      </span>
    </div>
  );
}
