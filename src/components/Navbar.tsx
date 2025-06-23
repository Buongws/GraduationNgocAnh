"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/assets/logo.jpg";

export default function Navbar() {
  const pathname = usePathname();
  const isAlbumPage = pathname === "/album";

  return (
    <nav className="w-full bg-red from-primary via-secondary to-accent border-b border-[#a6192e]/20 shadow-3xl rounded-b-2xl sticky top-0 z-50 transition-all duration-500">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between bg-white">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="..."
            width={100}
            height={150}
            className="rounded-2xl border-2 border-[#a6192e] bg-white shadow-glow transition-transform duration-300 hover:scale-105"
          />
        </div>
      
        <div className="flex gap-6">
          {isAlbumPage ? (
            <Link
              href="/"
              className="text-white font-bold hover:underline underline-offset-4 transition-colors flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/20 shadow-md"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
              Quay lại
            </Link>
          ) : (
            <>
              <Link
                href="/"
                className="text-[#a6192e] font-bold hover:underline underline-offset-4 transition-colors px-4 py-2 rounded-xl hover:bg-white/20 shadow-md"
              >
                Trang chủ
              </Link>
              {/* <Link
                href="/album"
                className="text-[#a6192e] font-bold hover:underline underline-offset-4 transition-colors px-4 py-2 rounded-xl hover:bg-white/20 shadow-md"
              >
                Album ảnh
              </Link> */}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
