"use client";

import { Header } from "@/components/header/Header";

export default function BeritaLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
