const model = require('../configs/model')

module.exports = {
    getFoodDetails : () => {
        const query = 'SELECT f.foodid,f.foodname,f.category,f.shelflife,f.vegnonveg,p.price,p.rating,p.imageurl from FZFOOD f JOIN FZPRODUCT p ON f.foodid = p.productid';
        return model(query);
    },

    getDvdDetails: () => {
        const query = 'SELECT d.dvdid,d.dvdname,d.category,d.storage,p.price,p.rating,p.imageurl from FZDVD d JOIN FZPRODUCT p ON d.dvdid = p.productid';
        return model(query);
    }
}