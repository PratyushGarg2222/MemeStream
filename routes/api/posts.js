const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

const app = express();
app.use(bodyParser.json());

const Post = require('../../models/posts');


//POST MEME ROUTE
app.post('/',
    
    //Implementing Validation

    //Name must not be empty
    check('name')
         .isLength({min: 1})
         .withMessage('Name required to post Meme'),
    //Caption should not be empty
     check('caption')
         .isLength({min: 1})
         .withMessage('Caption required to post Meme'),
    //Image validation: not empty and ending in image formats
     check('url')
         .custom(value => {

            if(!value)
                return Promise.reject("URL Invalid");

            return(value.match(/\.(jpeg|jpg|gif|png)$/) != null);

        }), 

        //Handling Request
   async (req,res) => {
        
        //Errors of the check statements
        const errors = validationResult(req);
        if(!errors.isEmpty()){

            return res.status(400).json({errors: errors.array()});

        }

        try{
            //New Post Object
            const newPost = new Post({

                name: req.body.name,
                caption: req.body.caption,
                url: req.body.url,

            });
            
            //Saving post to DB
            const post = await newPost.save();

            //Retreiving and returning only the id from the saved post
            const idVal = post['_id'];
            const returnObj  = {

                "id" : idVal,

            }

            //Return JSON Object
            res.json(returnObj);

        }catch(err){
            console.error(err.message);
            res.status(500).send('Server Error');

        }

    }  
    
);


//GET 100 latest Memes Route
app.get("/", async (req, res) => {

    try{

        let posts = await Post.find();
        posts = posts.reverse();
        posts.slice(0, 100);
        res.json(posts);

    }catch(err){

        console.error(err.message);
        res.status(500).send('Server Error');

    }


});

module.exports = app;