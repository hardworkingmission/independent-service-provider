import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {serviceId}=useParams()
    return (
        <div className='w-5/6 mx-auto'>
            <h1>Welcome To Checkout:{serviceId}</h1>
        </div>
    );
};

export default CheckOut;