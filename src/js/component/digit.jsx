import React from "react";
import PropTypes from "prop-types";

// Componente que representa un dígito individual
const Digit = ({ value }) => {
    return (
        <div className="digit">
            {value}
        </div>
    );
};

// Validación de tipos para el valor del dígito
Digit.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Digit;