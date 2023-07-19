const { blogPostServices } = require('../services');

const getAllPosts = async (req, res) => {
  const getAllPostsDb = await blogPostServices.getAllPosts();

  return res.status(200).json(getAllPostsDb);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const getPostByIdDb = await blogPostServices.getPostById(id);
  if (getPostByIdDb === null) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(getPostByIdDb);
};

const putPostById = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  await blogPostServices.putPostById(id, { title, content });
  const getPostUpdated = await blogPostServices.getPostById(id);
  return res.status(200).json(getPostUpdated);
};

const deletePostById = async (req, res) => {
  const { id } = req.params;
  await blogPostServices.deletePostById(id);
  
  return res.sendStatus(204);
};

const createBlogPost = async (req, res) => {
  const { payload } = req;
  const userId = payload.id;
  const createdBlogPost = await blogPostServices.createBlogPost(req.body, userId);

  return res.status(201).json(createdBlogPost);
};

module.exports = {
  createBlogPost,
  getAllPosts,
  getPostById,
  putPostById,
  deletePostById,
};
