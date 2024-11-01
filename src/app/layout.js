// src/app/layout.js
'use client'

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>
        {children}
      </body>
    </html>
  );
}
