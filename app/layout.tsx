import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "공무원 인사교류 활성화 및 채용제도 개선",
  description: "인사교류 인센티브와 지방공무원 채용제도 개선 내용을 시민의 눈높이로 안내합니다.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
