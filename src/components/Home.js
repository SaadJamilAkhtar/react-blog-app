import React from 'react';
import {FaTimesCircle} from "react-icons/fa";
import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

function Home(props) {

    const {
        data: blogs,
        setData: setBlogs,
        isLoading,
        error
    } = useFetch('http://localhost:5000/blogs?_sort=id&_order=desc');

    const delBlog = async (id) => {
        const data = await fetch('http://localhost:5000/blogs/' + id, {
            method : "DELETE"
        })
        setBlogs(blogs.filter(blog => blog.id !== id));
    }


    return (
        <div className="home">
            <div className={"page-heading"}>
                <h1>Recent Blogs</h1>
            </div>

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

            {/*Blog block*/}
            {blogs && !error && !isLoading && blogs.map(blog => {
                return (
                    <BlogList key={blog.id} blog={blog} onDelete={delBlog}/>
                )
            })}
        </div>
    );
}

export default Home;