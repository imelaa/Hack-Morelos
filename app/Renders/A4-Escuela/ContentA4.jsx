import Card from "../../components/Cards/Card";
import enter from "../../assets/enter.gif";
import teacher from "../../assets/teacher.gif";
import student from "../../assets/student.gif";
import morning from "../../assets/morning.gif";


const elementos1 = [
    {
        imageUrl:enter,
        textoDialecto: "Tlamachtihquetl; ¿hueliz nipano",
        textoIngles: "Teacher; can I enter/exit?",
    },
    {
        imageUrl: morning,
        textoDialecto: "Piyali tlamachtihquetl",
        textoIngles: "Hello, good morning teacher",
    },
     {
        imageUrl: teacher,
        textoDialecto: "Tlamachtihquetl",
        textoIngles: "Teacher",
    },
    {
        imageUrl: student,
        textoDialecto: "Momachtihquetl",
        textoIngles: "Student",
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