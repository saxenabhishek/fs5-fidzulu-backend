const model = require('../configs/model')

module.exports = {

    getToyDetails: () => {
        const query = 'SELECT FZToys.ToyId, FZToys.ToyName, FZToys.BrandName, FZToys.Category,FZToys.AppropriateAge,FZProduct.Price, FZProduct.Rating,FZProduct.ImageURL FROM FZToys JOIN FZProduct ON FZToys.ToyId = FZProduct.ProductId';
        return model(query);
    }

}