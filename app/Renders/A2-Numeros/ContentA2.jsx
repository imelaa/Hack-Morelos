import Card from "../../components/Cards/Card";

const elementos1 = [
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "tēcpatl, ōme, ūnui, nahui, mācuīlti, chicuītl, chicōme, chicuepīlli, chicuicuīl, mātlahtli",
        textoIngles: "one, two, three, four, five, six, seven, eight, nine, ten",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Tlalticpac 1 ka 2 keman 3 itech",
        textoIngles: "One plus two equals three",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Ñakatl kaxkai apan ati",
        textoIngles: "four minus three equals one",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "temach ka miquizquej in xiquipilli",
        textoIngles: "two times three equals six",
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