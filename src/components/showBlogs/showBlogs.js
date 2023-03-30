import "./showBlogs.css";

const Blogs = ({ blogs }) => {
  return (
    <>
      <div className="container">
        <div className="show_blogs">
          <div className="blogs">
            <div className="blog_imgs">
              <img className="imgs_blog" src={blogs.img} alt="" />
              <div className="background_blog"></div>
            </div>
            <p>{blogs.disc}</p>
            <span>{blogs.date}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
