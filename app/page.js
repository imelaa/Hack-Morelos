import Image from "next/image";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

import Footer from "./components/footer";

import Content from "./components/Content";

import Card from "./components/Cards/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-12 bg-color-8">
      <Navbar />
      
      <div className="flex min-h-screen flex-col items-center justify-between ">
        <div className="flex">
          <Sidebar />
        </div>
        <div className="flex "> {/* Add margin top to create space */}
          <Content />
        </div>
      </div>

      <Footer />
    </main>
  );
}
