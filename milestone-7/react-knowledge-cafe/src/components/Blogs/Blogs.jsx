import { useState } from "react";
import "./Blog.css";
import { useEffect } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res=>res.json())
        // .then(data=>console.log(data))
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h3>Blogs</h3>
        </div>
    );
};

export default Blogs;