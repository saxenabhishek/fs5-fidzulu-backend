const model = require('../configs/model')

module.exports = {
    getFoodDetails : () => {
        const query = 'SELECT f.foodid,f.foodname,f.category,f.shelflife,f.vegnonveg,p.price,p.rating,p.imageurl from FZFOOD f JOIN FZPRODUCT p ON f.foodid = p.productid';
        return model(query);
    },
    getBookDetails:()=>{
        const query = 'SELECT f.bookid,f.bookname,f.genre,f.author,f.publisher,p.price,p.rating,p.imageurl from FZBOOK f JOIN FZPRODUCT p ON f.bookid = p.productid';
        return model(query);
    }
}