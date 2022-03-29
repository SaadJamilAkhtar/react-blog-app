import React from 'react';
import {FaTimesCircle} from "react-icons/fa";
import {useState, useEffect} from "react";
import BlogList from "./BlogList";


function Home(props) {

    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        setIsLoading(true);
        try {
            const data = await fetch('http://localhost:5000/blogss');
            if (!data.ok) {
                throw new Error("Could not Fetch data.")
            } else {
                setError(null);
                setBlogs(await data.json());
            }
        } catch (e) {
            setIsLoading(false);
            setError(e.message);
        }
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

            {/*Error Block*/}
            {error &&
            <div className="loading error">
                <FaTimesCircle style={
                    {color:"#ee2f2f",fontSize: '2rem'}
                }/>
                <h2>
                    {error}
                </h2>
            </div>}

            {/*Loading Block*/}
            {isLoading && <div className={"loading"}><h2>Loading Data...</h2></div>}

            {/*Blog block*/}
            {blogs && blogs.map(blog => {
                return (
                    <BlogList key={blog.id} blog={blog} onDelete={delBlog}/>
                )
            })}
        </div>
    );
}

export default Home;