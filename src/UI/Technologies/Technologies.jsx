import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Technologies.css';

const Technologies = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='technologies'>
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
                <p>
                    <b>Languages:</b> Javascript, C++, C, Python, PHP, Assembler.<br></br>
                    <b>Technologies:</b> React, Redux, Node, thunk, formik, axios, react-router, JQuery, Bootstrap, HTML, CSS, SASS/SCSS, Git.<br />
                    <b>English level: </b> B2.
                </p>
            </div>
        </div>
    );
}

export default Technologies;