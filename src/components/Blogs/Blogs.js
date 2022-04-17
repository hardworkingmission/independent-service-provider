import React from 'react';

const Blogs = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <div className='p-2 my-2'>
                <div className="question">
                  <h1 className='font-bold lg:text-xl md:text-lg'>Q1.Difference between `authorization` and `authentication`.</h1>
                </div>
                <div className="answer">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left font-bold">
                                        Authentication
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left font-bold">
                                        Authorization
                                    </th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Authentication verifies user's itentity.
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Authorization gives permission to the user to access resources.
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        Authentication is the first step to enter a system
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                        Authorization gives perticular permission to the user to travel the system's resources.
                                    </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            It needs user login details
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            It needs user privilege
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                            After completing authentication process successfully,user enter the system.If authentication process is failed,user can not enter the system.
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-wrap">
                                            If an user is authorized for something, he can deal with it, if not he must be refused.
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <div className="question">
                  <h1 className='font-bold lg:text-xl md:text-lg'>Q2.Why are you using `firebase`? What other options do you have to implement authentication?</h1>
                </div>
                <div className="answer">
                    <p>Firebase is one of very few complete authentication packages.It is secure because all all security issues are directly mantained by google.It is very fast and easy to integrate the application.It provides realtime user authentication.All types of authentication system that are mostly used are available.A developer can get much time to invest for logic development without concerning about authentication.Firebase authentication supports email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login etc.</p>
                    <p className='font-bold'>Other options of Authentication:</p>
                    <ul className='pl-4' style={{listStyle:'disc'}}>
                        <li>Parse</li>
                        <li>Back4App</li>
                        <li>AWS Amplify</li>
                        <li>Kuzzle</li>
                        <li>Couchbase</li>
                    </ul>
                </div>

            </div>
            <div className="p-2">
                <div className="question">
                  <h1 className='font-bold lg:text-xl md:text-lg'>Q3.What other services does `firebase` provide other than authentication?</h1>
                </div>
                <div className="answer">
                    <p>Firebase is designed for solving verious type of real-life problems.It is most popular for its authentication service.It provides also others web services that is given bellow:</p>
                    <ul className='pl-4' style={{listStyle:'disc'}}>
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics</li>
                        <li>Predictions</li>
                        <li>Cloud Messaging</li>
                        <li>Dynamic Links</li>
                        <li>Remote Config</li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Blogs;