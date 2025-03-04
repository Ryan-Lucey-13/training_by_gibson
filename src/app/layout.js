import React from 'react';
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';
import TwoPanelFooter from './components/TwoPanelFooter/TwoPanelFooter.js';

const poppins = Poppins({
    weight: ['600'],
    subsets: ['latin'],
  });

const inter = Inter({
  weight: ['400'],
  subsets:['latin']
})

export const metadata = {
  title: "Training By Gibson",
  description: "Personal Training",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar className={poppins.className}/>
          {children}
        <Footer />
      </body>
    </html>
  );
}
