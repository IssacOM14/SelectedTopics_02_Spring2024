import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Get to know our catalog:
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imageUrl={blog01}
            date="Sep 26, 2021"
            title="20Lt water carafe"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imageUrl={blog02}
            date="Sep 26, 2021"
            title="5Lt water carafe"
            
          />
          <Article
            imageUrl={blog03}
            date="Sep 26, 2021"
            title="Boston Bottles"
          />
          <Article
            imageUrl={blog04}
            date="Sep 26, 2021"
            title="Ring Bottles"
          />
          <Article
            imageUrl={blog05}
            date="Sep 26, 2021"
            title="Personalized label bottles"
          />
        </div>
      </div>
      <div className="gpt3__blog-btn">
        <button type="button">See more</button>
      </div>
      
    </div>
  );
};

export default Blog;
