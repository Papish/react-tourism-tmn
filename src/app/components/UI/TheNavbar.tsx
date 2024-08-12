"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function TheNavbar() {
  const router = usePathname();
  const isHomePage = router === "/";
  const [isNavVisible, setNavVisible] = useState(false);

  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 sticky-header ${
        !isHomePage && "bg-white border-b border-slate-200"
      }`}
    >
      <nav
        className="flex items-center justify-between px-20 py-2"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-24 w-auto leading-none"
              src="/images/logo.png"
              alt=""
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="border-2 border-white -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setNavVisible(true)}
          >
            <span className="sr-only">Open main menu</span>
            {isHomePage ? (
              <Image
                className="h-4 w-auto"
                src="/menu.svg"
                width={100}
                height={100}
                alt="menu"
              />
            ) : (
              <Image
                className="h-4 w-auto"
                src="/menu-black.svg"
                width={100}
                height={100}
                alt="menu"
              />
            )}
          </button>
        </div>

        <div
          className={`hidden lg:flex lg:gap-x-12 ${
            isHomePage ? "text-white" : "text-black"
          }`}
        >
          <Link href="/" className="text-sm font-semibold leading-6">
            Home
          </Link>
          <Link
            href="/#popular-packages"
            className="text-sm font-semibold leading-6"
          >
            Packages
          </Link>
          <Link
            href="/#popular-destinations"
            className="text-sm font-semibold leading-6"
          >
            Destinations
          </Link>
          <Link href="/" className="text-sm font-semibold leading-6">
            Company
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </nav>

      {isNavVisible && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-50"
            onClick={() => setNavVisible(false)}
          ></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-4 w-auto"
                  src="/image/logo.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </a>
              <button
                onClick={() => setNavVisible(false)}
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <Image
                  className="h-4 w-auto"
                  src="/cross.svg"
                  alt=""
                  width={100}
                  height={100}
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </Link>
                  <Link
                    href="/#popular-packages"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Packages
                  </Link>
                  <Link
                    href="/#popular-destinations"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </Link>
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </Link>
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
