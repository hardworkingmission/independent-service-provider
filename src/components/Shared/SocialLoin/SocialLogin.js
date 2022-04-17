import React from 'react';
import google from '../../../images/social-icons/google.png'
import github from '../../../images/social-icons/github.png'
const SocialLogin = () => {
    return (
        <div>
            <div className='flex items-center'>
                    <div className='h-[2px] bg-pink-600 w-full'>
                    </div>
                    <p className='mx-1'>Or</p>
                    <div className='h-[2px] bg-pink-600 w-full'>
                    </div>
            </div>
            <button className='w-full px-6 py-2.5 bg-pink-600 text-white rounded flex items-center justify-center mb-2'><img src={google} alt="" className='mr-1 h-[30px] w-[30px] rounded-[50%]' />Continue with Google</button>
            <button className='w-full px-6 py-2.5 bg-pink-600 text-white rounded flex items-center justify-center'><img src={github} alt="" className='mr-1 h-[30px] w-[30px] rounded-[50%]' />Continue with Github</button>
        </div>
    );
};

export default SocialLogin;