import React from 'react';
import {useState, useEffect} from "react";
import BlogList from "./BlogList";

function Home(props) {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getData();
    },[])

    const getData = async () => {
        setIsLoading(true);
        const data = await fetch('http://localhost:5000/blogs');
        setBlogs(await data.json());
        setIsLoading(false);
    }

    const delBlog = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id));
    }


    return (
        <div className="home">
            <div className={"page-heading"}>
                <h1>Recent Blogs</h1>
            </div>
            {isLoading && <div className={"loading"}><h2>Loading Data...</h2></div>}
            { blogs && blogs.map(blog => {
                return (
                    <BlogList key={blog.id} blog={blog} onDelete={delBlog}/>
                )
            })}
        </div>
    );
}

export default Home;