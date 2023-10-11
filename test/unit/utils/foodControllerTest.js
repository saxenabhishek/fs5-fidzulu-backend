const { inFood } = require('../../../src/controllers/foodController');

describe('inFood test', () => {
    it('should add 8% tax to each item in the result array', () => {
      // Input data (example array with prices)
      const input = 
        [
        [401, "Spaghetti", "Pasta", 3, 1, 49.99, 4.5, "https://shorturl.at/dwW56"],
        [402, "Lays", "Chips", 6, 1, 29.99, 3.8, "https://shorturl.at/oxBKZ"]
        ];
  
      // Expected output data after applying inFood function
      const expectedOutput = [
        [401, "Spaghetti", "Pasta", 3, 1, 53.99, 4.5, "https://shorturl.at/dwW56"],
        [402, "Lays", "Chips", 6, 1, 32.39, 3.8, "https://shorturl.at/oxBKZ"]
      ];
        
      const result = inFood(input);

        // Check if the result matches the expected output
        expect(result).toEqual(expectedOutput);
      });
    });
  