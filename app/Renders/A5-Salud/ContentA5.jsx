import Card from "../../components/Cards/Card";

const elementos1 = [
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Ninemi tontepa",
        textoIngles: "Im sick",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "tlen tech catah caualli?",
        textoIngles: "How much does the medicine costs?",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "huelih auakitekiya tlanextilol",
        textoIngles: "Call an ambulance",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Tlalpanawak, huilapanawak, miquizpanawak, huetsipanawak, tonaltsiawak, tonalmeh, tepeilhuitl",
        textoIngles: "monday, tuesday, wednesday, thursday, friday, saturday, sunday",
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