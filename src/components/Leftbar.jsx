import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import Image from './Logo.png'

function Leftbar() {

    const dispatch= useDispatch();
    const navigate=useNavigate();
 

    
    
    const dashboardHandler = ()=>{
        navigate('/Dashboard')
    }
    const settingsHandler = ()=>{
        navigate('/Settings')
    }
    const usersHandler = () =>{
        navigate('/Users')
    }
    const IntroHandler = () =>{
        navigate('/Intro')
    }
    const listHandler = () =>{
        navigate('/List')
    }
    const logoutHandler = () =>{
        dispatch(logout())
        navigate('/')
    }
    return (
        <>
            <div className='left-bar'>
                <div className='left-bar-container'>
                    <div className="logo"><img src={Image} width={170} height={150}/></div>
                    <button className='left-bar-button nav-btn' onClick={IntroHandler}>
                        Plantify
                    </button>
                    <button className='left-bar-button nav-btn' onClick={dashboardHandler}>
                        Dashboard
                    </button>
                    <button className='left-bar-button nav-btn' onClick={usersHandler}>
                        Scan and know
                    </button>
                    <button className='left-bar-button nav-btn' onClick={settingsHandler}>
                        Settings
                    </button>
                    <button className='left-bar-button-logout nav-btn' onClick={logoutHandler}>
                        Logout
                    </button>

                </div>
            </div>
        </>
    )
}

export default Leftbar