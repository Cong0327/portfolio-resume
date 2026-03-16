import { PROFILE } from "@/data/constants";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            개발자 <span className="text-accent-light">박현수</span>
          </h2>
          <p className="text-navy-400">
            금융 IT에서 검증된 기술적 세심함으로, 더 넓은 서비스 환경을 향해
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* 이직 동기 */}
          <div className="rounded-xl border border-navy-800 bg-navy-900/50 p-6 transition-all hover:border-accent/30">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg
                  className="h-5 w-5 text-accent-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Why I Move Forward</h3>
            </div>
            <p className="text-sm leading-relaxed text-navy-300">
              {PROFILE.motivation}
            </p>
          </div>

          {/* 입사 후 포부 */}
          <div className="rounded-xl border border-navy-800 bg-navy-900/50 p-6 transition-all hover:border-accent/30">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg
                  className="h-5 w-5 text-accent-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">What I Bring</h3>
            </div>
            <p className="text-sm leading-relaxed text-navy-300">
              {PROFILE.aspiration}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
