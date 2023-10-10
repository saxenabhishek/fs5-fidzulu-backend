const model = require('../configs/model')

module.exports = {
    getFoodDetails : () => {
        const query = `
            SELECT
                p.ProductId AS book_id,
                p.BookName AS book_name,
                p.ImageUrl AS book_imageurl,
                p.Rating AS book_rating,
                p.Price AS book_price,
                b.Author AS book_author,
                b.Genre AS book_genre,
                b.Publisher AS book_publisher,
                b.ISBN AS book_isbn
            FROM
                FZProducts p
            JOIN
                FZBook b
            ON
                p.id = b.book_id
        `;
        return model(query);
    },
    getBookDetails: ()=>{
        const query = 'SELECT f.foodid,f.foodname,f.category,f.shelflife,f.vegnonveg,p.price,p.rating,p.imageurl from FZFOOD f JOIN FZPRODUCT p ON f.foodid = p.productid';
        return model(query);
    }
}