/*
This is the log route module.
*/
const express = require('express');
const router = express.Router();
const db = require('../models');
const ibmNLU = require('ibm-watson/natural-language-understanding/v5');
const {body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const natLang = new ibmNLU({ version: '2019-02-01' });
const { Log } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 
/*
These are the routes for the Log resource.
It includes:
    GET /logs/:owner
    POST /logs

 */


//get all the logs for this specific owner
//returns json object of all the logs for the owner
router.get('/logs/:owner', (req,res) => {
  const owner = req.params.owner
  Log.findLogs({ owner })
    .then(logs => res.json(posts));
});


router.post('/logs', (req, res) => {
  //This will create a new log
  //unfinished
  let { content } = req.body;
  
  Log.create({ content })
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      post.content = req.body.content;
      post.save()
        .then(post => {
          res.json(post);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      post.destroy();
      res.sendStatus(204);
    });
});


module.exports = router;