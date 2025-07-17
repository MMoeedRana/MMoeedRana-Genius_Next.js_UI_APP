import Image from "next/image"

export const Navbar = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 bg-[#EAEEFE]">
    <div className='flex justify-center items-center py-3 bg-black text-white text-sm gap-3'>
      <p className="text-white/60 hidden md:block">
        Sreamline your workflow and boost your productivity
      </p>
      <div className="inline-flex gap-1 items-center">
      <p>Get strated for free</p>
      <Image src={"/images/arrow-right.svg"} alt="arrow-image" width={20} height={20} className="inline-flex justify-center items-center"/>
      </div>
    </div>
    <div className="py-5">
      <div className="container">
        <div className="flex items-center justify-between">
      <div className="mx-12 rounded-md genius"><span className="pny">PNY</span> GENIUS</div>
      <Image src={"/images/menu-icon.svg"} alt="menu-icon" height={20} width={20} className="md:hidden" />
      <nav className="hidden md:flex gap-6 text-black/80 items-center text-md">
      <a href="/" className="hover:text-purple-800">Home</a>
        <a href="/about" className="hover:text-purple-800">About</a>
        <a href="/services" className="hover:text-purple-800">Services</a>
        <a href="/testimonials" className="hover:text-purple-800">Testimonials</a>
        <a href="/plans" className="hover:text-purple-800">Plans</a>
        <a href="/contact" className="hover:text-purple-800">Contact</a>
        <button className="btn btn-primary hover:btn-text hover:scroll-smooth">Get Started</button>
      </nav>
      </div>
      </div>
    </div>
    </header>
  );
};


