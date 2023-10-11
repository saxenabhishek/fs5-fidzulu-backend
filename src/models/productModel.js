const model = require('../configs/model')

module.exports = {
    getBikeDetails : () => {
        const query = 'SELECT b.bikeid, b.manufacturer, b.modelname, b.enginecc, b.colour, p.price FROM fzbike b JOIN fzproduct p ON b.bikeid = p.productid';
        return model(query);
    }
}