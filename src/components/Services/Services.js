import React from 'react';
import useServices from '../../hooks/useServices/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services]=useServices()
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3'>
            {
                services.map(service=><Service key={service.id} service={service}/>)
            }
        </div>
    );
};

export default Services;