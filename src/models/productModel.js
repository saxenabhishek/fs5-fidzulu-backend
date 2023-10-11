const model = require('../configs/model')

module.exports = {
    getLaptopDetails : () => {
        const query = 'SELECT l.laptopid, l.brandname, l.modelname, l.cpu, l.ram, l.gpu, l.vram, l.storage, l.screensize, l.colour, p.price, p.rating, p.imageurl FROM FZLAPTOP l JOIN FZPRODUCT p ON l.laptopid = p.productid';
        return model(query);
    }
}