const { inFood } = require('../../../src/controllers/foodController');
const { irFood } = require('../../../src/controllers/foodController');
const { usFood } = require('../../../src/controllers/foodController');

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

    describe('irFood test', () => {
      it('should add 8% tax to each item in the result array', () => {
        // Input data (example array with prices)

        const input = [
          [401, "Spaghetti", "Pasta", 3, 1, 49.99, 4.5, "https://shorturl.at/dwW56"],
          [402, "Lays", "Chips", 6, 1, 29.99, 3.8, "https://shorturl.at/oxBKZ"],
          [403, "Jam", "Spreads", 6, 1, 79.99, 4.7, "https://shorturl.at/atwMQ"],
          [404, "Frozen meat", "Meat", 1, 0, 14.99, 3.7, "https://shorturl.at/jnsMN"],
          [405, "Apple", "Fruits", 1, 1, 9.99, 4.2, "https://shorturl.at/anty6"],
          [406, "Dates", "Fruits", 3, 1, 19.99, 4.6, "https://shorturl.at/oBPR1"],
        ];
    
        // Expected output data after applying inFood function
        const expectedOutput = [
          [401, "Spaghetti", "Pasta", 3, 1, 61.49, 4.5, "https://shorturl.at/dwW56"],
        [402, "Lays", "Chips", 6, 1, 36.89, 3.8, "https://shorturl.at/oxBKZ"],
        [403, "Jam", "Spreads", 6, 1, 98.39, 4.7, "https://shorturl.at/atwMQ"],
        [404, "Frozen meat", "Meat", 1, 0, 18.44, 3.7, "https://shorturl.at/jnsMN"],
        [405, "Apple", "Fruits", 1, 1, 12.29, 4.2, "https://shorturl.at/anty6"],
        [406, "Dates", "Fruits", 3, 1, 24.59, 4.6, "https://shorturl.at/oBPR1"],

        ];
          
        const result = irFood(input);
  
          // Check if the result matches the expected output
          expect(result).toEqual(expectedOutput);
        });
      });

      describe('usFood test', () => {
        it('should add 8% tax to each item in the result array', () => {
          // Input data (example array with prices)
  
          const input = [
            [401, "Spaghetti", "Pasta", 3, 1, 49.99, 4.5, "https://shorturl.at/dwW56"],
          [402, "Lays", "Chips", 6, 1, 29.99, 3.8, "https://shorturl.at/oxBKZ"],
          [403, "Jam", "Spreads", 6, 1, 79.99, 4.7, "https://shorturl.at/atwMQ"],
          [404, "Frozen meat", "Meat", 1, 0, 14.99, 3.7, "https://shorturl.at/jnsMN"],
          [405, "Apple", "Fruits", 1, 1, 9.99, 4.2, "https://shorturl.at/anty6"],
          [406, "Dates", "Fruits", 3, 1, 19.99, 4.6, "https://shorturl.at/oBPR1"],
        
          ];
      
          // Expected output data after applying inFood function
          const expectedOutput = [
            [401, "Spaghetti", "Pasta", 3, 1, 58.99, 4.5, "https://shorturl.at/dwW56"],
          [402, "Lays", "Chips", 6, 1, 35.39, 3.8, "https://shorturl.at/oxBKZ"],
          [403, "Jam", "Spreads", 6, 1, 94.39, 4.7, "https://shorturl.at/atwMQ"],
          [404, "Frozen meat", "Meat", 1, 0, 17.69, 3.7, "https://shorturl.at/jnsMN"],
          [405, "Apple", "Fruits", 1, 1, 11.79, 4.2, "https://shorturl.at/anty6"],
          [406, "Dates", "Fruits", 3, 1, 23.59, 4.6, "https://shorturl.at/oBPR1"],
    
          ];
            
          const result = usFood(input);
    
            // Check if the result matches the expected output
            expect(result).toEqual(expectedOutput);
          });
        });
  