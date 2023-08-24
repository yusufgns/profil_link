import Header from '@/components/Header/Header';
import React from 'react';
import { Inter } from "next/font/google"
import Footer from "@/components/Footer"

interface IHeader {
  children?: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] })

export default function Index({ children }: IHeader) {
  return (
    <main className={inter.className}>
      <section className="flex flex-col space-y-16 max-w-[720px] m-auto py-8" >
        <Header />
        {children}
        <Footer/>
      </section>
    </main>
  );
}
