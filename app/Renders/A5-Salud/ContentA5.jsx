import Card from "../../components/Cards/Card";
import sick from "../../assets/sick.gif";
import ambulance from "../../assets/ambulance.gif";
import doctor from "../../assets/doctor.gif";

const elementos1 = [
    {
        imageUrl: sick,
        textoDialecto: "Ninemi tontepa",
        textoIngles: "Im sick",
    },
    {
        imageUrl: ambulance,
        textoDialecto: "huelih auakitekiya tlanextilol",
        textoIngles: "Call an ambulance",
    },

       {
        imageUrl: doctor,
        textoDialecto: "tíicitl",
        textoIngles: "Doctor",
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