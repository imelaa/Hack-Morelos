import Card from "../../components/Cards/Card";
import left from "../../assets/left.gif";
import right from "../../assets/right.gif";
import market from "../../assets/market.gif";
import school from "../../assets/school.gif";
import where from "../../assets/where.gif";
import mapa from "../../assets/map.gif";

const elementos1 = [
    {
        imageUrl: where,
        textoDialecto: "¿Canin tiitztoc?",
        textoIngles: "Where are you?",
    },
    {
        imageUrl: left,
        textoDialecto: " opochtli",
        textoIngles: "left",
    },
    {
        imageUrl: right,
        textoDialecto: "yeccapan",
        textoIngles: "right",
    },
    {
        imageUrl: market,
        textoDialecto: "Tlachializtli",
        textoIngles: "Market",
    },
     {
        imageUrl: school,
        textoDialecto: "Telpochcalli",
        textoIngles: "School",
    },
    {
        imageUrl: mapa,
        textoDialecto: "¿Tlahtoa nelli in Cuernavaca?",
        textoIngles: "How do i get to Cuernavaca?",
    },
];

const Content = () => {
    return (
        <div className="bg-color-7 rounded-lg p-4">
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {elementos1.map((elemento, index) => (
                        <Card key={index} {...elemento} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Content;