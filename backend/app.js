const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
mongoose
  .connect('mongodb+srv://caramba_108:RtqnrViILSINBrEZ@cluster0.sigls.mongodb.net/<dbname>?retryWrites=true&w=majority',  {useNewUrlParser: true, useUnifiedTopology: true})
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

  let post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully",
  });

});

app.use('/api/posts', (req, res ) => {

    let posts = [
        {
            id: 'kjsd83320',
            title: 'Post from server 1',
            content: 'Content content content content content content content content content ',
        },
        {
            id: 'ddsg32323',
            title: 'Post from server 2',
            content: 'Content content content content content content content content content ',
        },
    ];


    res.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts,
    })

});

module.exports = app;

