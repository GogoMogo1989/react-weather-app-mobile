import React from 'react';
import Weather from './components/weather';
import Form from './components/form';
import moment from 'moment';

const apiKey='97ae44a28d09d602ff074a873467e1d1'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      city:"",
      country:"",
      desription: "",
      wind:"",
      temp:""
    }
   
  }
  

  getWeather = async (event) => {

    event.preventDefault()

    const city = event.target.elements.city.value

    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    const data = await api.json()
    console.log(data)

    this.setState({
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      wind: data.wind.speed,
      temp: Math.floor(data.main.temp-273.15),
      img: data.weather[0].icon
    })
  }

  
  render(){
  return(
    <div className='App'>
      <Form loadWeather={this.getWeather}/>
      <Weather city={this.state.city}
               country={this.state.country}
               description={this.state.description}
               wind={this.state.wind}
               temp={this.state.temp}
               time={moment().format('YYYY.MM.DD')}
               img={this.state.img}
              />
    </div>
  )
  }
}

export default App;