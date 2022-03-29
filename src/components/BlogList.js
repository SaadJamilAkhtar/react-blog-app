import React from 'react';

function BlogList(props) {

    return (
            <div className="blog-preview">
                <h2>{props.blog.title}</h2>
                <p>by: {props.blog.author}</p>
                <div className={'btn-container'}>
                    <button className={"btn-danger"} onClick={() => props.onDelete(props.blog.id)}>Delete blog</button>
                </div>
            </div>
    );
}

export default BlogList;