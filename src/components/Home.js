import React from 'react';
import {useState} from "react";
import BlogList from "./BlogList";

function Home(props) {

    const [blogs, setBlogs] = useState([
        {title: "My new website", body: "lorem ipsum...", author: 'mario', id: 1},
        {title: "Welcome party!", body: "lorem ipsum...", author: 'yoshi', id: 2},
        {title: "Web dev top tips!", body: "lorem ipsum...", author: 'mario', id: 3}]);

    const delBlog = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id));
    }
    return (
        <div className="home">
            <div className={"page-heading"}>
                <h1>Recent Blogs</h1>
            </div>
            {blogs.map(blog => {
                return (
                    <BlogList key={blog.id} blog={blog} onDelete={delBlog}/>
                )
            })}
        </div>
    );
}

export default Home;