import "./blog.css";
import img from "../../images";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  blogSelect,
  getBlogsFetch,
} from "../../redux/slices/blogSlice/blogSlice";
import Blogs from "../showBlogs/showBlogs";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = useSelector(blogSelect);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogsFetch());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <div className="blog">
          <div className="img_blog">
            <img className="blog_img" src={img.img4} alt="" />
            <div className="background"></div>
          </div>
          <div className="blog_info">
            <h3>Converse Club</h3>
            <p>
              Հայտնի է, որ ընթերցողը, կարդալով հասկանալի տեքստ, չի կարողանա
              կենտրոնանալ տեքստի ձևավորման վրա։
            </p>
            <button>Ավելին</button>
          </div>
        </div>
        <div className="blog_card">
          <div className="card_info">
            <p>Բլոգ</p>
            <Link>Տեսնել Ավելին</Link>
          </div>
        </div>
        <div className="blogs_show">
          {blogs.map((blog) => (
            <Blogs key={blog.id} blogs={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
