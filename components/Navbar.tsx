"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#huts", label: "Huts" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
  ];

  const themeOptions = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-transparent backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        {/* Left: Logo */}
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/logoo.png"
            alt="Logo"
            width={120}
            height={120}
            priority
            className="w-[115px] h-auto"
          />
        </Link>

        {/* Center: Desktop Navigation */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-link relative text-gray-800 dark:text-gray-200 transition-colors
                  hover:text-blue-500 dark:hover:text-blue-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Theme + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Theme Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {theme === "dark" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="p-1 bg-white dark:bg-gray-900 rounded-md shadow-lg border border-gray-200 dark:border-gray-700"
            >
              {themeOptions.map((item) => (
                <DropdownMenuItem
                  key={item.value}
                  onClick={() => setTheme(item.value)}
                  className={`cursor-pointer rounded-md px-3 py-2 transition-colors
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    ${
                      theme === item.value
                        ? "font-semibold text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-200"
                    }`}
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
       <div className="md:hidden">
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon">
        <Menu className="h-5 w-5" />
      </Button>
    </SheetTrigger>
    <SheetContent
      side="left"
      className="w-64 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <ul className="flex flex-col gap-4 mt-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="nav-link block px-2 py-1 rounded 
                         text-gray-800 dark:text-gray-200
                         hover:bg-gray-100 dark:hover:bg-gray-800 
                         hover:text-blue-500 dark:hover:text-blue-400
                         transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button
          className="w-full bg-blue-500 text-white hover:bg-blue-600 
                     dark:bg-blue-600 dark:hover:bg-blue-700"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Toggle Theme
        </Button>
      </div>
    </SheetContent>
  </Sheet>
</div>

        </div>
      </div>
    </nav>
  );
}
