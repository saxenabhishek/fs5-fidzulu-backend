const { getLaptopDetails } = require('../models/productModel');
const response = require('../configs/response');

 const getLaptop =  async (req, res) => {
        try {
            const result = await getLaptopDetails();
            console.log(result);
           
            if (result.length) {
                return response(res, 'List of Laptops', 200, true, result);
            } else {
                return response(res, 'There are no items on this list', 400, false)
            }
        } catch (err) {
            return response(res, 'Internal Server Error', 500, false, { error: err.message })
        }

    }

exports.getLaptop = getLaptop;