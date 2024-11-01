import React from 'react';

const LandingPage = () => {
  return (
    <div className="relative">
      <main className="relative z-10 flex items-center justify-center text-center text-white min-h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/background.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 p-4">
          <h1>
            <span className="block text-5xl md:text-8xl font-sans tracking-widest text-amber-500 drop-shadow-lg">
              FUTURE
            </span>
            <span className="block text-4xl md:text-7xl font-mono tracking-widest text-white mt-2">
              VINTAGE
            </span>
          </h1>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;