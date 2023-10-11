const response = require("../configs/response");
const { getToyDetails } = require("../models/productModel")


const getToys = async(req,res)=>{
    try{
        const result= await getToyDetails();
        console.log(result);

        if (result.length) {
            return response(res, 'List of Food', 200, true, result);
        } else {
            return response(res, 'There is no Items on list', 400, false)
        }
    } catch (err) {
        return response(res, 'Internal Server Error', 500, false, { error: err.message })
    }

    
}

exports.getToys=getToys