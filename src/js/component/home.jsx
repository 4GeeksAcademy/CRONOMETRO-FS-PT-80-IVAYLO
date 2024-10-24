import React from "react";
import Digit from "./digit.jsx";

// Componente principal Home
const Home = ({ segundos }) => {
    const stringSegundos = segundos.toString().padStart(6, "0");

    return (
        <div className="text-center">
            <Digit value={<i className="fas fa-clock"></i>} />
            <Digit value={stringSegundos[0]} />
            <Digit value={stringSegundos[1]} />
            <Digit value={stringSegundos[2]} />
            <Digit value={stringSegundos[3]} />
            <Digit value={stringSegundos[4]} />
            <Digit value={stringSegundos[5]} />
        </div>
    );
};

export default Home;
