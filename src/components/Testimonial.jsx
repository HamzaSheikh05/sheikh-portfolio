import React from "react";
import Logo from "../assets/LinkedIn.png";
import { linkedInDatabase } from "../database/TestimonialDB";
import { TestimonyCard } from "./TestimonyCard";

export const Testimonial = () => {
  const testimonials = linkedInDatabase;

  return (
    <section className="p-10 bg-light-mode dark:bg-dark-mode">
      <div className="flex justify-center flex-col">
        <div className="text-center my-3 py-3">
          <h1 className="text-4xl text-blue-300 dark:text-blue-200 font-bold inline border-b-2 border-blue-400 dark:border-blue-300 font-burtons">
            Testimonial Section
          </h1>
          <h3 className="py-4 text-xl text-blue-100 dark:text-gray-100 font-serif">
            Hear what others say about me
          </h3>
        </div>

        <div className="flex justify-evenly flex-wrap gap-10 my-3 py-3 group">
          {testimonials.map((item) => (
            <TestimonyCard
              key={item.id}
              name={item.name}
              image={item.image}
              recommendation={item.recommendation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
