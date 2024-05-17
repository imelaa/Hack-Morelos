import Image from "next/image";
import navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

  
      <Sidebar/>
        <h1>hello world</h1>


    </main>
  );
}
