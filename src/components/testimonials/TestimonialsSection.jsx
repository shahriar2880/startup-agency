import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { fadeIn } from "../../utils/motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Robin Ayala Doe",
      buyer: "Verified Buyer",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      id: 2,
      name: "John De marli",
      buyer: "Verified Buyer",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      buyer: "Verified Buyer",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      buyer: "Verified Buyer",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
      id: 5,
      name: "Michael Chen",
      buyer: "Verified Buyer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 6,
      name: "Emma Wilson",
      buyer: "Verified Buyer",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
  ];
  return (
    <section  id="testimonials" className="py-16 px-4 container mx-auto">
      <motion.div variants={fadeIn('up', 0.1)}
                  initial="hidden"
                  whileInView="show" className="text-center mb-12">
        <div>
        <p className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Here's what our customers said
        </h2>
        <p className="text-gray-600">
          Testimonials is a great way to increase brand trust and awareness. Use
          this section to highlight your popular customers.
        </p>
        </div>
      </motion.div>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="Swiper-Slide h-full md:py-12 py-4"
            >
              <div>
              <div className="text-center items-center justify-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col">
                <div className="w-24 h-24 mx-auto mb-4">
                
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className="text-blue-600">
                      ★
                    </span>
                  ))}
                </div>
                <div className="flex items-baseline">
                  <span class="text-gray-600 font-bold">
                    {testimonial.name}
                  </span>
                  <span class="ml-2 text-green-600 text-xs">
                    {testimonial.buyer}
                  </span>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </button>
          <button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
