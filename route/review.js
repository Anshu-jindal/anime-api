const express = require("express");

const router = express.Router();

const {postReview , getId , getReview}  = require("../controller/review");

router.param("id" , getId);

router.get(
    "/review/:id",
    
    getReview
  );
  router.post("/review",postReview);

  module.exports = router;