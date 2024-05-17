// components/FeaturedCard.js
import Image from "next/image";

const elemento = {
  imageUrl: "/images/placeholder.jpg",
  textoDialecto: "Niyolpaki ipampa nimitsixmati",
  textoIngles: "Hi, how are you?",
};

export default function Card(elemento) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-max">
      <Image
        src={elemento.imageUrl}
        alt="Placeholder"
        width={300}
        height={200}
        className="rounded-lg"
      />
      <p className="text-color-6">{elemento.textoDialecto}</p>
      <p className="text-color-6">{elemento.textoIngles}</p>
    </div>
  );
}
