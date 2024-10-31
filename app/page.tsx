"use client";

import Banner from './components/Banner';
import BannerDescription from './components/BannerDescription';
import WhyChooseUs from './components/WhyChooseUs';
import ProductsCarousel from './components/ProductsCarousel';
import PreferenceSection from './components/PreferenceSection';
import './globals.css';

export default function HomePage() {
  return (
    <div className="container">
      <Banner />
      <BannerDescription />
      <WhyChooseUs />
      <ProductsCarousel  />
      <PreferenceSection />
    </div>
  );
}