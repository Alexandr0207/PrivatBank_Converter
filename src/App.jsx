import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import PrivatBank from './PrivatBank/PrivatBank';
import axios from 'axios';
import Usd from './Usd/Usd';
import Euro from './Euro/Euro';
import Menu from './Menu/Menu';

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

  convertUsd = (convertUSD) => {
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
  
  inputChangeUSD = async(e) =>{
    let getValueInput = e.target.value;

    await this.setState(prevState => ({
      inputUSD: getValueInput,
    }));
    this.setState({
      sumUSD: this.state.convertUSD * this.state.inputUSD      
    })
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
        convertUSD={this.state.convertUSD} 
        sumUsd={this.sumUsd} 
        inputUSD={this.state.sumUSD} />
        <Menu/>
        <Switch>
        <Route exact path="/" render={() => 
        <Usd 
        sumUS={this.state.sumUSD} 
        inputUS={this.state.inputUS}
        inputChangeUSD={this.inputChangeUSD}  />}/>
        <Route path="/euro" render={() => 
        <Euro
        sumUS={this.state.sumUSD} 
        inputUS={this.state.inputUS}
        inputChangeUSD={this.inputChangeUSD}/>}/>
      </Switch>
        
      </div>
    );
  }
}

export default App;
