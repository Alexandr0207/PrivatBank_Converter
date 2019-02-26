import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PrivatBank from './PrivatBank/PrivatBank';
import axios from 'axios';

class App extends Component {

  state = {
    data: {},
    loading: false,
    inputUSD: 0 ,
    sumUSD: 0,
    convertUSD: '',
  }

  componentDidMount(){
    this.getCourse();
    // this.getConvert();
    this.convertUsd();
  }

  componentDidUpdate(){
    // this.convert();
  }

  getCourse = () => {
    axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then(res => {
      this.setState({
         data: res.data,
          //  ccy: res[0].ccy;
      })
    })
    .catch(err => alert('Проверьте интернет!'))
  }

  getConvert = () => {
    // e.preventDefault();
    axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then(res => {
      this.setState({
        convertUSD: Number(res.data[0].buy).toFixed(2),
      })
      // console.log(res);
    })
  }

  convertUsd = (e, convertUSD) => {
    this.getConvert();
    let usd = convertUSD;
    console.log(usd);
    if(usd !== undefined){
      console.log(usd);
    } else{
      return null
    }
    // e.stopPropagation();
  }

  sumUsd = () =>{
    // b.preventDefault();
    // this.setState(prevState => ({
    //   sumUSD: this.state.convertUSD *  this.state.inputUSD
    // }));
    // this.setState({
    //   sumUSD: this.state.convertUSD * this.state.inputUSD
    // })
    // return console.log(;
    // console.log(b);
  }

  
  inputChange = async(e) =>{
    let getValueInput = e.target.value;

    await this.setState(prevState => ({
      inputUSD: getValueInput,
    }));
    this.setState({
      sumUSD: this.state.convertUSD *  this.state.inputUSD      
    })
   

   
    // this.setState({
    //   inputUSD: inputUSD,
    // })
    // this.sumUsd();
  }



  
  
  
  
  
  
  render() {
    const {data, loading, convertUSD} = this.state;
    console.log(convertUSD);
    // console.log(data);
    return (
      <div className="App">
       <PrivatBank 
        data={data} 
        loading={loading} 
        resultUSD={this.state.sumUSD} 
        sumUS={this.state.sumUSD} 
        inputUS={this.state.inputUS} 
        inputChange={this.inputChange} 
        convertUSD={this.state.convertUSD} 
        sumUsd={this.sumUsd} 
        inputUSD={this.state.sumUSD} />
      </div>
    );
  }
}

export default App;
