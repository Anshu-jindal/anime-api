const { min } = require("lodash");
const mongoose = require("mongoose");


const reviewSchema = new mongoose.Schema(
  {
    id: {
      required : true,
      type: String,
      trim: true,

  },
  review :{
      type : Array,
      rating :{
          required : true,
          type : Number,
          max : 5 ,
          min : 1
      },
      description :{
          type : String,
          default : ""
      }
  }
},{ timestamps: true }
);

module.exports = mongoose.model("review", reviewSchema);
