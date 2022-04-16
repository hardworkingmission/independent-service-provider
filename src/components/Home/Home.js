import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <section>
                <Banner/>
            </section>
            <section>
                <h1 className='text-pink-600 text-4xl font-bold text-center'>Services</h1>
            </section>
            
        </div>
    );
};

export default Home;