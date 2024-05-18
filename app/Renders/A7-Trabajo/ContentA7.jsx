import Card from "../../components/Cards/Card";
import contrato from "../../assets/contrato.gif";
import pago from "../../assets/pago.gif";
import horaEntrada from "../../assets/hora.gif";


const elementos1 = [
    {
        imageUrl: contrato,
        textoDialecto: "¿Camo xitechmacaqui in on tetzcalteca?",
        textoIngles: "Are you hiring at the moment?",
    },
    {
        imageUrl: pago,
        textoDialecto: "¿Tla notzontli niempa?",
        textoIngles: "How much Will I win?",
    },
    {
        imageUrl: horaEntrada,
        textoDialecto: "¿tica c quicah in yancuican?",
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