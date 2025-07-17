"use client";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm bg-[#EAEEFE]">
      {/* Top Banner */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <Image
            src="/images/arrow-right.svg"
            alt="arrow-image"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* Navbar Main */}
      <div className="py-5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="mx-12 rounded-md font-bold text-xl">
              <span className="text-purple-700">PNY</span> GENIUS
            </div>

            {/* Mobile Menu Icon */}
            <Image
              src="/images/menu-icon.svg"
              alt="menu-icon"
              height={20}
              width={20}
              className="md:hidden"
            />

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-6 items-center text-black/80 text-md">
              <a href="/" className="hover:text-purple-800">Home</a>
              <a href="/about" className="hover:text-purple-800">About</a>
              <a href="/services" className="hover:text-purple-800">Services</a>
              <a href="/testimonials" className="hover:text-purple-800">Testimonials</a>
              <a href="/plans" className="hover:text-purple-800">Plans</a>
              <a href="/contact" className="hover:text-purple-800">Contact</a>
              <button className="btn btn-primary hover:bg-purple-600">Get Started</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
