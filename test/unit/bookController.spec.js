const { inBook } = require('../../src/controllers/bookController');
const { irBook } = require('../../src/controllers/bookController');
const { usBook } = require('../../src/controllers/bookController');

describe('usBook test', () => {
  it('should add 8% tax to each item in the result array', () => {
    const input =
      [
        [201, "A Game of Thrones", "Fantasy", "George R.R. Martin", "Bantam", 11.79, 4.5, "https://shorturl.at/jyN45"],
        [202, "To Kill a Mockingbird", "Fiction", "Harper Lee", "Harper Perennial", 15.33, 4.8, "https://shorturl.at/iovDL"],
        [203, "The Da Vinci Code", "Mystery", "Dan Brown", "Vintage", 10.61, 4.2, "https://shorturl.at/blDHX"],
        [204, "Harry Potter and the Order of the Phoenix", "Fantasy", "J.K. Rowling", "Scholastic", 17.69, 4.7, "https://shorturl.at/ivxSX"],
        [205, "The Great Gatsby", "Classic", "F. Scott Fitzgerald", "Penguin", 9.43, 4, "https://shorturl.at/biQX4"]
      ];
    const expectedOutput = [
      [201, "A Game of Thrones", "Fantasy", "George R.R. Martin", "Bantam", 12.73, 4.5, "https://shorturl.at/jyN45"],
      [202, "To Kill a Mockingbird", "Fiction", "Harper Lee", "Harper Perennial", 16.56, 4.8, "https://shorturl.at/iovDL"],
      [203, "The Da Vinci Code", "Mystery", "Dan Brown", "Vintage", 11.46, 4.2, "https://shorturl.at/blDHX"],
      [204, "Harry Potter and the Order of the Phoenix", "Fantasy", "J.K. Rowling", "Scholastic", 19.11, 4.7, "https://shorturl.at/ivxSX"],
      [205, "The Great Gatsby", "Classic", "F. Scott Fitzgerald", "Penguin", 10.18, 4, "https://shorturl.at/biQX4"]
    ];
    const result = usBook(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = null;
    const result = usBook(invalidData);
    expect(result).toEqual({});
  });
});

describe('irBook test', () => {
  it('should add 23% tax to each item in the result array', () => {
    const input =
      [
        [201, "A Game of Thrones", "Fantasy", "George R.R. Martin", "Bantam", 11.79, 4.5, "https://shorturl.at/jyN45"],
        [202, "To Kill a Mockingbird", "Fiction", "Harper Lee", "Harper Perennial", 15.33, 4.8, "https://shorturl.at/iovDL"],
        [203, "The Da Vinci Code", "Mystery", "Dan Brown", "Vintage", 10.61, 4.2, "https://shorturl.at/blDHX"],
        [204, "Harry Potter and the Order of the Phoenix", "Fantasy", "J.K. Rowling", "Scholastic", 17.69, 4.7, "https://shorturl.at/ivxSX"],
        [205, "The Great Gatsby", "Classic", "F. Scott Fitzgerald", "Penguin", 9.43, 4, "https://shorturl.at/biQX4"]
      ];
    const expectedOutput = [
      [201, "A Game of Thrones", "Fantasy", "George R.R. Martin", "Bantam", 14.5, 4.5, "https://shorturl.at/jyN45"],
      [202, "To Kill a Mockingbird", "Fiction", "Harper Lee", "Harper Perennial", 18.86, 4.8, "https://shorturl.at/iovDL"],
      [203, "The Da Vinci Code", "Mystery", "Dan Brown", "Vintage", 13.05, 4.2, "https://shorturl.at/blDHX"],
      [204, "Harry Potter and the Order of the Phoenix", "Fantasy", "J.K. Rowling", "Scholastic", 21.76, 4.7, "https://shorturl.at/ivxSX"],
      [205, "The Great Gatsby", "Classic", "F. Scott Fitzgerald", "Penguin", 11.6, 4, "https://shorturl.at/biQX4"]
    ];
    const result = irBook(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = null;
    const result = irBook(invalidData);
    expect(result).toEqual({});
  });
});

describe('inBook test', () => {
  it('should add 18% tax to each item in the result array', () => {
    const input =
      [
        [201, "A Game of Thrones", "Fantasy", "George R.R. Martin", "Bantam", 11.79, 4.5, "https://shorturl.at/jyN45"],
        [202, "To Kill a Mockingbird", "Fiction", "Harper Lee", "Harper Perennial", 15.33, 4.8, "https://shorturl.at/iovDL"],
        [203, "The Da Vinci Code", "Mystery", "Dan Brown", "Vintage", 10.61, 4.2, "https://shorturl.at/blDHX"],
        [204, "Harry Potter and the Order of the Phoenix", "Fantasy", "J.K. Rowling", "Scholastic", 17.69, 4.7, "https://shorturl.at/ivxSX"],
        [205, "The Great Gatsby", "Classic", "F. Scott Fitzgerald", "Penguin", 9.43, 4, "https://shorturl.at/biQX4"]
      ];
    const expectedOutput = [
      [201, "A Game of Thrones", "Fantasy", "George R.R. Martin", "Bantam", 13.91, 4.5, "https://shorturl.at/jyN45"],
      [202, "To Kill a Mockingbird", "Fiction", "Harper Lee", "Harper Perennial", 18.09, 4.8, "https://shorturl.at/iovDL"],
      [203, "The Da Vinci Code", "Mystery", "Dan Brown", "Vintage", 12.52, 4.2, "https://shorturl.at/blDHX"],
      [204, "Harry Potter and the Order of the Phoenix", "Fantasy", "J.K. Rowling", "Scholastic", 20.87, 4.7, "https://shorturl.at/ivxSX"],
      [205, "The Great Gatsby", "Classic", "F. Scott Fitzgerald", "Penguin", 11.13, 4, "https://shorturl.at/biQX4"]
    ];
    const result = inBook(input);
    expect(result).toEqual(expectedOutput);
  });

  it('should handle invalid input gracefully', () => {
    const invalidData = null;
    const result = inBook(invalidData);
    expect(result).toEqual({});
  });
});