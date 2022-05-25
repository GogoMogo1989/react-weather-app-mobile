import {useState} from 'react';
import Weather from './components/weather';
import Form from './components/form';
import Forecast from './components/forecast';
import LoadingMask from './components/loadingMask'
import './App.css'

const apiKey='97ae44a28d09d602ff074a873467e1d1'
 
const App = () => {
  
  const [datas, setData] = useState("")
  const [isPending, setIsPending] =useState(false)

  const getWeather =  (event) => {

    event.preventDefault()
    const city = event.target.elements.city.value
   
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
              .then(res =>{
                  return res.json()
              })
              .then(data =>{
                  console.log(data)
                      setData(data)
              })
  }

  return(
    <div className='App'>
      <Form loadWeather={getWeather}/>
      {datas && <Weather name={datas}/>}
      {datas && <Forecast name={datas}/>}
    </div>
  )
}


export default App;