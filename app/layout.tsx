import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alistair Cerio | React Portfolio",
  description:
    "Portfolio of Alistair Cerio, React and React Native developer focused on scalable web and mobile products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
