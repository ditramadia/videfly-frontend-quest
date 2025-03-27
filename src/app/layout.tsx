import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Videfly | AI Powered Video',
  description:
    'Videfly adalah platform dengan teknologi pintar yang bisa bantu kamu bikin video produk keren dengan cepat. Cukup pakai Videfly, kamu bisa punya video seperti profesional dalam beberapa menit saja!',
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
