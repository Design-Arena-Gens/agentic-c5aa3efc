import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Rajdhani } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artemed Supply | Suministros médicos para quirófanos de excelencia",
  description:
    "Artemed Supply provee material médico y quirúrgico certificado para hospitales, clínicas y centros de cirugía con servicio integral y entregas garantizadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${jakarta.variable} ${rajdhani.variable} antialiased bg-brand-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
