import Card from "../../components/Cards/Card";

const elementos1 = [
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "¿Niquin amo quenman in calidades tlen nochi nanacatl?",
        textoIngles: "How are my sons grades?",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Nimitznotzotza in tlacatl xochitlalpan in tlaescuelahqueh",
        textoIngles: "I want to matriculate my son in this school",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "¿Tlazohti ihcuac quimatic?",
        textoIngles: "What do I need to buy?",
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