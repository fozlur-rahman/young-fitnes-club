import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div className='blogs'>
                <div className='blog'>
                    <h3>How does React.js works?</h3>
                    <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.).</p>
                </div>
                <div className='blog'>
                    <h3>What is the useEffect used othe than loading data ?</h3>
                    <p> Validating an input while it's receiving characters is another great application for useEffect. Whilst the input is being stored in a state using useState, the validation takes place every time the input changes, giving immediate feedback to the user.</p>
                </div>
                <div className='blog'>
                    <h3>Difference between props and state .</h3>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;