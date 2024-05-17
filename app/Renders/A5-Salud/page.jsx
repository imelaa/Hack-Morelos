import Navbar from "../../components/Navbar";
import Content from "../../components/Content";
import Sidebar from "../../components/Sidebar";

import Image from "next/image";


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
        <Content />
      </div>
    </main>
  );
}
