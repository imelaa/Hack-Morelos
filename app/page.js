import Image from "next/image";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

import Footer from "./components/footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    <Navbar/>
    <Sidebar/>
    {/* <Content/> */}
    <Footer/>
      
        



    </main>
  );
}
