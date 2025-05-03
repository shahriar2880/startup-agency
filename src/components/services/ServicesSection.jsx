import React from "react";
import {motion} from "framer-motion";
import { fadeIn, slideIn, textVariant } from "../../utils/motion";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      name: "Next.js 13",
      buyer: "Verified Buyer",
      image: "https://res.cloudinary.com/deule9kqh/image/upload/v1746139358/nextjs_nnkvet.png",
      text: "App dir, Routing, Layouts, Loading UI and API routes.",
    },
    {
      id: 2,
      name: "React 18",
      buyer: "Verified Buyer",
      image: "https://res.cloudinary.com/deule9kqh/image/upload/v1746139357/reactjs_z6ib8n.svg",
      text: "Server and Client Components. Use hook.",
    },
    {
      id: 3,
      name: "Database",
      buyer: "Verified Buyer",
      image: "https://res.cloudinary.com/deule9kqh/image/upload/v1746139356/database_crzxwg.svg",
      text: "ORM using Prisma and deployed on PlanetScale.",
    },
    {
      id: 4,
      name: "Components",
      buyer: "Verified Buyer",
      image: "https://res.cloudinary.com/deule9kqh/image/upload/v1746139356/tailwind_cyzbdh.svg",
      text: "UI components built using Radix UI and styled with Tailwind CSS.",
    },
    {
      id: 5,
      name: "Authentication",
      buyer: "Verified Buyer",
      image: "https://res.cloudinary.com/deule9kqh/image/upload/v1746139356/user-check_hzyjtb.svg",
      text: "Authentication using NextAuth.js and middlewares.",
    },
    {
      id: 6,
      name: "Subscriptions",
      buyer: "Verified Buyer",
      image: "https://res.cloudinary.com/deule9kqh/image/upload/v1746139357/credit-card_wfyemo.svg",
      text: "Free and paid subscriptions using Stripe.",
    },
  ];
  return (
    <section
      id="services"
      className="container mx-auto px-4 space-y-6  py-8 md:py-12 lg:py-20"
    >
      <motion.div variants={textVariant(0.2)}
                  initial="hidden"
                  whileInView="show" className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Future of support with new shape
        </h2>

        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          The product can personalize user experiences by understanding
          individual preferences and tailoring recommendations or content based
          on user behavior and historical data.
        </p>
      </motion.div>

      <div  className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {services.map((service) => (
          <motion.div variants={fadeIn("left",0.2)}
          initial="hidden"
          whileInView="show"
            key={service.id}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-indigo-300"
          >
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={service.image}
                  alt={service.buyer}
                  className="h-10 w-10 rounded-full object-cover"
                />
                
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600">{service.text}</p>
              </div>

              {/* Animated border effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-indigo-50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
