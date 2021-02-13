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

        //Get all memes sorted from newest to oldest, and limit to 100
        //This will limit the retrieval time
        let posts = await Post.find().sort({_id:-1}).limit(100);

        let resObj = [];

        //Formatting the post object to suite the response needs
        for(let i=0; i<posts.length; i++){

            const idVal = posts[i]['_id'];
            const nameVal = posts[i]['name'];
            const urlVal = posts[i]['url'];
            const captionVal = posts[i]['caption'];

            resObj.push({


                "id": idVal,
                "name": nameVal,
                "url": urlVal,
                "caption": captionVal,

            });


        }

        //Return response
        res.json(resObj);

    }catch(err){

        console.error(err.message);
        res.status(500).send('Server Error');

    }


});


//GET Specific meme route
app.get("/:id", async (req, res) => {

    try{

        //Getting the Meme by id
        let post = await Post.findById(req.params.id);

        //If the meme does not exist
        if(!post){

            return res.status(404).json({
                msg: "Meme not Found",
            });

        }

        //Adjusting the response object to suite API needs
        let resObj;
        const idVal = post['_id'];
        const nameVal = post['name'];
        const urlVal = post['url'];
        const captionVal = post['caption'];

        resObj = {

            "id": idVal,
            "name": nameVal,
            "url": urlVal,
            "caption": captionVal,

        }

        res.json(resObj);

    }catch(err){

        console.error(err.message);

        //This means that the id format is corrupt
        if(err.kind === 'ObjectId'){

            return res.status(404).json({
                msg: "Meme not Found",
            });

        }

        //Else some other server error
        res.status(500).send('Server Error');

    }


});

module.exports = app;