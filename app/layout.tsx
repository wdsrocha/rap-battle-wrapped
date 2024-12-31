import "../styles/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malta 2024",
  description: "Veja sua retrospectiva de 2024 na Batalha da Malta",
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
