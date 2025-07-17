export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container mx-auto">
        {/* Button Section */}
      <div className="flex justify-center mb-6">
        <button className="text-black bg-white px-4 py-1.5 rounded-full text-sm genius">
          <span className="pny">PNY</span> GENIUS
        </button>
      </div>


        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Services</a>
          <a href="">Pricing</a>
          <a href="">Help</a>
          <a href="">Careers</a>
        </nav>
        {/* Footer Text */}
        <p className="mt-6">&copy; 2024 GENIUS, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
