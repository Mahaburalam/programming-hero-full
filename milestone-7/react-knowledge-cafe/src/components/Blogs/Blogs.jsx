import { useState } from "react";
import "./Blogs.css";
import { useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({addBookmarksHandler}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res=>res.json())
        // .then(data=>console.log(data))
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {/* <h3>Blogs</h3> */}
            {/* <h2>{blogs.length}</h2> */}
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    addBookmarksHandler={addBookmarksHandler}>
                </Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    addBookmarksHandler:PropTypes.func
}

export default Blogs;