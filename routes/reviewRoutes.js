const express = require('express');
const { createReview, updateReview } = require('../controllers/reviewController');

const reviewRouter = express.Router();

//POST/api/v1/reviews
reviewRouter.post('/', createReview);

//PUT/api/v1/reviews/:id
reviewRouter.put('/:id', updateReview);

//DELETE/api/v1/:id
reviewRouter.delete('/:id')

module.exports = reviewRouter;