"use client";
import MultiStepForm from "./Comunidad";
import Navbar from "../../components/Navbar";
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
