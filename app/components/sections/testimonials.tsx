import Image from "next/image";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools,",
    imageSrc: "/images/about-image.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools,",
    imageSrc: "/images/about-image.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools,",
    imageSrc: "/images/about-image.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools,",
    imageSrc: "/images/about-image.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools,",
    imageSrc: "/images/about-image.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools,",
    imageSrc: "/images/about-image.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools,",
    imageSrc: "/images/about-image.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools,",
    imageSrc: "/images/about-image.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "As a seasoned designer always on the lookout for innovative tools,",
    imageSrc: "/images/about-image.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => (
  <div
    className={twMerge(
      "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
      props.className
    )}
  >
    {props.testimonials.map(({ text, imageSrc, name, username }, index) => (
      <div className="card" key={index}>
        <div>{text}</div>
        <div className="flex items-center gap-2 mt-5">
          <Image
            src={imageSrc}
            alt={name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">{name}</div>
            <div className="leading-5 tracking-tight">{username}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Section Heading */}
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="text-xl">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>

        {/* Testimonials Columns */}
        <div className="flex justify-center gap-6">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:flex"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};
