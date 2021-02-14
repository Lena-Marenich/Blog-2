const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

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

