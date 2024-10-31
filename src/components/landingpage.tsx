// src/components/LandingPage.tsx
// src/components/LandingPage.tsx

import React from "react";

const landingpage = () => {
  return (
    <div>
      <main className="relative z-10 flex items-center justify-center text-center text-white min-h-screen">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/background.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20">
          <h1>
            <span className="block text-5xl md:text-8xl font-sans px-4 mix-blend-overlay tracking-[.2em] text-amber-500 drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">
              FUTURE
            </span>
            <span className="block text-4xl md:text-7xl font-mono px-4 tracking-[.4em] text-white mt-2">
              VINTAGE
            </span>
          </h1>
        </div>
      </main>
    </div>
  );
};

export default landingpage; // Ensure this is a default export

