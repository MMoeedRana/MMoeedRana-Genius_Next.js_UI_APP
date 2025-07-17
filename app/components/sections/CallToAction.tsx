import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container mx-auto text-center">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary hover:btn-text hover:scroll-smooth gap-3">Get for free</button>
          <button className="btn btn-text gap-1 hover:btn-primary hover:scroll-smooth">
            <span>Learn more</span>
            <Image
              src="/images/arrow-Right.svg"
              alt="arrow icon"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
