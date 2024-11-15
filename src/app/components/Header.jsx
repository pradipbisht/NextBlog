"use client";
import React, { useState } from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();
  const router = useRouter;
  const path = router.pathname;

  return (
    <Navbar className="border-b-2">
      {/* Logo */}
      <Link
        href="/"
        className="self-center whitespace-nowrap text-sm md:text-lg lg:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white text-sm md:text-lg lg:text-xl">
          Mind&apos;s
        </span>
        <span className="ml-1 text-xs md:text-sm lg:text-base">Open</span>
      </Link>

      {/* Search Form */}
      <form className="hidden lg:block">
        <div className="relative">
          <TextInput
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-xs md:text-sm lg:text-base"
          />
          <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-base md:text-lg lg:text-xl" />
        </div>
      </form>

      {/* Search Icon for Mobile */}
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch className="text-sm md:text-base lg:text-lg" />
      </Button>

      {/* Action Buttons */}
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-14 h-10 hidden sm:inline"
          color="gray"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? (
            <FaSun className="text-xl" />
          ) : (
            <FaMoon className="text-xl" />
          )}
        </Button>
        <Link href="/sign-in">
          <Button className="text-xs md:text-sm lg:text-base">Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>

      {/* Navigation Links */}
      <Navbar.Collapse>
        <Link href="/">
          <Navbar.Link
            active={path === "/"}
            as={"div"}
            className="text-xs md:text-sm lg:text-base">
            Home
          </Navbar.Link>
        </Link>
        <Link href="/about">
          <Navbar.Link
            active={path === "/about"}
            as={"div"}
            className="text-xs md:text-sm lg:text-base">
            About
          </Navbar.Link>
        </Link>
        <Link href="/projects">
          <Navbar.Link
            active={path === "/projects"}
            as={"div"}
            className="text-xs md:text-sm lg:text-base">
            Projects
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
