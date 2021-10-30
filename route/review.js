const express = require("express");

const router = express.Router();

const {postReview , getAnime , getReview}  = require("../controller/review");

router.param("anime" , getAnime);

router.get(
    "/review/:anime",
    
    getReview
  );
  router.post("/review",postReview);

  module.exports = router;