import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import './Login.css'
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoGooglePlus } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';

export const Login = () => {
    return (
        <>
          <div className='loginCom' >
            <div className='login'>
                <div className='logintab'>
                    <div className='logintext'>
                        <span>
                            Sign In
                        </span>
                    </div>

                    <div className='icons' >
                        <FaFacebookF className='icontab tabicon' />
                        <BiLogoGooglePlus className='icontab' />
                        <FaLinkedinIn className='icontab tabicon'/>
                    </div>

                    <div className='gmailAccount' >
                        <Typography>our use gmail account</Typography>
                    </div>
                    <div className='textfields' >
                        <TextField fullWidth id="standard-basic" label="USERNAME" variant="standard" />
                    </div>
                    <div className='textfields' >
                        <TextField fullWidth id="standard-basic" label="PASSWORD" variant="standard" />
                    </div>
                    <div className='forgetPass' >
                        <span>Forget your password?</span>
                    </div>
                    <div className='login-btn' >
                        <button>Sign In</button>
                    </div>
                </div>
            </div>
     
          <div className='sidetabCss' >
            <div className='sideTab' >
                <div className='welcome' >
                     <span> Welcome Back! </span>
                </div>
                <div>
                     <span> Enter Personal Details to your employee account </span>
                </div>
            </div>
          </div>
          </div>
        </>
    )
}
