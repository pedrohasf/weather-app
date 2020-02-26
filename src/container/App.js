import React, { Component } from 'react';
import Form from '../components/Form'
import Card from '../components/Card'
import './App.scss'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      info: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
handleChange(event) {
  this.setState({
    input: event.target.value
  });
}
handleSubmit(event) {
  event.preventDefault()
  const apiKey = '2cd28b4eac4d5462648b276e45206c76'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=${apiKey}&units=metric`
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    this.setState(() => {                
      return {info: data};
    })
  });
}
  render(){
    let temp, condition, time, icon, imgUrl;
    if(this.state.info['main']){
      temp = Math.round(this.state.info['main'].temp)
    }
    if(this.state.info['weather']){
      condition = this.state.info['weather'][0]['description']
      icon = this.state.info['weather'][0]['icon']
      imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
    }
    if(this.state.info['timezone']){
      time = this.state.info['timezone']/3600
      time += new Date().getUTCHours()
      if(time>24){
        time -= 24;
      }
    }
    return (
  <div>
    <h1 className="heading">Simple Weather App</h1>
    <Form onChange={this.handleChange} value={this.state.input} onSubmit={this.handleSubmit}/>
    {this.state.info['main']!==undefined?<Card url={imgUrl} hora={time} temperatura={temp} condicao={condition}/>:''}
  </div>
  );
}
}

export default App;