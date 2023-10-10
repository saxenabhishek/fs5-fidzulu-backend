const { getBikeDetails } = require('../models/productModel');
const response = require('../configs/response');

 const getBikes =  async (req, res) => {
        try {
            const result = await getBikeDetails();
            console.log(result);
           
            if (result.length) {
                return response(res, 'List of Bikes', 200, true, result);
            } else {
                return response(res, 'There are no bikes in the list', 400, false)
            }
        } catch (err) {
            return response(res, 'Internal Server Error', 500, false, { error: err.message })
        }

    }

exports.getBikes = getBikes