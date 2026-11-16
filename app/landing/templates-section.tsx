"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useReducedMotion from "@/app/landing/use-reduced-motion";

const templates = [
  {
    name: "Classic Professional",
    category: "Business & Finance",
    person: "Jordan Lee",
    role: "Financial Analyst",
    accent: "#1e3a8a",
    layout: "classic",
  },
  {
    name: "Modern Sidebar",
    category: "Technology",
    person: "Taylor Morgan",
    role: "Software Engineer",
    accent: "#047857",
    layout: "sidebar",
  },
  {
    name: "Clean Minimal",
    category: "Marketing",
    person: "Sam Rivera",
    role: "Marketing Manager",
    accent: "#334155",
    layout: "minimal",
  },
  {
    name: "Creative Accent",
    category: "Design & Creative",
    person: "Alex Kim",
    role: "Product Designer",
    accent: "#7c3aed",
    layout: "creative",
  },
  {
    name: "Executive",
    category: "Leadership",
    person: "Casey Patel",
    role: "Operations Director",
    accent: "#9a3412",
    layout: "executive",
  },
] as const;

function ResumeLines() {
  return (
    <div className="mt-2 space-y-1.5">
      <div className="h-1 w-full bg-slate-200" />
      <div className="h-1 w-11/12 bg-slate-200" />
      <div className="h-1 w-4/5 bg-slate-200" />
    </div>
  );
}

function ResumePreview({
  template,
}: {
  template: (typeof templates)[number];
}) {
  const accentStyle = { color: template.accent };
  const sectionStyle = { backgroundColor: template.accent };
  const isClassic = template.layout === "classic";

  if (template.layout === "sidebar") {
    return (
      <div className="flex h-full text-left text-[9px]">
        <aside className="w-[35%] bg-slate-900 p-3 text-white">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-emerald-100/30" />
          <p className="font-bold uppercase tracking-wider">Contact</p>
          <div className="mt-2 space-y-2 text-slate-300">
            <div>New York, NY</div>
            <div>hello@email.com</div>
            <div>linkedin.com/in</div>
          </div>
          <p className="mt-5 font-bold uppercase tracking-wider">Skills</p>
          <div className="mt-2 space-y-2">
            <div className="h-1 w-full bg-white/70" />
            <div className="h-1 w-4/5 bg-white/70" />
            <div className="h-1 w-11/12 bg-white/70" />
          </div>
        </aside>
        <div className="flex-1 p-3 text-slate-700">
          <h3 className="text-base font-extrabold leading-tight">{template.person}</h3>
          <p className="mt-1 font-semibold" style={accentStyle}>{template.role}</p>
          <div className="mt-5">
            <p className="font-bold uppercase tracking-wider">Profile</p>
            <ResumeLines />
          </div>
          <div className="mt-5">
            <p className="font-bold uppercase tracking-wider">Experience</p>
            <p className="mt-2 font-semibold">Senior Engineer</p>
            <ResumeLines />
            <p className="mt-3 font-semibold">Developer</p>
            <ResumeLines />
          </div>
        </div>
      </div>
    );
  }

  const isCreative = template.layout === "creative";
  const isExecutive = template.layout === "executive";
  const isMinimal = template.layout === "minimal";

  return (
    <div className="h-full p-5 text-left text-[9px] text-slate-700">
      <header
        className={`border-b pb-3 ${isCreative ? "border-transparent p-3 text-white" : "border-slate-200"}`}
        style={isCreative ? { backgroundColor: template.accent } : undefined}
      >
        <h3 className={`${isExecutive ? "font-serif text-xl" : "text-lg font-extrabold"} leading-tight`}>
          {template.person}
        </h3>
        <p className="mt-1 font-semibold" style={isCreative ? undefined : accentStyle}>
          {template.role}
        </p>
        <p className={`mt-2 ${isCreative ? "text-white/80" : "text-slate-400"}`}>
          New York, NY · hello@email.com · LinkedIn
        </p>
      </header>

      <div className={`${isCreative ? "px-3" : ""} space-y-4 pt-4`}>
        <section>
          <h4
            className={`${isExecutive ? "font-serif text-[10px]" : "font-bold uppercase tracking-wider"} ${isMinimal ? "normal-case tracking-normal" : ""}`}
            style={accentStyle}
          >
            Professional Summary
          </h4>
          <ResumeLines />
        </section>
        <section>
          <h4
            className={`${isExecutive ? "font-serif text-[10px]" : "font-bold uppercase tracking-wider"} ${isMinimal ? "normal-case tracking-normal" : ""}`}
            style={accentStyle}
          >
            Experience
          </h4>
          <div className="mt-2 flex items-center justify-between font-semibold">
            <span>Senior {template.role.split(" ").slice(-1)[0]}</span>
            <span className="text-slate-400">2021–Now</span>
          </div>
          <ResumeLines />
          <div className="mt-3 flex items-center justify-between font-semibold">
            <span>Associate</span>
            <span className="text-slate-400">2018–2021</span>
          </div>
          <ResumeLines />
        </section>
        <section>
          <h4
            className={`${isExecutive ? "font-serif text-[10px]" : "font-bold uppercase tracking-wider"} ${isMinimal ? "normal-case tracking-normal" : ""}`}
            style={accentStyle}
          >
            Education & Skills
          </h4>
          <div className="mt-2 flex gap-1.5">
            {[0, 1, 2].map((item) => (
              <span
                key={item}
                className="h-4 w-12 rounded-sm"
                style={{ backgroundColor: `${template.accent}20` }}
              />
            ))}
          </div>
        </section>
      </div>
      {isClassic && (
        <div className="mt-4 h-1 w-12" style={sectionStyle} />
      )}
    </div>
  );
}

export default function TemplatesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="templates" className="bg-slate-50 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
              Resume templates
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Pick a style that fits your next move
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Explore five professional, ATS-friendly designs made for different careers.
            </p>
          </div>
          <div className="hidden gap-3 sm:flex">
            <button
              className="template-swiper-prev flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl text-slate-700 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
              aria-label="Previous templates"
            >
              ←
            </button>
            <button
              className="template-swiper-next flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl text-slate-700 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
              aria-label="Next templates"
            >
              →
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation={{
            prevEl: ".template-swiper-prev",
            nextEl: ".template-swiper-next",
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
          slidesPerView={1.12}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="!pb-14"
        >
          {templates.map((template) => (
            <SwiperSlide key={template.name}>
              <article className="group h-full rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-colors duration-300 ease-in-out group-hover:border-emerald-100 motion-reduce:transition-none">
                  <div className="h-[340px] overflow-hidden rounded-lg bg-white sm:h-[360px]">
                    <div className="h-full transition-transform duration-300 ease-in-out group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none">
                      <ResumePreview template={template} />
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    {template.category}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    {template.name}
                  </h3>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

