"use client";

import Navbar from "./Navbar";

export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
