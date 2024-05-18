import Card from "../../components/Cards/Card";
import Tarjeta from "../../assets/tarjeta.gif";
import Hungry from "../../assets/hungry.gif";
import DontLike from "../../assets/donlike.gif";
import Hamburgesa from "../../assets/hamburguesa.gif";

const elementos1 = [
    {
        imageUrl: Hungry,
        textoDialecto: "Ni nemiyah Ayac, nimitzquia",
        textoIngles: "I'm hungry",
    },
    {
        imageUrl: DontLike,
        textoDialecto: "Tlalticpac no izqui",
        textoIngles: "I don´t like this",
    },
    {
        imageUrl: Hamburgesa,
        textoDialecto: "i-kwiwan ton-kwahpiloa",
        textoIngles: "Quiero una hamburguesa",
    }, {
        imageUrl: Tarjeta,
        textoDialecto: "¿Tla ximopan in tlatzotl?",
        textoIngles: "Can I pay by card? ",
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