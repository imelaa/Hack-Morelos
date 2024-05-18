import Card from "../../components/Cards/Card";

const elementos1 = [
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "¿Totla nixtlakatlakamej?",
        textoIngles: "Who Will be my boss?",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "¿Tla notzontli niempa?",
        textoIngles: "How much Will I win?",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "Amotl nocuauhtic",
        textoIngles: "How many hours do I have to work?",
    },
    {
        imageUrl: "/images/placeholder.jpg",
        textoDialecto: "¿Mitzin noyolia oquichtin tlen in tlaxcala?",
        textoIngles: "What's my entry hour?",
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