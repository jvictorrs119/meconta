import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ME.Conta | Dashboard Inteligente",
  description:
    "Dashboard inteligente para MEIs e MEs: controle faturamento, despesas, DAS, notas fiscais e teto de faturamento com insights de IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
