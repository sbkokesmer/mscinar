"use client";

import Navbar from './components/Navbar';
import HeaderTop from './components/HeaderTop';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html >
      <body>
        <HeaderTop />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer  />
      </body>
    </html>
  );
}
