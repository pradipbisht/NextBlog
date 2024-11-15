"use client";
import { SignUp } from "@clerk/nextjs";
import { dark, light } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function SignUpPage() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center h-screen">
      <SignUp
        appearance={{
          baseTheme: theme === "dark" ? dark : light,
        }}
      />
    </div>
  );
}
