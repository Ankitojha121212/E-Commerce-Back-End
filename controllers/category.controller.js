const mongoose = require('mongoose');
const category_model = require('../models/category.model');

exports.createNewCategory = async (req,res) => {

    // Read the req body
    const request_body = req.body;
    // create the category object
    const cate = {
        name : request_body.name,
        description : request_body.discription
    }


    // insert into mongoDB
try{
  const categorycre = await category_model.create(cate);

  return res.status(201).send(categorycre)

}catch(err){
    console.log("Error while category model insertion in MONGODB : ",err)
   return res.status(500).send({
        message : "Error while creating the category"
    })
}

// return the response of the created category


}