const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

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

