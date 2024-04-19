import React from "react";
import "./article.css";
import Button from '@mui/material/Button';

const Article = ({ imageUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imageUrl} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <h3>{title}</h3>
        <p>{date}</p>
        <Button disableRipple variant="contained" color="primary" style={{fontSize:'20px', position:'static', marginTop:'-50px'}}>
          Add to shopping cart
        </Button>
      </div>
    </div>
  );
};

export default Article;
