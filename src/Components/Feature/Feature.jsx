import React from 'react';
import PropTypes from 'prop-types';
import { GoDotFill } from 'react-icons/go';
import { FaCheckCircle } from 'react-icons/fa';
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex  gap-5 items-center mt-3'><FaCheckCircle className='text-green-400'/> {feature}</p>
        </div>
    );
};
Feature.propTypes={
    feature: PropTypes.string
}

export default Feature;