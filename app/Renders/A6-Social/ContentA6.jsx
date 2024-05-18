import Card from "../../components/Cards/Card";
import hi from "../../assets/hi.gif";
import nombre from "../../assets/nombre.gif";
import qnombre from "../../assets/qnombre.gif";
import welcome from "../../assets/welcome.gif";

const elementos1 = [
    {
        imageUrl: hi,
        textoDialecto: "¿Yei tlahtoa?",
        textoIngles: "Hi, how are you?",
    },
    {
        imageUrl: nombre,
        textoDialecto: "In Omeo …",
        textoIngles: "My name is …",
    },
    {
        imageUrl: qnombre,
        textoDialecto: "Piyalli, ¿queniuhqui motocah?",
        textoIngles: "Hello, what's your name?",
    },
    {
        imageUrl: welcome,
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