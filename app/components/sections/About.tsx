import Image from "next/image";

export const About = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative mt-10">
          <Image
            src={"/images/snap.png"}
            alt="product image"
            width={700} // Enlarged image width
            height={1000} // Enlarged image height
            className="mx-auto rounded-lg" // Centers the image
          />
        </div>
      </div>
    </section>
  );
};
