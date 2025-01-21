import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useBooleanState } from "./GlobalContext";

interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Header = ({ toggleTheme, isDark }: HeaderProps) => {
  const { value } = useBooleanState();
  const router = useRouter();
  const pathname = usePathname();
  const [menuClass, setMenuClass] = useState("hide");
  const toggleMenu = () => {
    if (menuClass === "hide") {
      setMenuClass("menu-show");
    } else {
      setMenuClass("hide");
    }
  };

  useEffect(() => {
    // Set menu to hide on route change
    setMenuClass("hide");
  }, [router.asPath]);

  return (
    <div className="bg-header w-screen h-max flex flex-col">
      <div className="bg-header flex flex-row justify-between p-4 items-center w-[calc(100vw)] h-[calc(10vh)] fixed z-10">
        <div className="logo sm:w-[calc(30vw)] w-[calc(50vw)] sm:h-[calc(10vh)] flex flex-col justify-center items-center">
          <Image
            src={`https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg`}
            alt="company logo"
            width={100}
            height={100}
            className="rounded-full"
          ></Image>
        </div>
        <div className="sm:w-[calc(70vw)] w-[calc(50vw)] h-[calc(10vh)] flex flex-row justify-end items-center gap-10 ">
          {pathname.startsWith("/admin") ? (
            <div className="flex flex-row gap-3 justify-center items-center">
              {!value ? (
                <div className="text-xl flex flex-row gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                  <p className="font-semibold font-body tracking-wider text-xl text-red-500">
                    LOCKED
                  </p>
                </div>
              ) : (
                <div className="flex flex-row gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                  <p className="font-semibold font-body tracking-wider text-xl text-green-500">
                    ADMIN
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="links hidden sm:flex flex-row gap-10 justify-end items-center tracking-wide  font-extralight text-sm font-body">
              <Link href="/" className="group relative inline-block">
                <p className="text-foreground ">Home</p>
                <div
                  className={`absolute -bottom-1  left-0 h-[2px] ${
                    pathname === "/" ? "w-full bg-foreground" : "w-0 bg-input"
                  } transition-all duration-300 group-hover:w-full`}
                ></div>
              </Link>

              <Link href="/properties" className="group relative inline-block">
                <p className="text-foreground ">Properties</p>
                <div
                  className={`absolute -bottom-1 left-0 h-[2px] ${
                    pathname === "/properties"
                      ? "w-full bg-foreground"
                      : "w-0 bg-input"
                  } transition-all duration-300 group-hover:w-full`}
                ></div>
              </Link>

              <Link href="/contact" className="group relative inline-block">
                <p className="text-foreground ">Contact</p>
                <div
                  className={`absolute -bottom-1 left-0 h-[2px] ${
                    pathname === "/contact"
                      ? "w-full bg-foreground"
                      : "w-0 bg-input"
                  } transition-all duration-300 group-hover:w-full`}
                ></div>
              </Link>

              <Link href="/" className="group relative inline-block">
                <p className="text-foreground ">FAQ</p>
                <div
                  className={`absolute -bottom-1 left-0 h-[2px] ${
                    pathname === "/faqs"
                      ? "w-full bg-foreground"
                      : "w-0 bg-input"
                  } transition-all duration-300 group-hover:w-full`}
                ></div>
              </Link>

              <Link href="/about" className="group relative inline-block">
                <p className="text-foreground ">About Us</p>
                <div
                  className={`absolute -bottom-1 left-0 h-[2px] ${
                    pathname === "/about"
                      ? "w-full bg-foreground"
                      : "w-0 bg-input"
                  } transition-all duration-300 group-hover:w-full`}
                ></div>
              </Link>
            </div>
          )}

          {isDark ? (
            <button onClick={toggleTheme}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-foreground"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </button>
          ) : (
            <button onClick={toggleTheme}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-foreground"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </button>
          )}

          <button className="sm:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`${menuClass}`}>
        <div
          className="w-screen h-[calc(100vh)]  grid lg:grid-cols-2 grid-cols-1 text-foreground "
          id="menu"
        >
          <div className="w-full h-full flex flex-col justify-center items-center gap-8 relative">
            <Link
              className="font-body font-semibold text-xl tracking-wide hover:text-orange-300 hover:translate-x-3 hover:cursor-pointer"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-body font-semibold text-xl tracking-wide hover:text-orange-300 hover:translate-x-3 hover:cursor-pointer"
              href="/properties"
            >
              Properties
            </Link>
            <Link
              className="font-body font-semibold text-xl tracking-wide hover:text-orange-300 hover:translate-x-3 hover:cursor-pointer"
              href="/contact"
            >
              Contact Us
            </Link>
            <Link
              className="font-body font-semibold text-xl tracking-wide hover:text-orange-300 hover:translate-x-3 hover:cursor-pointer"
              href="/"
            >
              FAQs
            </Link>
            <Link
              className="font-body font-semibold text-xl tracking-wide hover:text-orange-300 hover:translate-x-3 hover:cursor-pointer"
              href="/about"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
