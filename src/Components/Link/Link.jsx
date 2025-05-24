import React from 'react';
import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li  className='mr-4 hover:bg-gray-200 text-xl hover:text-black px-6 py-2 rounded-xl '><a href={route.path}>{route.name}</a></li>
    );
};
Link.protoType={
    route: PropTypes.object
}
export default Link;