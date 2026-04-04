"use client";

import { useState } from "react";
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  type ProjectCategory,
} from "@/data/constants";

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory>("all");

  const filtered =
    active === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            9개의 프로젝트, 하나의 원칙:{" "}
            <span className="text-accent-light">무결성</span>
          </h2>
          <p className="text-navy-400">
            금융 IT 현장에서 설계하고 구현한 프로젝트들
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "border border-navy-700 text-navy-300 hover:border-navy-500 hover:text-white"
              }`}
            >
              {cat === "all" ? "전체" : cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <article
              key={project.id}
              className={`group flex flex-col rounded-xl border p-6 transition-all hover:bg-navy-900 ${
                project.status === "in-progress" || project.status === "live"
                  ? "border-accent/40 bg-navy-900/70"
                  : "border-navy-800 bg-navy-900/50 hover:border-accent/30"
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
                    {project.category}
                  </span>
                  {project.status === "in-progress" && (
                    <span className="rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-400">
                      🔨 개발 중
                    </span>
                  )}
                  {project.status === "live" && (
                    <span className="rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400">
                      🟢 운영 중
                    </span>
                  )}
                </div>
                <span className="text-xs text-navy-500">{project.period}</span>
              </div>

              <h3 className="mb-3 text-lg font-semibold leading-snug text-white">
                {project.title}
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-navy-400">
                {project.description}
              </p>

              {/* Key details (collapsible-style summary) */}
              <ul className="mb-4 flex-1 space-y-1">
                {project.details.slice(0, 2).map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-2 text-xs leading-relaxed text-navy-300"
                  >
                    <span className="mt-0.5 shrink-0 text-navy-600">-</span>
                    {d}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-navy-800 px-2 py-0.5 text-xs text-navy-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Results */}
              <div className="border-t border-navy-800 pt-3">
                {project.results.map((r) => (
                  <p
                    key={r}
                    className="flex items-center gap-2 text-sm leading-relaxed"
                  >
                    <span className="text-green-400">&#10003;</span>
                    <span className="text-navy-200">{r}</span>
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
