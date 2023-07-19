const { blogPostServices } = require('../services');

const checkIfUserHasAuthorization = async (req, res, next) => {
  const { id } = req.params;
  const { payload } = req;

  const postToUpdate = await blogPostServices.getPostById(id);
  if (postToUpdate === null) return res.status(404).json({ message: 'Post does not exist' });
  if (postToUpdate.userId !== payload.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  return next();
};

module.exports = checkIfUserHasAuthorization;