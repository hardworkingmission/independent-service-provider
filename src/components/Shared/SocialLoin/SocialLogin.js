import React from 'react';
import { useSignInWithGoogle,useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../images/social-icons/google.png'
import github from '../../../images/social-icons/github.png'
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    //hooks
    const [signInWithGoogle, googleAuthUser, googleAuthLoading, googleAuthError] = useSignInWithGoogle(auth);
    const [signInWithGithub,githubAuthUser,githubAuthLoading,githubAuthError]=useSignInWithGithub(auth)
    const navigate=useNavigate()
    
    //redirect after login
    if(googleAuthUser||githubAuthUser){
        navigate('/')
    }

    //sign in with github and google
    const handleSignInWithGoogle=()=>{
        signInWithGoogle()
    }
    const handleSignInWithGithub=()=>{
        signInWithGithub()
    }
    return (
        <div>
            <div className='flex items-center'>
                    <div className='h-[2px] bg-pink-600 w-full'>
                    </div>
                    <p className='mx-1'>Or</p>
                    <div className='h-[2px] bg-pink-600 w-full'>
                    </div>
            </div>
            {/* error messages */}
            <p className='text-red-600'>{(googleAuthError&&googleAuthError.message)||(githubAuthError&&githubAuthError.message)}</p>

            <button className='w-full px-6 py-2.5 bg-pink-600 text-white rounded flex items-center justify-center mb-2' onClick={()=>handleSignInWithGoogle()}><img src={google} alt="" className='mr-1 h-[30px] w-[30px] rounded-[50%]'
             />Continue with Google</button>

            <button className='w-full px-6 py-2.5 bg-pink-600 text-white rounded flex items-center justify-center'onClick={()=>handleSignInWithGithub()}><img src={github} alt="" className='mr-1 h-[30px] w-[30px] rounded-[50%]' />Continue with Github</button>
        </div>
    );
};

export default SocialLogin;