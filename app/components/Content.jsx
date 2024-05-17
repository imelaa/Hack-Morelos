import Card from "./Cards/Card";

const elementos = [
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Niyolpaki ipampa nimitsixmati",
        textoIngles: "Hi, how are you?",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Niyolpaki ipampa nimitsixmati",
        textoIngles: "Hi, how are you?",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Niyolpaki ipampa nimitsixmati",
        textoIngles: "Hi, how are you?",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Niyolpaki ipampa nimitsixmati",
        textoIngles: "Hi, how are you?",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Niyolpaki ipampa nimitsixmati",
        textoIngles: "Hi, how are you?",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Niyolpaki ipampa nimitsixmati",
        textoIngles: "Hi, how are you?",
    },
];

const Content = () => {
    return (
        <div className="bg-color-7 rounded-lg p-4">
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {elementos.map((elemento, index) => (
                        <Card key={index} {...elemento} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Content;