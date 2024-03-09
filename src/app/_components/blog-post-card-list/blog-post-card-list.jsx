import React from "react";
import BlogPostCard from "../blog-post-card/blog-post-card";

const BlogPostCardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 ">
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
    </div>
  );
};

export default BlogPostCardList;
