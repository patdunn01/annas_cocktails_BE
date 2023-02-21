const Blog = require("./models/blogSchema");

const getPosts = async (req, res) => {
    const events = await Blog.find({});
    res.status(200).json(events);
  };


module.exports = getPosts;