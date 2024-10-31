"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeaderTop from './components/HeaderTop';
import Footer from './components/Footer';
import en from '../locales/en.json';
import tr from '../locales/tr.json';
import './globals.css';

const languages = {
  en,
  tr,
};

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
