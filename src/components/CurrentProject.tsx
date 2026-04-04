import { SIDE_PROJECTS, PROFILE } from "@/data/constants";

export default function CurrentProject() {
  const hasProjects = SIDE_PROJECTS.length > 0;

  return (
    <section id="current" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            지금, <span className="text-accent-light">만들고 있는 것</span>
          </h2>
          <p className="text-navy-400">
            업무 외 시간에 진행하는 사이드 프로젝트
          </p>
        </div>

        {hasProjects ? (
          <div className="grid gap-6 md:grid-cols-2">
            {SIDE_PROJECTS.map((project) => (
              <div
                key={project.title}
                className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-navy-900 to-navy-950 p-8"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />
                <div className="relative z-10">
                  {/* Status badge */}
                  <div className="mb-4 flex items-center gap-3">
                    {project.status === "in-progress" ? (
                      <span className="text-sm font-medium text-yellow-400">
                        🔨 개발 중
                      </span>
                    ) : project.status === "live" ? (
                      <span className="text-sm font-medium text-green-400">
                        🟢 운영 중
                      </span>
                    ) : (
                      <span className="text-sm font-medium text-accent-light">
                        ✅ 완료
                      </span>
                    )}
                  </div>

                  <h3 className="mb-3 text-xl font-bold">{project.title}</h3>

                  <p className="mb-5 text-sm leading-relaxed text-navy-300">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-navy-800 px-2 py-0.5 text-xs text-navy-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg border border-navy-700 px-4 py-2 text-sm text-navy-200 transition-all hover:border-navy-500 hover:text-white"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-accent-light"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state — 프로젝트가 없을 때 */
          <div className="relative overflow-hidden rounded-2xl border border-dashed border-navy-700 bg-navy-900/30 p-12 text-center">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/3 blur-3xl" />
            <div className="relative z-10">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-navy-800">
                <svg
                  className="h-8 w-8 text-navy-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-navy-200">
                새로운 프로젝트를 준비 중입니다
              </h3>
              <p className="mb-6 text-sm text-navy-400">
                금융 IT에서 쌓은 역량을 바탕으로 새로운 사이드 프로젝트를
                기획하고 있습니다
              </p>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-navy-700 px-6 py-3 text-sm font-medium text-navy-200 transition-all hover:border-navy-500 hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub에서 확인하기
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
