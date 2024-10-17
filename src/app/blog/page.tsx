import {Metadata} from "next";

export const metadata: Metadata = {
  title: {
    // absolute: "Blog",
    default: "Blog",
  }
};

const Blog = () => {
  return <h1>Blog</h1>;
};

export default Blog;
