import React from 'react';
import {useState, useEffect} from "react";
import BlogList from "./BlogList";

function Home(props) {

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        getData()
    },[])

    const getData = async () => {
        const data = await fetch('http://localhost:5000/blogs');
        setBlogs(await data.json());
    }

    const delBlog = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id));
    }


    return (
        <div className="home">
            <div className={"page-heading"}>
                <h1>Recent Blogs</h1>
            </div>
            { blogs && blogs.map(blog => {
                return (
                    <BlogList key={blog.id} blog={blog} onDelete={delBlog}/>
                )
            })}
        </div>
    );
}

export default Home;