import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { PiCopyrightThin } from "react-icons/pi";

const Footer = () => {
  // const page = 1;
  // const limit = 30;
  // const {
  //   data: properties,
  //   isLoading: propertiesLoading,
  //   isError: propertiesError,
  // } = useProperties(page, limit);
  // const { data: allProperties } = useAllProperties();
  return (
    <div className="w-screen h-max bg-header text-foreground flex flex-col pt-24 pb-10 justify-center items-center gap-12 overflow-x-hidden">
      <div className="sm:w-2/3 w-full h-max grid lg:grid-cols-4 grid-cols-1 place-items-center gap-6 px-3 sm:px-0">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="lg:col-span-2 w-full h-full flex flex-col gap-6 justify-start items-start"
        >
          <div className="w-full h-max flex-1">
            <h1 className="font-body font-bold md:text-5xl text-3xl tracking-widest">
              Company .
            </h1>
          </div>
          <div className="w-full h-max flex-1">
            <p className="font-heading font-extralight">
              Subscribe to stay upto date:
            </p>
          </div>
          <div className="w-full h-max flex-1">
            <label
              htmlFor="email"
              className="sm:w-3/4 w-full h-max relative flex flex-row justify-between"
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email to register..."
                className="w-full h-10 pl-5 rounded-full bg-background text-foreground font-body font-extralight tracking-wide text-sm sm:text-base"
              />
              <button className="flex flex-row items-center justify-center  font-semibold uppercase tracking-wide rounded-full text-xs md:text-sm absolute right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-10  p-2 text-black rounded-full bg-header "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </label>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="w-full h-full flex flex-col justify-start items-center gap-5 relative"
        >
          <Link
            className="w-full h-max font-body sm:text-xl text-base font-bold tracking-wide hover:text-orange-300 hover:translate-x-3"
            href="/"
          >
            Home
          </Link>
          <Link
            className="w-full h-max font-body sm:text-xl text-base font-bold tracking-wide hover:text-orange-300 hover:translate-x-3"
            href="/properties"
          >
            Properties
          </Link>
          <Link
            className="w-full h-max font-body sm:text-xl text-base font-bold tracking-wide hover:text-orange-300 hover:translate-x-3"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="w-full h-max font-body sm:text-xl text-base font-bold tracking-wide hover:text-orange-300 hover:translate-x-3"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="w-full h-max font-body sm:text-xl text-base font-bold tracking-wide hover:text-orange-300 hover:translate-x-3"
            href="/"
          >
            FAQ
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="w-full h-full flex flex-col justify-start items-start gap-1"
        >
          <p className="font-heading tracking-wide font-extralight text-sm sm:text-base hover:text-orange-300 hover:translate-x-3 hover:cursor-pointer">
            Privacy policy
          </p>
          <p className="font-heading tracking-wide font-extralight text-sm sm:text-base hover:text-orange-300 hover:translate-x-3 hover:cursor-pointer">
            Terms and Conditions
          </p>
          <p className="font-heading tracking-wide font-extralight text-sm sm:text-base hover:text-orange-300 hover:translate-x-3 hover:cursor-pointer">
            Cookie Policy
          </p>
          <p className="font-heading tracking-wide font-extralight text-sm sm:text-base hover:text-orange-300 hover:translate-x-3 hover:cursor-pointer">
            Careers
          </p>
        </motion.div>
      </div>

      <div className="sm:w-2/3 w-full sm:px-0 px-3 h-max lg:grid lg:grid-cols-4 flex flex-col-reverse place-items-center gap-6">
        <div className="col-span-2 w-full h-full grid grid-cols-1 gap-6 justify-start items-start">
          <div className="xl:w-4/5 lg:w-10/12 w-2/3  h-max flex flex-row justify-start items-center gap-5">
            <a
              className="p-2 rounded-full text-background bg-foreground"
              href="http://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

            <a
              className="p-2 rounded-full text-background bg-foreground"
              href="http://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>

            <a
              className="p-2 rounded-full text-background bg-foreground"
              href="http://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>

            <a
              href="http://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-background bg-foreground"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="w-full h-max flex flex-row justify-start items-start">
            <PiCopyrightThin />
            <p className="font-body font-extralight tracking-wide text-sm sm:text-base">
              Copyright 2024 - Charles.All Rights Reserved.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="w-full h-full flex flex-col justify-start items-start gap-1"
        >
          <p className="font-heading tracking-wide font-extralight text-sm sm:text-base">
            Renting
          </p>
          <p className="font-heading tracking-wide font-extralight text-sm sm:text-base">
            Selling
          </p>
          <p className="font-heading tracking-wide font-extralight text-sm sm:text-base">
            Buying
          </p>
          <p className="font-heading tracking-wide font-extralight text-sm sm:text-base">
            Air BnB
          </p>
          <p className="font-heading tracking-wide font-extralight text-sm sm:text-base">
            Mortgage
          </p>
          <p className="font-heading tracking-wide font-extralight text-sm sm:text-base">
            Building
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
          }}
          className="part w-full h-full flex flex-col justify-start items-start gap-1"
        >
          <h1 className="font-bold font-body tracking-wide mb-2">Kenya</h1>
          <p className="font-heading tracking-wide font-extralight text-sm sm:text-base">
            City
          </p>
          <p className="font-heading tracking-wide font-extralight text-sm sm:text-base">
            Office Location
          </p>
          <p className="font-heading tracking-wide font-extralight text-sm sm:text-base">
            company@gmail.com
          </p>
          <p className="font-heading tracking-wide font-extralight text-sm sm:text-base">
            +2547XXXXXXXX
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
