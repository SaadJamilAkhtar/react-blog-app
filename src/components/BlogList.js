import React from 'react';
import {Link} from 'react-router-dom';

function BlogList(props) {

    return (

        <div className="blog-preview">
            <Link to={'/blogs/' + props.blog.id} className={'blogLink'}>
                <h2>{props.blog.title}</h2>
                <p>by: {props.blog.author}</p>
            </Link>
            <div className={'btn-container'}>
                <button className={"btn-danger"} onClick={() => props.onDelete(props.blog.id)}>Delete blog</button>
            </div>
        </div>

    );
}

export default BlogList;