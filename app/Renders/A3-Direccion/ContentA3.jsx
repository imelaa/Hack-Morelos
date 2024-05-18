import Card from "../../components/Cards/Card";

const elementos1 = [
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Tlahtoa in topan, tlahtoa in huēyi",
        textoIngles: "Go right/ Go left",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Tlalticpac 1 ka 2 keman 3 itech",
        textoIngles: "go/stop",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Tlachializtli, telpochcalli, teoxochi",
        textoIngles: "Market / school/ church",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "¿Tlahtoa nelli in Cuernavaca?",
        textoIngles: "how do i get to Cuernavaca?",
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