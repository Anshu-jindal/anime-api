const Review = require("../model/reviewSchema");

exports.getAnime = (req,res,next,id)=>{
    req.anime = id;
    next();
}

exports.getReview = async (req,res)=>{
    const anime = req.anime;
    try
    {
       reviews= await Review.find({anime : anime});
        if(!reviews )
        {
            return res.status(400).json({
                error : "reviews not found"
            });
        }
        return res.send(reviews);
        
       
        
    
    
   }
   catch(e)
   {
       return res.status(400).json(
           {
               error:"something bad happened while searching reviews"
           }
       );
   }  

}

exports.postReview = (req,res)=>{
    let review = new Review(req.body);
    review.save((err,review)=>{
        if(err || !review){
            return res.status(400).json({
                error : "saving review failed"
            });

        }
        else{
            return res.status(200).json({
                msg : " successfully saved review"
            });

        }
    });

}