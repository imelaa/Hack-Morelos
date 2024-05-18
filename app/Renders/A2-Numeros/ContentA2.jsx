import Card from "../../components/Cards/Card";
import uno from "../../assets/uno.gif";
import dos from "../../assets/dos.gif";
import tres from "../../assets/tres.gif";
import cuatro from "../../assets/cuatro.gif";
import cinco from "../../assets/cinco.gif";
import seis from "../../assets/seis.gif";
import siete from "../../assets/siete.gif";
import ocho from "../../assets/ocho.gif";
import nueve from "../../assets/nueve.gif";
import cero from "../../assets/cero.gif";


const elementos1 = [
    {
        imageUrl: uno,
        textoDialecto: "Ce",
        textoIngles: "One",
    },
    {
        imageUrl: dos,
        textoDialecto: "ōme",
        textoIngles: "Two",
    },
    {
        imageUrl: tres,
        textoDialecto: "Eyi",
        textoIngles: "Three",
    },
    {
        imageUrl: cuatro,
        textoDialecto: "nahui ",
        textoIngles: "Four",
    },
    {
        imageUrl: cinco,
        textoDialecto: "Macuilli",
        textoIngles: "Five",
    },
    {
        imageUrl: seis,
        textoDialecto: "Chicuace",
        textoIngles: "Six",
    },
    {
        imageUrl: siete,
        textoDialecto: "Chicome",
        textoIngles: "Seven",
    },
    {
        imageUrl: ocho,
        textoDialecto: "Chicueyi",
        textoIngles: "Eight",
    },
    {
        imageUrl: nueve,
        textoDialecto: "Chiucnahui",
        textoIngles: "Nueve",
    },
    {
        imageUrl: cero,
        textoDialecto: " Yonce",
        textoIngles: "zero",
    },
];

const Content = () => {
    return (
        <div className="bg-color-7 rounded-lg p-4">
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {elementos1.map((elemento, index) => (
                        <Card key={index} {...elemento} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Content;