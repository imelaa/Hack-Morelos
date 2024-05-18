"use strict";
"use client";
import Image from "next/image";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Footer from "./components/footer";

import Content from "./components/Content";

import Card from "./components/Cards/Card";
import ImageUploader from "./components/ImageUploader";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between mt-12 bg-color-8">
      <Navbar />
      
      <div className="flex min-h-screen flex-col items-center justify-between ">
        <div className="flex">

          <Sidebar />
        </div>
        <ImageUploader />
      </div>
      <Footer />
    </main>
  );
}
