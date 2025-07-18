const express = require('express');
const router = express.Router();
const postContoller = require('../controllers/post.controller')

router.get('/', postContoller.getAllPost); // endpoint = http://localhost:3000/post/

router.get('/:id', postContoller.getPostById); // endpoint = http://localhost:3000/post/:id = http://localhost:3000/post/1

router.post('/', postContoller.createPost); 

router.put('/:id', postContoller.updatePost);

router.delete('/:id', postContoller.deletePost);

module.exports = router;