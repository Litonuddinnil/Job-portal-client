import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext/AuthContext';

const SocialLogin = () => {
    const {signInGoogle} = useContext(AuthContext);
    const handlerGoogleLogin = ()=>{
        signInGoogle()
        .then(result =>{
            console.log(result);
        })
        .catch(err =>{
            console.log(err.message);
        })
    }

    return (
        <div className='text-center'>
            <div className='divider'>OR</div>
            <button onClick={handlerGoogleLogin} className='btn'>Google Login</button>
        </div>
    );
};

export default SocialLogin;