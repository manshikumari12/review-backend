const express=require("express")
const {ReviewModel}=require("../model/review.model")
reviewRouter=express.Router()

// postrouter

reviewRouter.post('/create', async (req, res) => {
    try {
      const { username, rating, comment } = req.body;
      const newReview = new ReviewModel({ username, rating, comment });
      await newReview.save();
      res.status(201).send(newReview);
    } catch (error) {
      res.status(500).send({ error: 'Internal Server Error' });
    }
  });
  





//get-router
reviewRouter.get('/retrieve', async (req, res) => {
    try {
      const reviews = await ReviewModel.find();
      res.status(200).send(reviews);
    } catch (error) {
      res.status(500).send({ error: 'Internal Server Error' });
    }
  });



module.exports={reviewRouter}