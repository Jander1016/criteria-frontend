import React from 'react';
import welcome from "../assets/images/welcome.png"
import Logo from "../assets/images/Logo.jpg"

const StartPage: React.FC = () => {
    const handleStartClick = () => {
    window.location.href = '/evaluation';
};

        return (
        <div className="w-full h-screen flex flex-col items-center text-center space-y-4 ">
            <img src={welcome} alt="Welcome" className= "w-full max-h-[450px] object-cover"/>
            <div className="flex justify-end w-full">
                <img src={Logo} alt="Criteria" className="w-48 h-26 mr-19" />
            </div>
                <h1 className="text-blue-500 text-4xl py-4">Encuesta de Evaluación del desempeño del empleado</h1>
            <article className="text-left text-gray-600 text-lg px-6 ">
                <p>Bienvenido/a al cuestionario de Evaluación del desempeño del empleado.<br />
                    El objetivo de esta encuesta es medir la actuación del empleado en el
                    ámbito laboral, tanto para reconocer y potenciar sus fortalezas como
                    para identificar y mejorar sus puntos débiles.
                <br />
                    Tu participación es muy importante.
                <br />
                <br />
                    Muchas gracias.
                </p>
            </article>
            <button className="bg-[#FB7434] hover:bg-orange-600 text-white font-bold py-2 px-10 rounded"
                onClick={handleStartClick}>
                    Iniciar
            </button>
        </div>
    );
};

export default StartPage;