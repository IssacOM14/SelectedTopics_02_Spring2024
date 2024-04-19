import React from "react";
import { Article } from "../../components";
import { product_img_cat, better_ag, botella_an, botella_bo, botella_cu} from "./imports";
import "./blog.css";
import SearchIcon from '@mui/icons-material/Search';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Get to know our catalog
        </h1>
        
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imageUrl={product_img_cat}
            date="$15.0 MXN ea."
            title="20Lt water carafe"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imageUrl={botella_an}
            date="$7.50 MXN ea."
            title="Ring Bottles"
          />
          <Article
            imageUrl={botella_bo}
            date="$11.0 MXN ea."
            title="Boston Bottles"
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
