import React from 'react';
import profilePhoto from '../../images/profile-photo/scaled.jpg'
const About = () => {
    return (
        <div className='w-5/6 mx-auto md:flex'>
            <div className="lg:w-2/6 md:w-2/6 w-full py-2">
                <div className="profile-photo flex justify-center">
                    <img src={profilePhoto} alt="" className='rounded-[50%] shadow-lg' />
                </div>
                <div className="name text-center uppercase text-3xl font-bold my-2">
                    <h1 className='shadow-lg'>Md. Milon Shaikh</h1>
                </div>
                <div className="skill">
                    <div className="skill-head py-2 text-center">
                        <h1 className='text-gray-400 text-xl italic'>Summary Of</h1>
                        <p className='uppercase text-3xl font-bold'>Skills</p>
                    </div>
                    <div className="skill-body">
                        <div className='my-1'>
                            <p className='font-bold'>CSS, HTML</p>
                            <div className="w-full bg-gray-200 rounded-full">
                                <div className="text-white text-xs font-medium bg-pink-600 text-center p-0.5 leading-none rounded-l-full w-[90%]" > 90%</div>
                            </div>
                        </div>
                        <div className='my-1'>
                            <p className='font-bold'>JAVASCRIPT</p>
                            <div className="w-full bg-gray-200 rounded-full">
                                <div className="text-white text-xs font-medium bg-pink-600 text-center p-0.5 leading-none rounded-l-full w-[70%]" > 70%</div>
                            </div>
                        </div>
                        <div className='my-1'>
                            <p className='font-bold'>REACT JS</p>
                            <div className="w-full bg-gray-200 rounded-full">
                                <div className="text-white text-xs font-medium bg-pink-600 text-center p-0.5 leading-none rounded-l-full w-[60%]" > 60%</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="lg:w-4/6 md:w-4/6 w-full p-5 flex items-center">
                <div>
                    <h1 className='text-2xl font-bold'>My Goal is to become a Full Stack Web Developer</h1>
                    <p>I am working as hard as possible to learn verious web technologies.I have choosen Javascript programming language for my primary carrier path.Using Javascript I have been solving verious web related problems.In a modern day, React js library is very popular of developing UI for single page application.It is a Javascript library for front-end devvelopment.I have been gathering mass knowledge about React js.My plan is be hands on react js within 6 months.Side by side I have been learing Node Js for back-end development and also learning SQL and NoSQL for Database Query.OverAll after 1 year of learning verious web technologies and developing many projects using these technologies, I will be FullStack Web Developer InshaAllah.</p>
                </div>
                
            </div>
        </div>
    );
};

export default About;