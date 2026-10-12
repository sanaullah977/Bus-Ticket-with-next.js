"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavPath } from "@/app/NavPath";
import Button from "../Button/Button";
import BusIcon from "@/asset/Icons/BusIcon";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navMenu = [
    {
      item: "Home",
      path: NavPath.Home,
    },
    {
      item: "About",
      path: NavPath.About,
    },
    {
      item: "Destination",
      path: NavPath.Destination,
    },
    {
      item: "Search",
      path: NavPath.Search,
    },
  ];

  const isActive = (path) => pathname === path;

  const busButtonClass =
    "flex flex-row-reverse items-center justify-center gap-2.5 rounded-xl border border-Secondary bg-Secondary/5 px-4 py-2.5 font-Releway text-sm font-bold text-Secondary sm:px-6 sm:py-3 sm:text-base lg:px-7.5 lg:py-4 lg:text-lg";

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-white p-3 shadow sm:mt-5 sm:p-4 lg:mt-9">
          {/* Logo */}
          <Link
            href={NavPath.Home}
            className="shrink-0 text-2xl font-extrabold text-Primary sm:text-3xl lg:text-4xl"
          >
            P-Ticket
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 md:flex lg:gap-6">
            {navMenu.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={`whitespace-nowrap border-b-2 py-2 text-sm font-medium transition-colors lg:text-lg ${
                  isActive(item.path)
                    ? "border-Secondary text-Primary"
                    : "border-transparent text-Primary/70 hover:border-Secondary hover:text-Primary"
                }`}
              >
                {item.item}
              </Link>
            ))}
          </div>

          {/* Desktop Bus Button */}
          <div className="hidden md:block">
            <Button className={busButtonClass} title="Bus" icon={<BusIcon />} />
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <Button className={busButtonClass} title="Bus" icon={<BusIcon />} />

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-Primary/10 text-Primary"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="mt-2 space-y-1 rounded-xl bg-white p-3 shadow-md md:hidden">
            {navMenu.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-Secondary/10 text-Primary"
                    : "text-Primary/70 hover:bg-Secondary/5 hover:text-Primary"
                }`}
              >
                {item.item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
