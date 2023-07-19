const { blogPostServices } = require('../services');

const checkIfUserHasAuthorization = async (req, res, next) => {
  const { id } = req.params;
  const { payload } = req;
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const postToUpdate = await blogPostServices.getPostById(id);

  if (postToUpdate.userId !== payload.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  return next();
};

module.exports = checkIfUserHasAuthorization;