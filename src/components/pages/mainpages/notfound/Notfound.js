import React from 'react';
import './Notfound.css'

const Notfound = () => {
    return (
        <div className="contentss">
            <div className="containersss">
                <h2>Oops! Page not found.</h2>
                <h1>404</h1>
                <p>We can't find the page you're looking for.</p>
                <a href="http://localhost:3000/">Go back home</a>
            </div>
        </div>
    );
}

export default Notfound;
