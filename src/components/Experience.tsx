import { EXPERIENCES } from "@/data/constants";

export default function Experience() {
  return (
    <section id="experience" className="bg-navy-900/30 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            금융 IT <span className="text-accent-light">3년</span>의 여정
          </h2>
          <p className="text-navy-400">
            안정성을 최우선으로 성장해 온 경력 타임라인
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-navy-700 md:left-1/2" />

          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.period}
              className={`relative mb-12 flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-navy-950 md:left-1/2" />

              {/* Content */}
              <div
                className={`ml-10 w-full md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="rounded-xl border border-navy-800 bg-navy-950/80 p-6 transition-all hover:border-accent/30">
                  <span className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
                    {exp.period}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">{exp.role}</h3>
                  <p className="mb-3 text-sm font-medium text-accent-light/80">
                    {exp.company}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-navy-300">
                    {exp.description}
                  </p>
                  <ul className="space-y-1">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-navy-200"
                      >
                        <span className="mt-1 text-accent-light">&#8226;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
