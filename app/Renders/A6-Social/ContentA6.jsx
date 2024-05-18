import Card from "../../components/Cards/Card";

const elementos1 = [
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "¿Yei tlahtoa?",
        textoIngles: "Hi, how are you?",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "In Omeo …",
        textoIngles: "My name is …",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "¿Inic tlen tlen huehuetlatolli?",
        textoIngles: "What's your name?",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "¡Tlazohcamati, tlakati, tlamantli!",
        textoIngles: "Please, thanks, you're welcome",
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