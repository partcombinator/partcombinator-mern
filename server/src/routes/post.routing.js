const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Read all Post
// Get
// api/post
router.get('/',
    // auth,
    postController.getpost
);


// Create Post
// post
// api/post
router.post('/',
    // auth,
    [
        check('title', 'The title is required').not().isEmpty(),
        check('text', 'The text is required').not().isEmpty(),
    ],
    postController.create
);


// Delete Post
// delete
// api/post
router.delete('/:id',
    // auth,
    postController.delete
);

// Edit Post
// put
// api/post
router.put('/:id',
    // auth,
    postController.edit
);


module.exports = router;