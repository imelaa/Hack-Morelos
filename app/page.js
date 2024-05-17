import Image from "next/image";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Card from "./components/Cards/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Sidebar/>
      <Content/>
      <Footer/>
    </main>
  );
}
