const { getBikeDetails } = require('../models/productModel');
const response = require('../configs/response');

 const usBikes = (result) => {
    for (let res of result) {
        const precision = 2;
        let price = res[5];
        res[5] = Number((price + price * 0.18).toFixed(2));
    }
    return result;
 }

 const irBikes = (result) => {
    for (let res of result) {
        let price = res[5];
        res[5] = Number((price + price * 0.23).toFixed(2));
    }
    return result;
 }

 const inBikes = (result) => {
    for(let res of result) {
        let price = res[5];
        res[5] = Number((price + price * 0.08).toFixed(2));
    }
    return result;
 }

 const getBikes =  async (req, res) => {
        try {
            let result = await getBikeDetails();
            switch(req.params.location){
                case"US-NC" : result = usBikes(result)
                    break;
                case "IE" : result = irBikes(result)
                    break;
                case "IN" : result = inBikes(result)
                    break;
            }

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