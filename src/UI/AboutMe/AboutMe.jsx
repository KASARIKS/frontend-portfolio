import React from 'react';
import NavBar from '../NavBar/NavBar';
import './AboutMe.css';
import ava from '../../images/FTYUC7WIYGg.jpg'

const AboutMe = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className='paragraph'>
                <p>
                    I`m Yaroslav Golovko, I was born in 9 April 2004 year. 
                    I`m involved programming, calistenic, cycling, aikido, guitar. 
                    I became a programmer because I have success in this area.
                </p>
                <img src={ava} alt='my avatar'></img>
            </div>
        </div>
    );
}

export default AboutMe;