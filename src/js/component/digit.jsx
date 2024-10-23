import React from "react";
import PropTypes from "prop-types";

const Digit = ({ value }) => {
    return (
        <div className="digit">
            {value}
        </div>
    );
};

Digit.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Digit;