import { TECH_STACK } from "@/data/constants";

export default function TechStack() {
  return (
    <section id="tech" className="bg-navy-900/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            신뢰를 만드는 <span className="text-accent-light">기술</span>
          </h2>
          <p className="text-navy-400">
            금융 시스템에 요구되는 안정성과 성능을 위한 기술 스택
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {TECH_STACK.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-navy-800 bg-navy-950/50 p-6"
            >
              <h3 className="mb-5 text-lg font-semibold text-accent-light">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item.name}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium text-navy-200">
                        {item.name}
                      </span>
                      <span className="text-xs text-navy-500">
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-navy-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
