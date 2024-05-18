import Navbar from "../../components/Navbar";
import ContentA6 from "./ContentA6";
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
        <ContentA6 />
      </div>
    </main>
  );
}
