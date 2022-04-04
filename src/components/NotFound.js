import React from 'react';
import {Link} from "react-router-dom";
import {FaArrowCircleLeft, FaTimesCircle} from "react-icons/fa";

function NotFound(props) {
    return (
        <div className={"not-found"}>
            <div className={'main-error'}>
                    <FaTimesCircle style={
                        {fontSize: '4rem', paddingTop: '0.75rem', paddingRight: '2rem',
                        marginLeft:"15%"}
                    }/>
                <h2>HTTP 404</h2>
            </div>
            <p>Page not found!</p>
            <Link to={'/'}>
                <span className="icon">
                    <FaArrowCircleLeft style={
                        {color: "#f1356d", fontSize: '2rem'}
                    }/>
                </span>
                Back to homepage...
            </Link>
        </div>
    );
}

export default NotFound;