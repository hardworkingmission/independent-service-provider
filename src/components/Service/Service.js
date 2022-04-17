import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Service = ({service}) => {
    const{id,name,price,description,img}=service

    //mouse enter out effect added
    const [over,setOver]=useState('1')
    const appStyle={
        transform:`scale(${over})`,
        transition: `transform .5s ease` 
    }
    const navigate=useNavigate()
    return (
        <div className='col border border-2 rounded-lg relative' onMouseEnter={()=>setOver('1.03')} onMouseLeave={()=>setOver('1')}>
            <div className="service-image"  >
                <img src={process.env.PUBLIC_URL+`/service-images/${img}`} alt="" style={appStyle} className='rounded-t-lg'/>
            </div>
            <div className="service-info p-2 text-center">
                <h1 className='text-xl font-bold'>{name}</h1>
                <p className='font-bold text-lg'>Price: $<span className='text-pink-600'>{price}</span> </p>
                 <p>{description}</p>
            </div>
            <div className='mt-[50px]'>
                <button className='w-full bg-pink-600 text-xl font-bold py-2 px-3 rounded-b-lg text-white absolute bottom-0' onClick={()=>navigate(`/sevicedetail/${id}`)}>Book Now</button>
            </div> 
        </div>
    );
};

export default Service;