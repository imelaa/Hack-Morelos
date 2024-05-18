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
    <main className="flex min-h-screen flex-row items-center bg-color-8 flex-auto">
      <div className="flex">
        <Navbar />
      </div>
      <div className="flex mt-20">
        <div>
          <Sidebar />
        </div>
        <ImageUploader />
      </div>
      <Footer />
    </main>
  );
}
