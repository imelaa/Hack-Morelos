"use client";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import Image from "next/image";
import ImageUploader from "./ImageUploader";


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
    </main>
  );
}
