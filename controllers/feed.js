exports.getPosts = function (req, res, next) {
  res.status(200).json({
    posts: [{ title: 'First post', content: 'This is the first post'}]
  })
}

exports.createPosts = function (req, res, next) {
  const title = req.body.title;
  const content = req.body.content;

  // Create db post
  res.status(201).json({
    message: 'Post created successfully!',
    post: {
      id: new Date().toISOString().replaceAll(':', ''),
      title,
      content,
    }
  })
}