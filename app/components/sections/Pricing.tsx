import { twMerge } from "tailwind-merge";
import Image from "next/image";

const pricing = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 conversations",
      "Unlimited Data & Contents",
      "Generate Anything",
      "Chatbot.",
    ],
  },
  {
    title: "Free",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 10 conversations",
      "Unlimited Data & Contents",
      "Generate Anything",
      "Ability to generate More",
      "Photo Generation",
      "Code Generation",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 15 Conversations",
      "Unlimited Data & Contents",
      "Blogs Genration",
      "Music Generation",
      "Advanced analytics",
      "Export capabilities",
      "Api access",
      "Advanced security features"
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="section-heading">
        <h2 className="section-title">Pricing</h2>
        <p className="section-description mt-5">
          Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
        </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricing.map(({ 
            title, 
            monthlyPrice, 
            buttonText, 
            popular, 
            inverse, 
            features 
          }, index) => (
           <div key={index} className={twMerge("card", inverse === true && 'border-black bg-black text-white')}>
            <div className="flex justify-between">
           <h3 className={twMerge("text-lg font-bold text-black/50", inverse === true && "text-white/60")}>{title}</h3>
           {popular === true && (
            <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
            <span className="bg-[linear-gradient(to-right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">Popular</span>
           </div>
           )}
           </div>
           <div className="flex items-baseline gap-1 mt-[30px]">
            <span className="text-4xl font-bold tracking-tighter leading-none">
              {monthlyPrice}
            </span>
            <span className="tracking-tight font-bold text-black/50">/month</span>
           </div>
           <button className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && "bg-white text-black")}>
            {buttonText}
           </button>
           <ul className="flex flex-col gap-5 mt-8">
            {features.map((feature, index) => (
              <li key={index} className="text-sm flex items-center gap-4">
                <Image src={"/images/checkIcon.svg"} alt="check icon" width={20} height={20} />
                <span>{feature}</span>
              </li>
            ))}
           </ul>
         </div>
          ))}
        </div>
      </div>
    </section>
  );
};