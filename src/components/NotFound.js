import React from 'react';
import {Link} from "react-router-dom";
import {FaArrowCircleLeft} from "react-icons/fa";

function NotFound(props) {
    return (
        <div className={"not-found"}>
            <h2>HTTP 404</h2>
            <p>Page not found!</p>
            <Link to={'/'}><span className="icon"><FaArrowCircleLeft/></span>Back to homepage...</Link>
        </div>
    );
}

export default NotFound;