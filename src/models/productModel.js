const model = require('../configs/model')

module.exports = {
    getFoodDetails : () => {
        const query = 'SELECT f.foodid,f.foodname,f.category,f.shelflife,f.vegnonveg,p.price,p.rating,p.imageurl from FZFOOD f JOIN FZPRODUCT p ON f.foodid = p.productid';
        return model(query);
    },

    getBikeDetails : () => {
        const query = 'SELECT b.bikeid, b.manufacturer, b.modelname, b.enginecc, b.colour FROM fzbike b JOIN fzproduct p ON b.bikeid = p.productid';
        return model(query);
    }
}