import React from 'react';
import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {FaTimesCircle} from "react-icons/fa";

function Blog(props) {
    const {id} = useParams();
    const {data: blog, setData: setblog, isLoading, error} = useFetch(`http://localhost:5000/blogs/${id}`);

    return (
        <div className="blog-details">

            {/*Error Block*/}
            {error &&
            <div className="loading error">
                <FaTimesCircle style={
                    {color: "#ee2f2f", fontSize: '2rem'}
                }/>
                <h2>
                    {error}
                </h2>
            </div>}

            {/*Loading Block*/}
            {isLoading && <div className={"loading"}><h2>Loading Data...</h2></div>}
            {blog && !error && (<div className="blog-content">
                <div className="blog-title">
                    <h2>{blog.title}</h2>
                </div>
                <div className="blog-author">
                    <p>{blog.author}</p>
                </div>
                <div className="blog-body">
                    <p>{blog.body}</p>
                </div>
            </div>)}


        </div>
    );
}

export default Blog;