import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    console.log(blog);
    return (
        <div>
            
        </div>
    );
};

// is new for me
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;