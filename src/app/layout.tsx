import type { Metadata } from 'next';

import './styles/globals.css';

import Navbar from './components/Navbar';

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
    <html lang="en" className="scroll-smooth">
      <body className="bg-white font-poppins antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
