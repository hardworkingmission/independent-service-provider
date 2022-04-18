import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faPhone,faMessage } from '@fortawesome/free-solid-svg-icons'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const Contact = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                <div className="col text-center p-4">
                    <div className="icon my-2">
                        <FontAwesomeIcon className='text-pink-600 text-5xl' icon={faHome}/>
                    </div>
                    <div className="address">
                        <p className='text-xl font-bold'>VISIT ME</p>
                        <p>Please visit my Office.You are always welcomed</p>
                        <p className='italic text-pink-600 text-sm'>4118 Bee Street, Grand Rapids, Michigan, USA</p>
                    </div>
                </div>
                <div className="col text-center p-4">
                    <div className="icon my-2">
                        <FontAwesomeIcon className='text-pink-600 text-5xl' icon={faPhone}/>
                    </div>
                    <div className="address">
                        <p className='text-xl font-bold'>CALL ME</p>
                        <p>Please feel free to call me.You are always welcomed</p>
                        <p className='italic text-pink-600 text-sm'>Telephone- 231-844-9928, Mobile number- 616-774-2773</p>
                    </div>
                </div>
                <div className="col text-center p-4">
                    <div className="icon my-2">
                        <FontAwesomeIcon className='text-pink-600 text-5xl' icon={faMessage}/>
                    </div>
                    <div className="address">
                        <p className='text-xl font-bold'>MESSAGE ME</p>
                        <p>Please feel free to message me.You are always welcomed</p>
                        <p className='italic text-pink-600 text-sm'>whatsup number-14000000, Email- abc@gmail.com</p>
                    </div>
                </div>

            </div>
            <div className="location my-3">
                <MapContainer className="h-[300px] w-full" center={[23.7282063, 90.4387682]} zoom={13}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[23.7282063, 90.4387682]}>
                        <Popup>
                          <p>Latitude: 23.7282063</p>
                          <p>Longitude: 90.4387682</p>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Contact;