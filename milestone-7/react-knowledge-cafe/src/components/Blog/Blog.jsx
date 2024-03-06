import PropTypes from 'prop-types';
import { BsBookmarkPlus } from "react-icons/bs";

const Blog = ({ blog, addBookmarksHandler }) => {
    // console.log(blog);
    const {title, author_image, author_name, cover, hashtags, posted_date, reading_time} = blog;
    // const {title} = props.blog;
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt='cover image'></img>
            
            <div className='md:flex justify-between mt-2'>
                <div className='flex'>
                    <img className='w-16' src={author_image} alt=''></img>
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <spn>{reading_time} min read</spn>
                    <button 
                        onClick={()=> addBookmarksHandler(blog)}
                        className="ml-2 text-red-600 text-2xl"
                    ><BsBookmarkPlus></BsBookmarkPlus></button>
                </div>
            </div>
            <h2 className="text-3xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

// is new for me
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    addBookmarksHandler: PropTypes.func,
}

export default Blog;