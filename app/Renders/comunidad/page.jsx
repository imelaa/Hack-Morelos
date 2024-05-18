import Navbar from "../../components/Navbar";
import Comunidad from "./Comunidad";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-row items-center bg-color-8 flex-auto">
        <div className="flex">
            <Comunidad/>
            <Navbar />
        </div>
    </main>
  );
}
