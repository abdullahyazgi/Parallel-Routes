import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parallel Routes",
  description: "Parallel Routes in Next Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
