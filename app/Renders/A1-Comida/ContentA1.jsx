import Card from "../../components/Cards/Card";

const elementos1 = [
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "¿Tlazoa izqui?",
        textoIngles: "What's this?",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Ni nemiyah Ayac, nimitzquia",
        textoIngles: "I'm hungry",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Tlalticpac no izqui",
        textoIngles: "I don´t like this",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "¿Niquin ticmatihtoca in tonaltieh?",
        textoIngles: "Can I get more of this?",
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