"use client";

import { useState } from "react";

import { Wordmark } from "@/components/wordmark";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f4f6f8]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-14">
        <Wordmark />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1.5 text-sm font-medium text-[#4b5563] md:flex"
        >
          <a
            href="#specimen"
            className="flex min-h-[40px] items-center rounded-xl px-4 py-2 transition-all duration-150 hover:bg-white hover:text-[#0c0d0e] focus-visible:outline-2 focus-visible:outline-[#0c0d0e]"
          >
            Specimen
          </a>
          <a
            href="#collection"
            className="flex min-h-[40px] items-center rounded-xl px-4 py-2 transition-all duration-150 hover:bg-white hover:text-[#0c0d0e] focus-visible:outline-2 focus-visible:outline-[#0c0d0e]"
          >
            Collection
          </a>
          <a
            href="#comparison"
            className="flex min-h-[40px] items-center rounded-xl px-4 py-2 transition-all duration-150 hover:bg-white hover:text-[#0c0d0e] focus-visible:outline-2 focus-visible:outline-[#0c0d0e]"
          >
            Comparison
          </a>
          <a
            href="#guide"
            className="flex min-h-[40px] items-center rounded-xl px-4 py-2 transition-all duration-150 hover:bg-white hover:text-[#0c0d0e] focus-visible:outline-2 focus-visible:outline-[#0c0d0e]"
          >
            How to install
          </a>
          <a
            href="https://github.com/vinodjangid07/Pexelicons"
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: "#ffffff", color: "#0c0d0e" }}
            className="group/gh ml-2 flex min-h-[40px] items-center rounded-xl px-4 font-semibold transition-colors hover:!bg-[#0c0d0e] hover:!text-white focus-visible:outline-2 focus-visible:outline-[#0c0d0e]"
          >
            <span className="transition-colors group-hover/gh:!text-white">
              GitHub
            </span>
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-white p-2.5 text-[#0c0d0e] md:hidden focus-visible:outline-2 focus-visible:outline-[#0c0d0e]"
        >
          {mobileMenuOpen ? (
            <svg
              viewBox="0 0 20 20"
              className="h-5 w-5 fill-none stroke-current stroke-[2.2]"
            >
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 20 20"
              className="h-5 w-5 fill-none stroke-current stroke-[2.2]"
            >
              <path d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-[#e8ecf0] bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2 font-medium text-sm text-[#0c0d0e]">
            <a
              href="#specimen"
              onClick={closeMenu}
              className="flex min-h-[44px] items-center rounded-lg px-3 transition-colors hover:bg-[#f4f6f8]"
            >
              Specimen
            </a>
            <a
              href="#collection"
              onClick={closeMenu}
              className="flex min-h-[44px] items-center rounded-lg px-3 transition-colors hover:bg-[#f4f6f8]"
            >
              Collection
            </a>
            <a
              href="#comparison"
              onClick={closeMenu}
              className="flex min-h-[44px] items-center rounded-lg px-3 transition-colors hover:bg-[#f4f6f8]"
            >
              Comparison
            </a>
            <a
              href="#guide"
              onClick={closeMenu}
              className="flex min-h-[44px] items-center rounded-lg px-3 transition-colors hover:bg-[#f4f6f8]"
            >
              How to install
            </a>
            <a
              href="https://github.com/vinodjangid07/Pexelicons"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              style={{ backgroundColor: "#0c0d0e", color: "#ffffff" }}
              className="flex min-h-[48px] items-center justify-center rounded-xl px-4 font-semibold transition-colors hover:bg-[#252830]"
            >
              <span style={{ color: "#ffffff" }} className="text-white">
                GitHub repository
              </span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
