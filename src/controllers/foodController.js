const { getFoodDetails } = require('../models/productModel')
const response = require('../configs/response')
module.exports = {
    getFood: async (req, res) => {
        try {
            const result = await getFoodDetails();

            const dataResult = result.map(element => ({
                id: element.FoodId,
                name: element.FoodName,
                category: element.Category,
                shelfLife: element.ShelfLife,
                dietaryPref: element.VegNonVeg
            }))

            if (result.length) {
                return response(res, 'List of Food', 200, true, dataResult);
            } else {
                return response(res, 'There is no Items on list', 400, false)
            }
        } catch (err) {
            return response(res, 'Internal Server Error', 500, false, { error: err.message })
        }

    }
}
