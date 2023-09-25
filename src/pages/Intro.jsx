import React from 'react'
import Layout from '../components/Layout'
import background from './one.jpg';
function Intro() {
    return (
        <>

            <Layout />
            <div className='main-wrapper' style={{ backgroundImage: `url(${background})`, backgroundSize:`1400px` }}>
                <div className='welcome-container'>
                    <h1> Intro </h1>
                </div>

            </div>
        </>
    )
}

export default Intro