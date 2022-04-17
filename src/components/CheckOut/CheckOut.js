import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomModal from '../CustomModal/CustomModal';

const CheckOut = () => {
    // hooks
    const {serviceId}=useParams()
    const navigate=useNavigate()

    //form states
    const [state,setState]=useState({name:'',email:'',address:'',phone:''})
    const [agree,setAgree]=useState(false)

    //for custom modal
    const [modalIsOpen, setIsOpen] = useState(false);
    const closeModal=()=>{
        setIsOpen(false)
        navigate('/')
    }

    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setIsOpen(true)
        
    }

    return (
        <div className='w-5/6 mx-auto py-3 flex justify-center'>
            <CustomModal closeModal={closeModal} modalIsOpen={modalIsOpen}>
            </CustomModal>
            <div className="lg:w-2/6 md:w-3/6 w-full p-6 rounded-lg shadow-lg bg-white ">
            <h1 className='text-xl text-pink-600 font-bold my-1'>WelCome to Booking..!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-2">
                        <label htmlFor="exampleInputName" className="form-label inline-block mb-2 text-gray-700">Your Name</label>
                        <input type="text" className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputName"
                        aria-describedby="nameHelp" placeholder="Enter your name" name='name' onChange={handleChange} required/>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                        <input type="email" className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                        aria-describedby="emailHelp" placeholder="Enter email" name='email' onChange={handleChange} required/>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="exampleInputAddress" className="form-label inline-block mb-2 text-gray-700">Address</label>
                        <input type="text" className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputAddress"
                        aria-describedby="addressHelp" placeholder="House, Streets, City" name='address'  onChange={handleChange} required/>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="exampleInputPhone" className="form-label inline-block mb-2 text-gray-700">Phone Number</label>
                        <input type="text" className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPhone"
                        aria-describedby="phoneHelp" placeholder="Enter Phone Number" name='phone' onChange={handleChange} required/>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <div className="form-group form-check">
                            <input type="checkbox"
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-pink-600 checked:border-pink-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            id="exampleCheck2" onChange={()=>setAgree(!agree)}/>
                            <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
                        </div>
                    </div>
                    <button type="submit" className="
                    w-full
                    px-6
                    py-2.5
                    bg-pink-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-pink-700 hover:shadow-lg
                    focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-pink-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out" disabled={agree?false:true}>Confirm</button>
                    
                </form>
               
            </div>
        </div>
    );
};

export default CheckOut;