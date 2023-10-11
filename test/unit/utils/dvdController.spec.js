// const { inDvd} = require('../../../src/controllers/dvdController');
// const { irDvd} = require('../../../src/controllers/dvdController');
// const { usDvd} = require('../../../src/controllers/dvdController');

// describe('usDvd test', () => {
//   it('should add 8% tax to each item in the result array', () => {
//     const input =
//       [
//         [301, 'The Matrix', 'Science Fiction', 4.7, 12.99, 4.6, "https://shorturl.at/aqst4"],
//         [302, 'Jurassic Park', 'Action/ Adventure', 5.1, 9.99, 4.4, "https://shorturl.at/bpyAY"]
//       ];
//     const expectedOutput = [
//       [301, 'The Matrix', 'Science Fiction', 4.7, 14.03, 4.6, "https://shorturl.at/aqst4"],
//       [302, 'Jurassic Park', 'Action/ Adventure', 5.1, 10.79, 4.4, "https://shorturl.at/bpyAY"]
//     ];
//     const result = usDvd(input);
//     expect(result).toEqual(expectedOutput);
//   });

//   it('should handle invalid input gracefully', () => {
//     const invalidData = null;
//     const result = usDvd(invalidData);
//     expect(result).toEqual({});
//   });
// });

// describe('irDvd test', () => {
//   it('should add 23% tax to each item in the result array', () => {
//     const input = [
//       [301, 'The Matrix', 'Science Fiction', 4.7, 12.99, 4.6, "https://shorturl.at/aqst4"],
//       [302, 'Jurassic Park', 'Action/ Adventure', 5.1, 9.99, 4.4, "https://shorturl.at/bpyAY"],
//       [303, 'The Shawshank Redemption', 'Drama', 4.2,11.99,4.9,"https://shorturl.at/fiyN7"],
//       [304, 'Planet Earth', 'Educational', 7.5, 19.99, 4.8, "https://shorturl.at/gwAGJ"],
//       [305, 'Mathematics Essential', 'Educational', 3.5, 15.99, 4.9, "https://shorturl.at/isWY9"],
//       [306, 'Discovering the Universe', 'Educational', 4.0, 18.99, 4.7, "https://shorturl.at/blAB7"],
//     ];
//     const expectedOutput = [
//       [301, 'The Matrix', 'Science Fiction', 4.7, 15.98, 4.6, "https://shorturl.at/aqst4"],
//       [302, 'Jurassic Park', 'Action/ Adventure', 5.1, 12.99, 4.4, "https://shorturl.at/bpyAY"],
//       [303, 'The Shawshank Redemption', 'Drama', 4.2,14.75,4.9,"https://shorturl.at/fiyN7"],
//       [304, 'Planet Earth', 'Educational', 7.5, 19.99, 24.59, "https://shorturl.at/gwAGJ"],
//       [305, 'Mathematics Essential', 'Educational', 3.5, 19.67, 4.9, "https://shorturl.at/isWY9"],
//       [306, 'Discovering the Universe', 'Educational', 4.0, 23.36, 4.7, "https://shorturl.at/blAB7"],

//     ];
//     const result = irDvd(input);
//     expect(result).toEqual(expectedOutput);
//   });

// //   it('should handle invalid input gracefully', () => {
// //     const invalidData = null;
// //     const result = irDvd(invalidData);
// //     expect(result).toEqual({});
// //   });
// });

// // describe('inFood test', () => {
// //   it('should add 18% tax to each item in the result array', () => {
// //     const input = [
// //       [401, "Spaghetti", "Pasta", 3, 1, 49.99, 4.5, "https://shorturl.at/dwW56"],
// //       [402, "Lays", "Chips", 6, 1, 29.99, 3.8, "https://shorturl.at/oxBKZ"],
// //       [403, "Jam", "Spreads", 6, 1, 79.99, 4.7, "https://shorturl.at/atwMQ"],
// //       [404, "Frozen meat", "Meat", 1, 0, 14.99, 3.7, "https://shorturl.at/jnsMN"],
// //       [405, "Apple", "Fruits", 1, 1, 9.99, 4.2, "https://shorturl.at/anty6"],
// //       [406, "Dates", "Fruits", 3, 1, 19.99, 4.6, "https://shorturl.at/oBPR1"],

// //     ];
// //     const expectedOutput = [
// //       [401, "Spaghetti", "Pasta", 3, 1, 58.99, 4.5, "https://shorturl.at/dwW56"],
// //       [402, "Lays", "Chips", 6, 1, 35.39, 3.8, "https://shorturl.at/oxBKZ"],
// //       [403, "Jam", "Spreads", 6, 1, 94.39, 4.7, "https://shorturl.at/atwMQ"],
// //       [404, "Frozen meat", "Meat", 1, 0, 17.69, 3.7, "https://shorturl.at/jnsMN"],
// //       [405, "Apple", "Fruits", 1, 1, 11.79, 4.2, "https://shorturl.at/anty6"],
// //       [406, "Dates", "Fruits", 3, 1, 23.59, 4.6, "https://shorturl.at/oBPR1"],

// //     ];
// //     const result = inFood(input);
// //     expect(result).toEqual(expectedOutput);
// //   });

// //   it('should handle invalid input gracefully', () => {
// //     const invalidData = null;
// //     const result = usFood(invalidData);
// //     expect(result).toEqual({});
// //   });
// // });