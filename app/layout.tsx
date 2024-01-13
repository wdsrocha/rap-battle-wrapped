import "../styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retrospectiva AM 2023",
  description: "Reveja seu 2023 nas Batalhas de Rima",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-dvh bg-slate-900 text-slate-50">{children}</body>
    </html>
  );
}
