import React from 'react';

function BlogList(props) {
    return (
        <div className="blog-preview">
            <h2>{props.blog.title}</h2>
            <p>by: {props.blog.author}</p>

        </div>
    );
}

export default BlogList;