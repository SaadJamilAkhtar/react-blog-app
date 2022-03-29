import React from 'react';
import {Link} from 'react-router-dom';

function BlogList(props) {

    return (
        <Link to={'/blogs/' + props.blog.id} className={'blogLink'}>
            <div className="blog-preview">
                <h2>{props.blog.title}</h2>
                <p>by: {props.blog.author}</p>
                <div className={'btn-container'}>
                    <button className={"btn-danger"} onClick={() => props.onDelete(props.blog.id)}>Delete blog</button>
                </div>
            </div>
        </Link>
    );
}

export default BlogList;