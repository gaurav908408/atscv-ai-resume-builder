"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useReducedMotion from "@/app/landing/use-reduced-motion";

const testimonials = [
  {
    name: "Jamie R.",
    role: "Recent graduate",
    quote:
      "The clean layout made it much easier to organize my experience. I had a resume ready to review in just a few minutes.",
  },
  {
    name: "Morgan T.",
    role: "Software developer",
    quote:
      "I liked being able to compare different styles in one place. The template preview helped me choose a format that suited my role.",
  },
  {
    name: "Alex P.",
    role: "Marketing specialist",
    quote:
      "The resume looks polished and easy to scan. It gave me a helpful starting point for updating my application.",
  },
  {
    name: "Riya S.",
    role: "Career changer",
    quote:
      "The templates helped me present my transferable skills clearly while moving into a new field.",
  },
  {
    name: "Chris D.",
    role: "Recent graduate",
    quote:
      "I could quickly see how my education, projects, and skills might fit together on one page.",
  },
  {
    name: "Nina K.",
    role: "Project coordinator",
    quote:
      "The straightforward design made my work history easier to scan and update.",
  },
  {
    name: "Omar H.",
    role: "Product manager",
    quote:
      "It was useful to compare a few layouts before choosing one for my next application.",
  },
  {
    name: "Priya M.",
    role: "Human resources associate",
    quote:
      "The polished format gave me a clear starting point for refreshing my resume.",
  },
  {
    name: "Ethan W.",
    role: "Data analyst",
    quote:
      "I liked having a simple structure for highlighting my experience and technical skills.",
  },
  {
    name: "Sofia L.",
    role: "UX designer",
    quote:
      "The different styles made it easy to find a resume look that felt right for my role.",
  },
  {
    name: "Arjun B.",
    role: "Operations specialist",
    quote:
      "The preview helped me picture how my details would appear before I started editing.",
  },
];

export default function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
              Sample feedback
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              A little inspiration from our demo users
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Example comments for preview; these are not verified customer reviews.
            </p>
          </div>
          <div className="hidden gap-3 sm:flex">
            <button
              className="testimonial-swiper-prev flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl text-slate-700 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
              aria-label="Previous comments"
            >
              ←
            </button>
            <button
              className="testimonial-swiper-next flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl text-slate-700 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
              aria-label="Next comments"
            >
              →
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation={{
            prevEl: ".testimonial-swiper-prev",
            nextEl: ".testimonial-swiper-next",
          }}
          pagination={{ clickable: true }}
          autoplay={
            prefersReducedMotion
              ? false
              : {
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
          }
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="!pb-14"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none">
                <p className="text-2xl tracking-widest text-amber-400" aria-label="5 out of 5 stars">
                  ★★★★★
                </p>
                <blockquote className="mt-5 min-h-28 text-base leading-7 text-slate-700">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
