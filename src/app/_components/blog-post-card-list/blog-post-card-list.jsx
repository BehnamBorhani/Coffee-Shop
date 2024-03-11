import React from "react";
import BlogPostCard from "../blog-post-card/blog-post-card";

const BlogPostCardList = () => {
  return (
    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 ">
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
    </div>
  );
};

export default BlogPostCardList;
