import Image from 'next/image';
import face from '../../assets/Robot face-cuate.svg';

const Translate = ({ onClick }) => {
  return (
    <a
      href="tu-enlace-aqui"
      onClick={onClick}
      className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
      style={{ 
        width: '70px', 
        height: '100px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textDecoration: 'none',
      }}
    >
      <Image src={face} alt="face" width={700} height={30} />
    </a>
  );
};

export default Translate;
