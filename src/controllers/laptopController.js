const { getLaptopDetails } = require('../models/productModel');
const response = require('../configs/response');

 const getLaptop =  async (req, res) => {
        try {
            const location = req.params.location;
            let result = await getLaptopDetails(); 

            const locationMap = new Map();
            locationMap.set("US-NC", 0.08);
            locationMap.set("IE", 0.23);
            locationMap.set("IN", 0.18);

            if (result.length) {
                for (let res of result) 
                    res[10] = Number((res[10] * (1+locationMap.get(location))).toFixed(2));
                
                return response(res, 'List of Laptops', 200, true, result);
            } 
            else 
                return response(res, 'There are no items on this list', 400, false);            
        } 
        catch (err) {
            return response(res, 'Internal Server Error', 500, false, { error: err.message })
        }

    }

exports.getLaptop = getLaptop;