"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { useState, useEffect } from "react";
import { Search, ShoppingCart, ChevronDown } from 'lucide-react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const navLinks = [
  {
    title: "Novinky",
    slogan: "Móda zítřka, styl včerejška",
    submenu: {
      categories: ["Retro Kolekce", "Nová Klasika", "Limitovaná Edice"],
      featured: [
        { name: "Jarní Kolekce", image: "/api/placeholder/200/200", slogan: "Elegance nikdy nevyjde z módy" },
        { name: "Letní Série", image: "/api/placeholder/200/200", slogan: "Styl, který přežije věky" }
      ]
    }
  },
  {
    title: "Pánské",
    slogan: "Klasická elegance pro moderního muže",
    submenu: {
      categories: ["Obleky", "Klasické Džíny", "Retro Sport"],
      featured: [
        { name: "Pánská Klasika", image: "/api/placeholder/200/200", slogan: "Oblečení s charakterem" },
        { name: "Business Linie", image: "/api/placeholder/200/200", slogan: "Pro muže s vytříbeným vkusem" }
      ]
    }
  },
  {
    title: "Dámské",
    slogan: "Nadčasová krása v každém detailu",
    submenu: {
      categories: ["Retro Šaty", "Nadčasové Kousky", "Klasická Elegance"],
      featured: [
        { name: "Dámská Vintage", image: "/api/placeholder/200/200", slogan: "Každá žena je královnou" },
        { name: "Večerní Kolekce", image: "/api/placeholder/200/200", slogan: "Pro nezapomenutelné okamžiky" }
      ]
    }
  },
  // ... rest of navLinks
];

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <html lang="cs">
      <head>
        <title>Retro Fashion</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950`}>
        <nav className="bg-black text-white border-b border-amber-900 relative">
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-20">
                {/* Logo */}
                <div className="flex-shrink-0 ml-8">
                  <a href="/" className="text-2xl font-bold font-mono text-amber-500">RETRO</a>
                </div>

                {/* Main Navigation */}
                <div className="flex justify-center flex-1">
                  {navLinks.map((link, index) => (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="px-4 py-6 flex items-center space-x-1 hover:text-amber-500 transition-colors duration-500 font-mono tracking-wider">
                        <span className="text-sm uppercase">{link.title}</span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                      </button>

                      {/* Mega Menu */}
                      <div 
                        className={`fixed left-0 w-full bg-black/95 border-t border-amber-900 transform transition-all duration-500 z-50 ${
                          activeDropdown === index 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 -translate-y-4 pointer-events-none'
                        }`}
                      >
                        <div className="container mx-auto py-12 px-4">
                          <div className="text-center mb-10">
                            <h2 className="text-3xl font-mono tracking-widest text-amber-500 uppercase">{link.slogan}</h2>
                          </div>
                          <div className="grid grid-cols-12 gap-8 font-mono">
                            {/* Categories */}
                            <div className="col-span-3 border-r border-amber-900/30">
                              <h3 className="text-lg uppercase tracking-wider mb-6 text-amber-500">Kategorie</h3>
                              <ul className="space-y-4">
                                {link.submenu.categories.map((category, idx) => (
                                  <li key={idx}>
                                    <a href="#" className="hover:text-amber-500 transition-colors duration-300 text-sm uppercase tracking-wide group flex items-center">
                                      <span className="transform transition-transform duration-300 group-hover:translate-x-2">{category}</span>
                                      <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Featured Products */}
                            <div className="col-span-9">
                              <h3 className="text-lg uppercase tracking-wider mb-6 text-amber-500">Doporučujeme</h3>
                              <div className="grid grid-cols-4 gap-8">
                                {[...link.submenu.featured, ...link.submenu.featured].map((item, idx) => (
                                  <div key={idx} className="group relative overflow-hidden">
                                    <div className="aspect-w-1 aspect-h-1 overflow-hidden border border-amber-900/30">
                                      <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale hover:grayscale-0"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 w-full p-4 text-center">
                                          <p className="text-white uppercase tracking-wider text-sm">{item.name}</p>
                                          <p className="text-amber-500 text-xs italic mt-1">{item.slogan}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Search and Cart */}
                <div className="flex items-center space-x-6 mr-8">
                  <button className="hover:text-amber-500 transition-colors duration-300">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="hover:text-amber-500 transition-colors duration-300">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between px-4 h-16 border-b border-amber-900/30">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                  <span className={`block h-0.5 w-6 bg-amber-500 transform transition duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}></span>
                  <span className={`block h-0.5 w-6 bg-amber-500 transform transition duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}></span>
                  <span className={`block h-0.5 w-6 bg-amber-500 transform transition duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}></span>
                </div>
              </button>

              <div className="flex-1 text-center">
                <a href="/" className="text-2xl font-mono font-bold text-amber-500">RETRO</a>
              </div>

              <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 text-amber-500" />
                <ShoppingCart className="w-5 h-5 text-amber-500" />
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`transform transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-black border-b border-amber-900/30">
                {navLinks.map((link, index) => (
                  <div key={index} className="border-b border-amber-900/30">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                      className="w-full px-4 py-4 flex justify-between items-center font-mono"
                    >
                      <span className="uppercase tracking-wider">{link.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-amber-500 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out bg-gray-900 ${
                        activeDropdown === index ? 'max-h-[800px]' : 'max-h-0'
                      }`}
                    >
                      <div className="p-6 space-y-6">
                        <p className="text-amber-500 text-sm italic text-center pb-4 border-b border-amber-900/30">{link.slogan}</p>
                        <div className="space-y-4">
                          {link.submenu.categories.map((category, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className="block py-2 hover:text-amber-500 transition-colors font-mono text-sm uppercase tracking-wider flex items-center justify-between group"
                            >
                              <span className="transform transition-transform duration-300 group-hover:translate-x-2">{category}</span>
                              <ChevronDown className="w-4 h-4 rotate-[-90deg] opacity-0 group-hover:opacity-100" />
                            </a>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          {link.submenu.featured.map((item, idx) => (
                            <div key={idx} className="group relative">
                              <div className="aspect-w-1 aspect-h-1 overflow-hidden border border-amber-900/30">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="absolute bottom-0 w-full p-3 text-center">
                                    <p className="text-white uppercase tracking-wider text-xs">{item.name}</p>
                                    <p className="text-amber-500 text-xs italic mt-1">{item.slogan}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}