import Card from "../../components/Cards/Card";

const elementos1 = [
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Hola como estas",
        textoIngles: "Hi, how are you?",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Niyolpaki ipampa nimitsixmati",
        textoIngles: "elementos 1",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Niyolpaki ipampa nimitsixmati",
        textoIngles: "elementos 1",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Niyolpaki ipampa nimitsixmati",
        textoIngles: "elementos 1",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Niyolpaki ipampa nimitsixmati",
        textoIngles: "elementos 1",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Niyolpaki ipampa nimitsixmati",
        textoIngles: "elementos 1",
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