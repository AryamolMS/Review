//import schema
const reviews = require('../model/reviewSchema')


exports.details = async(req,res) => {

    const data = new reviews({
        username: req.body.username,
        rating: req.body.rating,
        review:req.body.review
        })
    
        try {
            const reviewDetails = await data.save();
            res.status(200).json(data)
        }
        catch (error) {
            res.status(400).json("Data is not added ")
        }

    }