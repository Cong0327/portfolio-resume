"use client";

import { useEffect, useRef, useState } from "react";
import { KEY_RESULTS } from "@/data/constants";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span
      ref={ref}
      className="text-5xl font-bold tabular-nums text-white md:text-6xl"
    >
      {count}
      <span className="text-accent-light">{suffix}</span>
    </span>
  );
}

export default function KeyResults() {
  return (
    <section id="results" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            숫자로 증명하는 <span className="text-accent-light">성과</span>
          </h2>
          <p className="text-navy-400">
            안정성 확보와 프로세스 효율화를 통해 비즈니스 가치를 증명합니다
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {KEY_RESULTS.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-xl border border-navy-800 bg-navy-900/50 p-8 text-center transition-all hover:border-accent/30 hover:bg-navy-900"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-lg font-semibold text-navy-200">
                {stat.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
