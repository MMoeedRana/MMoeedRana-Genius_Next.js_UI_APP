import Image from "next/image"

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
        <div className="md:w-[478px] pl-10 pb-10">
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
          Create content using AI 10x faster
          </div>
          <h1 className="text-3xl text-[#010D3E] tracking-tight mt-6">
            The Best AI Tool for  
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            <span className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Conversation
            </span>
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary hover:btn-text hover:scroll-smooth">
              {/* Get for free */}
              Start Generating For Free
            </button>
            <button className="btn btn-text gap-3 hover:btn-primary hover:scroll-smooth">
              <span>
              Learn more
              </span>
              <Image src={"/images/arrow-right.svg"} alt="icon" width={15} height={15} />
            </button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <Image src={"/images/about-image.png"} alt="about-image" width={600} height={600} className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6 py-20 pt-10" />
        </div>
        </div>
      </div>
    </section>
  );
};

