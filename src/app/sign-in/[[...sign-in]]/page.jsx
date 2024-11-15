"use client";
import { SignIn } from "@clerk/nextjs";
import { dark, light } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function Page() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center mt-4">
      <SignIn
        appearance={{
          baseTheme: theme === "dark" ? dark : light,
        }}
      />
    </div>
  );
}
