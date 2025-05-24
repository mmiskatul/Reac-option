import React from 'react';
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PricesOption = ({pricesoption}) => {
    const {planName,price,features}=pricesoption;
    return (
        <div className='bg-gray-700 p-13 rounded-2xl hover:scale-107 hover:bg-gray-400 hover:text-gray-950 flex flex-col gap-8 justify-center items-center'> 
            <h2 className='text-center'>
                <span className='text-6xl font-extrabold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-5xl font-bold text-center'>{planName}</h4>
            <div className='pl-6 flex-grow'>
                {
                features.map((feature,idx)=> <Feature key={idx} feature={feature}/> )
            }
            </div>
            <button className='text-white w-full text-3xl font-bold bg-green-600 px-6 py-3 rounded-xl hover:scale-110 hover:cursor-pointer border hover:border-black active:scale-95 active:bg-green-600 hover:bg-green-800 '>Buy Now </button>
        </div>
    );
};
PricesOption.protoTypes ={
    pricesoption: PropTypes.object
}
export default PricesOption;