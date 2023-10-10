const model = require('../configs/model')

module.exports = {
    getFoodDetails : () => {
        const query = 'SELECT f.foodid,f.foodname,f.category,f.shelflife,f.vegnonveg,p.price,p.rating,p.imageurl from FZFOOD f JOIN FZPRODUCT p ON f.foodid = p.productid';
        return model(query);
    },

    getLaptopDetails : () => {
        const query = 'SELECT l.laptopid, l.brandname, l.modelname, l.cpu, l.ram, l.gpu, l.vram, l.storage, l.screensize, l.colour, p.price, p.rating, p.imageurl FROM FZLAPTOP l JOIN FZPRODUCT p ON l.laptopid = p.productid';
        return model(query);
    }
}