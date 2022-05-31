import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Contacts.css';

const Contacts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='contacts'>
                <b>GitHub: </b><a href='https://github.com/KASARIKS'>https://github.com/KASARIKS</a><br></br>
                <b>VK: </b><a href='https://vk.com/id382175951'>https://vk.com/id382175951</a><br></br>
                <b>Mail: </b>golovko085@gmail.com<br></br>
            </div>
        </div>
    );
}

export default Contacts;
