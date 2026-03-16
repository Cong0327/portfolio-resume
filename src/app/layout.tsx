import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "박현수 | 백엔드 개발자 포트폴리오",
  description:
    "금융 IT 솔루션 설계 및 유지보수 전문 백엔드 개발자 박현수의 포트폴리오",
  openGraph: {
    title: "박현수 | 백엔드 개발자 포트폴리오",
    description: "안정성과 혁신을 설계하는 백엔드 개발자",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-navy-950 text-white antialiased">{children}</body>
    </html>
  );
}
