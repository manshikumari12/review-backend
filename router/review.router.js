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



  reviewRouter.delete('/reviews/:id', async (req, res) => {
    try {
      const deletedReview = await ReviewModel.findByIdAndDelete(req.params.id);
  
      if (!deletedReview) {
        return res.status(404).json({ error: 'Review not found' });
      }
  
      res.status(200).json({ message: 'Review deleted successfully', deletedReview });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports={reviewRouter}