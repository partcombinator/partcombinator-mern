const Post = require('../models/Post');


exports.getpost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            posts
        });
    } catch (error) {
        console.log(error);
        res.status(400).send('Error at read posts');
    }
}

exports.create = async (req, res) => {
    try {
        post = new Post(req.body);
        postSave = await post.save();
        res.status(200).json({
            postSave
        });

    } catch (error) {
        console.log(error);
        res.status(400).send('Error at create post');
    }
}

exports.delete = async (req, res) => {
        const id = req.params.id;
        Post.findByIdAndRemove(id)
            .then(data => {
            if (!data) {
                res.status(404).send({
                message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
                });
            } else {
                res.send({
                message: "Post was deleted successfully!"
                });
            }
            })
            .catch(err => {
            res.status(500).send({
                message: "Could not delete Post with id=" + id
            });
            });
};

exports.edit = async (req, res) => {
    const id = req.params.id;
    Post.findByIdAndUpdate(id, req.body)
        .then(data => {
        if (!data) {
            
            res.status(404).send({
            message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
            });
        } else {
            console.log(data)
            res.send({
            message: "Post was edited successfully!"
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Could not edit Post with id=" + id
        });
        });
};