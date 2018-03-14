import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loanBalance: '',
      loanRate: '',
      loanTerm: '',
      paymentOutput: ''
    }

    this.handleLoanBalance = this.handleLoanBalance.bind(this);
    this.handleLoanRate = this.handleLoanRate.bind(this);
    this.handleLoanTerm = this.handleLoanTerm.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleLoanBalance(event) {
    this.setState({ loanBalance: event.target.value });
  }

  handleLoanRate(event) {
    this.setState({ loanRate: event.target.value });
  }

  handleLoanTerm(event) {
    this.setState({ loanTerm: event.target.value });
  }

  handleCalculate() {
    const increaseRate = Math.pow((1 + this.state.loanRate / 12 / 100), this.state.loanTerm * 12);
    const monthlyPayment = (this.state.loanBalance * (this.state.loanRate / 12 / 100) * increaseRate) / (increaseRate - 1);
    this.setState({
      paymentOutput: monthlyPayment.toFixed(2)
    })
  }  
  
  render() {
    return (
      <div className='container'>
        <h1>Mortgage Calculator</h1>
        <hr />
        <div className="row-lg">
          <label>Loan Balance ($) </label>
          <input name="principal"
            type="number"
            placeholder="Enter balance ($)"
            value={this.state.loanBalance}
            onChange={this.handleLoanBalance}
          />
        </div>
        <hr />
        <div className="row-lg">
          <label>Interest Rate (%) </label>
          <input name="interestRate"
            type="number"
            step="0.01"
            placeholder="(0-100.00)%"
            value={this.state.loanRate}
            onChange={this.handleLoanRate}
          />
        </div>
        <hr />
        <select name='period'>
          <option value='12'>Monthly</option>
          <option value='4'>Quarterly</option>
        </select>
        <hr />
        <div className="row-lg">
          <label>Loan Term (Years) </label>
          <input name="loanTerm"
            value={this.state.loanTerm}
            onChange={this.handleLoanTerm}>
          </input>
        </div>
        <hr />
        <div className="form-group">
          <button name="submit"
            id="calculate"
            className="btn btn-default"
            onClick={this.handleCalculate}>
            Calculate</button>
        </div>

        <br /><br />
        <p id="output" name="output">
          ${this.state.paymentOutput}
        </p>
      </div>
    );
  }
}