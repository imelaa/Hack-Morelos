"use client";

import Card from "./Cards/Card";
import cuadro from "../assets/cuadro1.jpg";
import cuadro1 from "../assets/cuadro2.jpg";
import cuadro2 from "../assets/cuadro3.jpg";
import cuadro3 from "../assets/cuadro4.jpg";
import logo from "../assets/logo.jpg";
import Translate from "./Trans/Translate";

const elementos1 = [
    {
        imageUrl: logo,
        textoDialecto: "Culturas conectadas",
        textoIngles: "Tlacameh Cualli",
    },
    {
        imageUrl: cuadro1,
        textoDialecto: "Cuīcatlahtoa īpan neci, mā noceh",
        textoIngles: "Es más fácil de lo que crees",
    },
    {
        imageUrl: cuadro2,
        textoDialecto: "Mati ompa ika ittechka ingles",
        textoIngles: "Aprende a hablar ingles",
    },
    {
        imageUrl:cuadro,
        textoDialecto: "",
        textoIngles: "",


    },
];

const Content = () => {
    const handleButton=()=>{
        console.log("click")
    }
    return (
        <div className="bg-color-7 rounded-lg p-4">
            <div className="container mx-auto p-4">
                 <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">Comunidades conectadas</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {elementos1.map((elemento, index) => (
                        <Card key={index} {...elemento} />
                    ))}
                </div>
            </div>
                    <Translate onClick={handleButton}/>

        </div>
    );
}

export default Content;