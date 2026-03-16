// ============================================================
// 박현수 포트폴리오 — Source of Truth
// 이력서 기반 정확한 데이터 (2025년 기준)
// ============================================================

// --- 프로필 ---
export const PROFILE = {
  name: "박현수",
  nameEn: "Hyunsu Park",
  role: "백엔드 개발자",
  company: "웨인테크놀로지",
  experience: "3년 차",
  github: "https://github.com/Cong0327",
  intro:
    "금융권의 엄격한 데이터 정합성과 보안 기준을 준수하며 성장해온 3년 차 백엔드 개발자입니다.",
  description:
    "웨인테크놀로지에서 PHP(Laravel), Oracle, Postgres를 활용해 금융 IT 솔루션의 설계부터 유지보수까지 전 과정을 경험했습니다. 특히 KCB·NICE·신용정보원 등 대외계 연동 시스템과 대규모 데이터 마이그레이션 프로젝트를 주도하며, 0.1%의 데이터 오차도 허용하지 않는 금융업 특유의 안정적인 시스템 구축에 최적화된 역량을 갖추고 있습니다.",
  motivation:
    "금융 IT에서 검증된 기술적 세심함을 바탕으로, 더 넓은 서비스 환경에서 기술적 해답을 제시하고자 합니다. 지난 2년간 금융권 프로젝트를 수행하며 연동 시스템의 안정성과 보안 아키텍처에 대한 깊은 이해도를 쌓았습니다. B2C 대용량 트래픽 환경에서는 데이터의 정합성만큼 빠른 처리 속도가 중요합니다. 금융권에서 체득한 '무결성'의 기반 위에, 대규모 트래픽을 안정적으로 소화하는 구조를 고민하고 싶습니다.",
  aspiration:
    "단순 기능을 구현하는 개발자를 넘어, 서비스의 안정성과 확장성을 책임지는 든든한 파트너가 되겠습니다. 저의 핵심 가치는 '효율'과 '안전'입니다. 기존 시스템의 병목 구간을 찾아 자동화하고, 보안 취약점을 선제적으로 보완하여 기술적 부채를 최소화하겠습니다. 금융 프로젝트에서 체득한 꼼꼼한 문서화 습관과 정확한 데이터 처리 능력을 바탕으로, 동료들이 신뢰할 수 있는 코드를 작성하고 서비스의 지속 가능한 성장에 기여하겠습니다.",
} as const;

// --- 핵심 성과 ---
export interface Stat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
}

export const KEY_RESULTS: Stat[] = [
  {
    label: "구축 기간 단축",
    value: 25,
    suffix: "%",
    description:
      "채권자변동 시스템을 모듈화 구조로 설계하여 신규 고객사 적용 기간을 1개월 → 3주로 단축",
  },
  {
    label: "수작업 자동화",
    value: 80,
    suffix: "%+",
    description:
      "우정사업본부 종적조회 API 연동 및 기한이익상실 로직으로 현업 반복 업무 자동화",
  },
  {
    label: "데이터 무결성",
    value: 100,
    suffix: "%",
    description:
      "채권 매입·매각 대용량 마이그레이션에서 처리 오류 0건, 무결성 100% 달성",
  },
  {
    label: "민원 감소",
    value: 30,
    suffix: "%+",
    description:
      "데이터 검수 일 배치 프로그램으로 연체·대출정보 불일치를 사전 차단하여 민원 감소",
  },
];

// --- 기술 스택 ---
export const TECH_STACK = [
  {
    title: "Language & Framework",
    items: [
      { name: "PHP (Laravel)", level: 90 },
      { name: "Python (FastAPI)", level: 80 },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "Oracle", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    title: "Infrastructure / DevOps",
    items: [
      { name: "MSA Architecture", level: 80 },
      { name: "API Gateway", level: 85 },
      { name: "Docker", level: 80 },
      { name: "NCP (Naver Cloud)", level: 75 },
    ],
  },
  {
    title: "Expertise",
    items: [
      { name: "대외계 API 연동 (금융/공공)", level: 95 },
      { name: "데이터 마이그레이션", level: 90 },
      { name: "비즈니스 로직 자동화", level: 85 },
    ],
  },
];

// --- 프로젝트 ---
export type ProjectCategory =
  | "all"
  | "연동 자동화"
  | "마이그레이션"
  | "아키텍처 개편";

export interface Project {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  period: string;
  status: "completed" | "in-progress";
  description: string;
  details: string[];
  tech: string[];
  results: string[];
}

export const PROJECTS: Project[] = [
  // ====== 아키텍처 개편 (최상단 — 보안 프로젝트 부각) ======
  {
    id: 8,
    title: "개인정보 유출 관련 보안 문제 해결 및 아키텍처 개편",
    category: "아키텍처 개편",
    period: "2025.04 ~ 2025.07",
    status: "completed",
    description:
      "기존 대출 신청 페이지의 보안 취약점을 근본적으로 해결하기 위해 시스템을 MSA 구조로 재편하고, FastAPI 기반 API Gateway를 구축하여 모든 트래픽의 단일 진입점을 제어하는 보안 아키텍처를 설계했습니다.",
    details: [
      "시스템을 도메인 단위로 분리하고 대외계 서버(제휴사, 본인인증, 홈페이지 등)를 물리적으로 분리하여 보안 격리성 확보",
      "FastAPI 기반 API Gateway 구축, 각 대외 서버에 TOKEN을 부여하여 인가받지 않은 접근 원천 차단",
      "Pydantic 모델을 활용한 엄격한 스키마 검증(Schema Validation) 체계로 비정상적인 파라미터 공격 및 Injection 차단",
    ],
    tech: ["Python", "FastAPI", "MSA", "API Gateway", "Pydantic", "Docker"],
    results: [
      "개인정보 유출 취약점 근본적 해결",
      "Injection 공격 차단, 서비스 보안 부하 감소",
      "향후 서비스 확장에 유연한 기반 마련",
    ],
  },
  {
    id: 9,
    title: "고객사 대출신청 시스템 차세대 프로젝트",
    category: "아키텍처 개편",
    period: "2025.08 ~ 2026.02",
    status: "completed",
    description:
      "기존 Legacy PHP 시스템을 대출신청과 채권관리로 나누어 단계적 개발을 진행하며, 다중 제휴사 API 연동과 NICE 신용정보 연동을 고도화한 차세대 프로젝트입니다.",
    details: [
      "시스템 페이즈 분리 — 대출신청(세션1) 구축 완료 및 런칭",
      "4개 주요 제휴사와의 대출 접수 RESTful API 연동, 자체 유효성 검증 기반 자동 거절 로직 구현",
      "전용선 기반 NICE 전문 통신으로 자체 랜딩 페이지에서 원스톱 대출 신청 파이프라인 구축",
      "제휴사 전용 Npac Safe-key 인증 모듈 도입 — 여신 심사 시 주민등록번호 대체 Safe-key 선인증 연동",
    ],
    tech: ["PHP", "Laravel", "Oracle", "PostgreSQL", "REST API", "FastAPI", "NICE 전용선", "NICE 본인인증, 실명인증 모듈"],
    results: [
      "대출 신청 인입 건수 20% 이상 증대",
      "심사팀 수작업 부담 대폭 완화 (심사 시간 30%+ 감소)",
      "부적격 건 사전 차단으로 심사 효율화",
    ],
  },

  // ====== 연동 자동화 ======
  {
    id: 1,
    title: "KCB·NICE 신용정보 연동 시스템 현대화 및 자동화",
    category: "연동 자동화",
    period: "2023.10 ~ 2023.11",
    status: "completed",
    description:
      "노후화된 Legacy PHP 환경을 Laravel 프레임워크로 전면 교체하고, 이중 검증 기반 데이터 정합성 확보 및 End-to-End 프로세스 자동화를 구현했습니다.",
    details: [
      "기존 Legacy PHP → Laravel 프레임워크 전면 이관으로 확장성 있는 연동 아키텍처 구축",
      "전일 마감 데이터 스냅샷과 실시간 데이터 상호 대조(Cross-Check) 로직으로 데이터 변조·누락 차단",
      "대출 정보 가공 → NICE/KCB 규격 파일 생성 → FTP 송수신 → DB 반영까지 스케줄러 기반 자동화",
    ],
    tech: ["PHP", "Laravel", "Oracle", "FTP", "Batch Scheduler"],
    results: [
      "오등록 민원 90% 이상 감소",
      "수동 관리 요소 제거, 운영 리소스 절감",
    ],
  },
  {
    id: 2,
    title: "KCB·NICE 신용정보 상시 검수 및 정합성 관리 시스템",
    category: "연동 자동화",
    period: "2024.02 ~ 2024.03",
    status: "completed",
    description:
      "분기·반기별 KCB·NICE 마스터 파일과 내부 원장 데이터를 전수 대조하는 배치 검수 프로그램을 개발하여 데이터 정합성 오류를 자동 탐지합니다.",
    details: [
      "마스터 데이터 교차 검증 — KCB·NICE 마스터 파일 vs 내부 원장 전수 대조 배치 개발",
      "연체 정보 불일치, 완제 후 미해지 채권, 누락된 신용 변동 내역 등 예외 케이스 자동 탐지",
      "유형별 분류 상세 검수 결과 리포트(CSV/Excel) 자동 생성",
      "수만 건 마스터 파일의 메모리 부하 없는 데이터 스트리밍 및 인덱싱 처리",
    ],
    tech: ["PHP", "Laravel", "Oracle", "Batch", "CSV/Excel"],
    results: [
      "6개월간 관련 민원 30% 이상 감소",
      "외부 기관 보고 데이터 무결성 100% 달성",
    ],
  },
  {
    id: 3,
    title: "신용정보원 정보집중 연동 시스템 고도화",
    category: "연동 자동화",
    period: "2023.11 ~ 2024.01",
    status: "completed",
    description:
      "기존 DB Trigger 기반의 불투명한 데이터 처리 방식을 Laravel 기반 애플리케이션 로직으로 전면 이관하여 가독성과 유지보수성을 확보했습니다.",
    details: [
      "DB Trigger → Laravel 애플리케이션 로직 전면 이관으로 시스템 투명성 확보",
      "개인 대출·연체 정보를 신용정보원 표준 규격에 맞게 추출·변환하는 연동 인터페이스 구축",
      "상세 로깅 강화로 연동 실패 시 즉각적 트래킹 및 대응 환경 조성",
      "문제 소지가 있는 신용정보데이터 생성시 담당자 알람을 통한 오등록 방지",
    ],
    tech: ["PHP", "Laravel", "Oracle", "Batch", "Logging"],
    results: [
      "법적 보고 누락 건수 0건 유지",
      "규제 변경 대응 속도 대폭 향상",
    ],
  },
  {
    id: 4,
    title: "신용정보원 채권자변동 정보집중 시스템 구축",
    category: "연동 자동화",
    period: "2024.06 ~ 2024.09",
    status: "completed",
    description:
      "2024년 9월 의무화된 신용정보원 '채권자변동 정보집중' 대응을 위한 신규 시스템을 자체 개발하고, 환경 독립적 모듈 구조로 설계하여 다수 고객사에 수평 전개했습니다.",
    details: [
      "Legacy PHP 환경과 Laravel 기반 환경 모두에서 구동 가능한 독립형 모듈 구조 설계",
      "고객사별 상이한 DB 스키마·데이터 포맷을 설정 파일(Config) 변경만으로 대응하는 추상화 로직",
    ],
    tech: ["PHP", "Laravel", "Oracle", "PostgreSQL", "Config-driven"],
    results: [
      "고객사별 커스텀 개발 기간 대폭 절감",
      "예상 기간(1개월) 대비 25% 단축, 3주 내 안정적 적용 완료",
    ],
  },
  {
    id: 5,
    title: "우정사업본부 종적조회 API 연동 및 기한이익상실 자동화",
    category: "연동 자동화",
    period: "2024.07 ~ 2024.08",
    status: "completed",
    description:
      "우체국 등기우편 종적조회 Open API를 연동하여 통지서 수신 여부를 실시간 트래킹하고, 기한이익상실 요건에 따른 채권 상태 자동 전환 시스템을 구축했습니다.",
    details: [
      "우정사업본부 종적조회 Open API 연동 — 법적 효력 통지서의 수신 여부 실시간 트래킹 배치 개발",
      "통지서 도달 확인 시 기한이익상실 요건에 따라 채권 상태 자동 전환 및 채무 데이터 업데이트",
      "상태 변경 시 고객 SMS 자동 알림 연동으로 채권 관리 프로세스 완결성 확보",
    ],
    tech: ["PHP", "Laravel", "Oracle", "REST API", "SMS", "Batch"],
    results: [
      "채권팀 기한이익상실 관련 수작업 업무 80% 이상 자동화",
      "기한이익상실 시점 오류 방지, 채권 관리 투명성 제고",
    ],
  },

  // ====== 마이그레이션 ======
  {
    id: 6,
    title: "채권 매입·매각 마이그레이션 프로그램 개발",
    category: "마이그레이션",
    period: "2024.08 ~ 2024.10",
    status: "completed",
    description:
      "금융사 포맷의 대용량 엑셀 데이터를 Chunk 분할 처리 및 Queue 비동기 처리로 안정적으로 마이그레이션하는 프로그램을 개발했습니다.",
    details: [
      "대용량 엑셀 업로드 시 OOM 방지를 위한 Chunk 단위 분할 처리 및 Queue 기반 비동기 백그라운드 처리",
      "매입 시 DB Transaction 엄격 제어로 정합성 보장",
      "매각 시 복잡한 추출 조건을 Query 튜닝으로 속도 저하 없이 정확하게 추출",
    ],
    tech: ["PHP", "Laravel", "Oracle", "Queue", "Excel", "DB Transaction"],
    results: [
      "대규모 데이터 처리 오류 0건 (무결성 100%)",
      "고객사 만족도 및 신뢰도 향상",
    ],
  },
  {
    id: 7,
    title: "금융사(대부업) 인수합병 마이그레이션",
    category: "마이그레이션",
    period: "2025.03 ~ 2025.04",
    status: "completed",
    description:
      "인수 금융사에 맞춰 채권 데이터 및 신용정보(NICE, KCB, 신용정보원)를 정확하게 등록하는 마이그레이션 프로젝트입니다.",
    details: [
      "인수 금융사 규격에 맞춘 채권 데이터 전환 및 매핑",
      "NICE, KCB, 신용정보원 등 신용정보 이관 처리",
    ],
    tech: ["PHP", "Laravel", "Oracle", "PostgreSQL", "NICE", "KCB", "신용정보원"],
    results: [
      "예상 기간 대비 20% 단축하여 프로젝트 완료",
      "인수 금융사와 원활한 연동 지원",
    ],
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "all",
  "아키텍처 개편",
  "연동 자동화",
  "마이그레이션",
];

// --- 사이드 프로젝트 (토이/소규모) ---
export interface SideProject {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
  status: "in-progress" | "completed";
}

export const SIDE_PROJECTS: SideProject[] = [
  // ============================================================
  // 사이드 프로젝트 추가 가이드
  // ============================================================
  // 아래 템플릿을 복사 → 주석 해제 → 값 수정 후 저장하면 반영됩니다.
  // 여러 개 추가 시 중괄호 블록을 콤마(,)로 구분해서 나열하세요.
  //
  // 필수 필드: title, description, tech, status
  // 선택 필드: url (라이브 데모), github (저장소 링크)
  //   - url만 있으면 → "Live Demo" 버튼만 표시
  //   - github만 있으면 → "GitHub" 버튼만 표시
  //   - 둘 다 있으면 → 두 버튼 모두 표시
  //   - 둘 다 없으면 → 버튼 없이 카드만 표시
  //
  // --- 템플릿 (복사용) ---
  // {
  //   title: "프로젝트 이름",
  //   description: "프로젝트에 대한 간단한 설명을 적어주세요.",
  //   tech: ["Python", "FastAPI", "PostgreSQL"],
  //   url: "https://배포된-주소.com",
  //   github: "https://github.com/Cong0327/저장소-이름",
  //   status: "in-progress",  // "in-progress" | "completed"
  // },

    {
      title: "주식 차트 프로그램(데모)",
      description: "Twelve Data API 기반 실시간 주식 시세 조회 및 차트 시각화 웹 애플리케이션. Spring Boot 백엔드에서 API 데이터를 Redis로 캐싱하고, React 프론트엔드에서 인터랙티브 차트를 제공합니다.",
      tech: ["Java", "SpringBoot", "Redis", 'React', 'Typescript', "Vercel", "Railway"],
      url: "https://stock-project-34vdck2zlx-cong0327s-projects.vercel.app/",
      github: "https://github.com/Cong0327/stockProject",
      status: "in-progress",  // "in-progress" | "completed"
    },
    {
      title: "LostArk Open API 디스코드 봇",
      description: "로스트아크 Open API를 활용한 Discord 봇. 캐릭터 정보 조회, 경매장·거래소 시세 검색, 보석 시세 평가 등의 슬래시 커맨드를 제공하며, node-cache 기반 API 응답 캐싱으로 호출 효율을 최적화했습니다.",
      tech: ["TypeScript", "Node.js", "discord.js", "Axios", "node-cache"],
      github: "https://github.com/Cong0327/LA_Discord_Bot.git",
      status: "in-progress",
    },

  // --- 템플릿 끝 ---
];

// --- 경력 ---
export const EXPERIENCES = [
  {
    period: "2023.10 ~ 2026.03.06",
    role: "백엔드 개발자",
    company: "웨인테크놀로지",
    description:
      "금융 IT 솔루션의 설계부터 유지보수까지 전 과정을 담당. KCB·NICE·신용정보원 등 대외계 연동 시스템 구축 및 대규모 데이터 마이그레이션 프로젝트 주도.",
    highlights: [
      "KCB·NICE 신용정보 연동 시스템 Legacy PHP → Laravel 현대화",
      "신용정보원 정보집중·채권자변동 시스템 구축 및 고도화",
      "우정사업본부 API 연동 및 기한이익상실 자동화",
      "데이터허브 차량관련 API 연동",
      "인카스 차량저당 API 연동",
      "채권 매입·매각 대용량 마이그레이션 (무결성 100%)",
      "금융사 인수합병 마이그레이션 (기간 20% 단축)",
      "보안 아키텍처 개편 — FastAPI 기반 API Gateway 구축",
      "차세대 대출신청 시스템 — 차량대출, 주택담보대출 자동심사 시스템 및 대외계(신용정보, 대외연동 등) 개편",
    ],
  },
];
