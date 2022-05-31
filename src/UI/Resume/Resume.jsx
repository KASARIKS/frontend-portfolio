import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Resume.css';

const Resume = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='main-content'>
                <h3>About me: </h3>
                <p>
                    I`m Yaroslav Golovko, I was born in 9 April 2004 year.
                    I`m involved programming, calistenic, cycling, aikido, guitar.
                    I became a programmer because I have success in this area.
                </p>
                <h3>Technical skills: </h3>
                <p>
                    From languages on good level know javascript, c++, python. From frameworks on good level know React, Redux, Node, Bootstrap, Git.
                    From other technologies used thunk, axios, formik, react-router.
                    Also from languages know a bit php, c, assembler.
                    Also from technologies know on low level MySQL, JQuery.
                    Understand and use SOLID, FLUX, OOP, Life Cycle, Container and Presentation components,
                    Local and reducer`s states, javascript basics, hooks, HOCs.
                    Also know some algorithms and data structures fast sort, buble sort, binary searching etc, list,
                    objects, classes, maps, sets, etc.
                </p>
                <h3>Technical skills: </h3>
                <p>
                    <b>Languages:</b> Javascript, C++, C, Python, PHP, Assembler.<br></br>
                    <b>Technologies:</b> React, Redux, Node, thunk, formik, axios, react-router, JQuery, Bootstrap, HTML, CSS, SASS/SCSS, Git.<br />
                    <b>English level: </b> B2.
                </p>
                <h3>Education: </h3>
                <ul>
                    <li>2022 лицей при СГУГиТ</li>
                    <li>2020 Гимназия 17</li>
                    <li>Free course "React JS - путь самурая 1.0"</li>
                    <li>Python course (Movavi)</li>
                    <li>Fullstack course(PHP, JQuery, MySQL, javascript)(Movavi)</li>
                </ul>
                <h3>Recently projects: </h3>
                <p>
                    <b style={{ 'fontSize': '18px' }}>Social network</b><br />
                    <b>Describe: </b> It`s a netwowk, that a created on course "Путь самурая". It created for learn fundamentals of fronted developming.<br />
                    <b>Languages: </b> JavaScript.<br />
                    <b>Environments: </b>React, Redux, HTML, CSS, JQuery, Node.<br />
                </p>
                <p>
                    <b>GitHub: </b><a href='https://github.com/KASARIKS'>https://github.com/KASARIKS</a>
                </p>
            </div>
        </div>
    );
}

export default Resume;