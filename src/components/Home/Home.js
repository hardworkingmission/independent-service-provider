import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <section>
                <Banner/>
            </section>
            <section className='py-3'>
                <h1 className='text-pink-600 text-4xl font-bold text-center my-2'>Services</h1>
                <Services/>
            </section>
            
        </div>
    );
};

export default Home;