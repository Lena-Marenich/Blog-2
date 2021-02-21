const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose
  .connect('mongodb+srv://caramba_108:RtqnrViILSINBrEZ@cluster0.sigls.mongodb.net/blog_db?retryWrites=true&w=majority',  {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to database.')
  })
  .catch(() => {
    console.log('Connection failed.')
  })

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false } ));


app.post('/api/posts', (req, res) => {

  let post = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  post.save();

  res.status(201).json({
    message: "Post with id " + post._id + " added successfully.",
  });

});

app.use('/api/posts', (req, res ) => {

    res.status(200).json({
        message: 'Posts fetched successfully.',
        posts: posts,
    })

});

module.exports = app;
