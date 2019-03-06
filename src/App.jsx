import React, { Component } from 'react';
// import {Switch, Route} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import PrivatBank from './PrivatBank/PrivatBank';
import axios from 'axios';
import Usd from './Usd/Usd';
import Euro from './Euro/Euro';
import Rur from './Rur/Rur';
import Btc from './BTC/Btc';
import Menu from './Menu/Menu';

class App extends Component {

  state = {
    data: {},
    loading: false,
    inputUSD: '',
    sumUSD: 0,
    convertUSD: '',
    convertEuro: '',
    convertRur: '',
    convertBtc: '',
    inputUS: '',
    inputEU: '',
    inputRu: '',
    inputBt: '',
    sumRur: 0,
    sumEuro: 0,
    sumBtc: 0,
    usdActive: true,
    euroActive: false,
    rurActive: false,
    btcActive: false,
  }

  componentDidMount(){
    this.getCourse();
    // this.getConvert();
    this.convertUsd();
  }

  usdActive = (e) =>{
    e.preventDefault()
      this.setState({
        usdActive: true,
        euroActive: false,
        rurActive: false,
        btcActive: false,
      })
  }

  euroActive = (e) => {
    e.preventDefault();
    this.setState({
      euroActive: true,
      usdActive: false,
      rurActive: false,
      btcActive: false,
    })
}

   rurActive = (e) => {
     e.preventDefault();
     this.setState({
       rurActive: true,
       euroActive: false,
       usdActive: false,
       btcActive: false
     })
   }

   btcActive = (e) => {
     e.preventDefault();
     this.setState({
       btcActive: true,
       euroActive: false,
       usdActive: false,
       rurActive: false
     })
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
        convertEuro: Number(res.data[1].buy).toFixed(2),
        convertRur: Number(res.data[2].buy).toFixed(2),
        convertBtc: Number(res.data[3].buy).toFixed(2),
      })
      // console.log(res);
    })
  }

  convertUsd = (convertUSD) => {
    this.getConvert();
    let usd = convertUSD;
    // console.log(usd);
    if(usd !== undefined){
      console.log(usd);
    } else{
      return null
    }
    // e.stopPropagation();
  }
  
  inputChangeUSD = async(e) =>{
    let getValueInput = e.target.value;
    let getValueInputEuro = e.target.value;
    let getValueInputRur = e.target.value;
    let getValueInputBtc = e.target.value;
    await this.setState(prevState => ({
      inputUSD: getValueInput,
      inputEU: getValueInputEuro,
      inputRu: getValueInputRur,
      inputBt: getValueInputBtc
    }));
    this.setState({
      sumUSD: this.state.convertUSD * this.state.inputUSD,
      sumEuro: this.state.convertEuro * this.state.inputEU,
      sumRur: this.state.convertRur * this.state.inputRu,
      sumBtc: this.state.convertBtc * this.state.inputBt      
    })
  }



  
  
  
  
  
  
  render() {
    const {data, loading, usdActive,euroActive, rurActive, btcActive} = this.state;
    // console.log(convertEuro);
    // console.log(data);
    return (
      <div className="App">
       <PrivatBank 
        data={data} 
        loading={loading} 
        resultUSD={this.state.sumUSD} 
        convertUSD={this.state.convertUSD} 
        sumUsd={this.sumUsd} 
        inputUSD={this.state.sumUSD} />
        <Menu 
        usdActive={this.usdActive}
        euroActive={this.euroActive}
        rurActive={this.rurActive}
        btcActive={this.btcActive}
        />
        { usdActive ?
        <Usd 
        sumUS={this.state.sumUSD} 
        inputUS={this.state.inputUSD}
        inputChangeUSD={this.inputChangeUSD}  />
        : null
        }
        { euroActive ?
        <Euro
        sumEuro={this.state.sumEuro} 
        inputEuro={this.state.inputEU}
        inputChangeUSD={this.inputChangeUSD}/>
        : null
        }
        { rurActive ?
        <Rur
        sumRur={this.state.sumRur} 
        inputRu={this.state.inputRu}
        inputChangeUSD={this.inputChangeUSD}/>
        : null
        }
        { btcActive ?
        <Btc
        sumBtc={this.state.sumBtc} 
        inputBt={this.state.inputBt}
        inputChangeUSD={this.inputChangeUSD}/>
        : null
        }
      </div>
    );
  }
}

export default App;
