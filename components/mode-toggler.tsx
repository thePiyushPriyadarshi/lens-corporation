"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted,setIsMounted] = React.useState(false);

  React.useEffect(()=>{
    setIsMounted(true)
  },[]);

  if(!mounted) return null;

  return (
    <>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <Moon />{" "}
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <Sun className="text-yellow-500" />{" "}
        </button>
      )}
    </>
  );
}
