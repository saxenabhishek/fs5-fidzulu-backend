const model = require('../configs/model')

module.exports = {

    getDvdDetails: () => {
        const query = 'SELECT d.dvdid,d.dvdname,d.category,d.storage,p.price,p.rating,p.imageurl from FZDVD d JOIN FZPRODUCT p ON d.dvdid = p.productid';
        return model(query);
    }
}