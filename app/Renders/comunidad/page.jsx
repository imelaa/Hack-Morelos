"use client";
import Navbar from "../../components/Navbar";
import MultiStepForm from "./Comunidad";
export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-row  bg-color-8 flex-auto">
      <div className="flex flex-grow">
        <Navbar />
        <MultiStepForm />
      </div>
    </main>
  );
}
