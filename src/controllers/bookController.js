const { getFoodDetails } = require('../models/productModel')
const response = require('../configs/response')
module.exports = {
    getFood: async (req, res) => {
        try {
            const result = await getFoodDetails();

            const dataResult = result.map(element => ({
                id: element.BookId,
                name: element.BookName,
                author: element.Author,
                genre: element.Genre,
                publisher: element.Publisher,
                isbn: element.ISBN,
                price: element.Price,
                rating: element.Rating,
                imgUrl: element.ImageURL
            }))

            if (result.length) {
                return response(res, 'List of Books', 200, true, dataResult);
            } else {
                return response(res, 'There is no Items on list', 400, false)
            }
        } catch (err) {
            return response(res, 'Internal Server Error', 500, false, { error: err.message })
        }

    }
}
