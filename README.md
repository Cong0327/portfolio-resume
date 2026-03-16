# 박현수 | 백엔드 개발자 포트폴리오

금융 IT 솔루션 설계 및 유지보수 전문 백엔드 개발자 박현수의 포트폴리오 웹사이트입니다.

> **이 포트폴리오는 Docker 컨테이너로 패키징되어 어디서든 동일한 환경에서 구동됩니다.**
> MSA 아키텍처와 컨테이너 기반 배포 경험을 실제로 적용한 프로젝트입니다.

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Container**: Docker (멀티 스테이지 빌드)
- **Deploy**: Vercel

## 로컬 개발 환경

### Option 1: npm

```bash
npm install
npm run dev
```

`http://localhost:3000`에서 확인할 수 있습니다.

### Option 2: Docker (권장)

```bash
docker-compose up dev
```

한 줄이면 개발 환경이 세팅됩니다. 코드를 수정하면 컨테이너에 즉시 반영됩니다.

- `src/`, `public/` 디렉토리가 Volume으로 마운트되어 있어 **Hot Reload**가 동작합니다.
- 별도의 Node.js 설치 없이도 Docker만 있으면 개발이 가능합니다.

### Production 빌드 (Docker)

```bash
docker-compose --profile production up prod
```

멀티 스테이지 빌드를 적용하여 최종 이미지 크기를 최소화합니다.

## Vercel 배포

1. GitHub에 이 저장소를 Push
2. [Vercel](https://vercel.com)에서 해당 저장소를 Import
3. **Deploy** 버튼 클릭

별도 설정 없이 자동으로 빌드 및 배포됩니다.

## 프로젝트 구조

```
src/
├── app/
│   ├── globals.css      # Tailwind CSS 설정 및 커스텀 애니메이션
│   ├── layout.tsx        # 루트 레이아웃 (메타데이터, OG 태그)
│   └── page.tsx          # 메인 페이지
└── components/
    ├── Header.tsx        # 네비게이션 (반응형 모바일 메뉴)
    ├── Hero.tsx          # 히어로 섹션
    ├── KeyResults.tsx    # 핵심 성과 (카운팅 애니메이션)
    ├── TechStack.tsx     # 기술 스택 시각화
    ├── Projects.tsx      # 프로젝트 (카테고리 필터)
    ├── Experience.tsx    # 경력 타임라인
    ├── CurrentProject.tsx # 현재 진행 중 프로젝트
    ├── Contact.tsx       # 연락처 및 GitHub
    └── Footer.tsx        # 푸터
```
