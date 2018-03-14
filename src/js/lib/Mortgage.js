module.exports = class Mortgage {
    constructor(principal, interest, term, period) {
      this.principal = principal;
      this.interest = interest;
      this.term = term;
      this.period = period;
    }
  
    trueInterest() {
        return trueInterest = this.interest / 12 / 100;
    }

    increaseRate() {
        return Math.pow((1 + this.interest / 12 / 100), this.term * 12);
    }

    get monthlyPayment() {
        const increaseRate = Math.pow((1 + this.interest / 12 / 100), this.term * 12);
        return (this.principal * (this.interest / 12 / 100) * increaseRate) / (increaseRate - 1);
    }
  }