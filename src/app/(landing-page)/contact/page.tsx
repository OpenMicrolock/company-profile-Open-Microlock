import type { Metadata } from 'next'
import TopNavigationPage from "@/components/TopNavigation";
import React from "react";
import Hero from "./components/Hero";
import Details from "./components/Details";
import Map from "./components/Map";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Contact | OpenMicroLock',
}

const ContactPage = () => {
  return (
    <>
      <TopNavigationPage />
      <Hero />
      <Details />
      <Map />
      <Footer />
    </>
  );
};

export default ContactPage;
