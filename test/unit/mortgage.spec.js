const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let calculator = null;

    beforeEach(() => {
        calculator = new Mortgage();
      });
    
    it('should have a constructor', () => {
        expect(calculator.constructor).to.exist;
    });

    it('should have a monthly payment function', () => {
        expect(calculator.monthlyPayment).to.exist;
    });
    it('should have trueInterest function', () => {
        expect(calculator.trueInterest).to.exist;
    });
    it('should have a increaseRate function', () => {
        expect(calculator.increaseRate).to.exist;
    });
});