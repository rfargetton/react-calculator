import React, { Component } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import './styles/App.sass';

export default class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      curr : "0",
      prev : "",
      formula : "",
      evaluated: false
    }
    
    this.handleNumbers = this.handleNumbers.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEvaluate = this.handleEvaluate.bind(this);
    
  }
  
  handleNumbers(e){
    this.setState({
      formula: this.state.curr === "0" || this.state.evaluated ? e.target.value : this.state.formula + e.target.value,
      curr : this.state.curr === "0" || /[-/*+]/.test(this.state.curr) || this.state.evaluated  ? e.target.value : this.state.curr + e.target.value,
      evaluated : this.state.evaluated ? false : this.state.evaluated 
    });
  }
  
  handleOperator(e){
    this.setState({
      formula : /[-/*+]/.test(this.state.curr) ? this.state.formula.replace(/[+/*-]$/, e.target.value) : this.state.formula + e.target.value,
      curr : e.target.value,
      evaluated : this.state.evaluated ? false : this.state.evaluated 
    });
  }
  
  handleDecimal(){      
    this.setState({
      formula : this.state.formula + ".",
      curr: /\./g.test(this.state.curr) ? this.state.curr : this.state.curr + "."
    });
  }
  
  handleClear(){
    this.setState({
      curr : "0",
      formula : "",
      evaluated: false
    });
  }
  
  handleEvaluate(){
    const result = eval(this.state.formula);

    this.setState({
      curr : result.toString(),
      formula : result.toString(),
      evaluated : true
    });
  }
  
  render(){
    return (
      <div>
        <div id="calculator">
          <Display value={this.state.curr} formula={this.state.formula}/>
          <Buttons  handleNumbers={this.handleNumbers}
                    handleEvaluate={this.handleEvaluate}
                    handleOperator={this.handleOperator} 
                    handleDecimal={this.handleDecimal}
                    handleClear={this.handleClear} />
        </div>
        <footer>
          Designed and Built by Romaric Fargetton using <a href="https://reactjs.org/">React</a> and <a href="https://draculatheme.com/">Dracula</a>
        </footer>
      </div>
    );
  }
}

