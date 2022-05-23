import moment from "moment"

const weather = ({name}) => {
    return(
        <div className="card">
                    <h1>{name.name}</h1>
                    <h2>{name.sys.country}</h2>
                    <img src={`http://openweathermap.org/img/wn/${name.weather[0].icon}@2x.png`}/>
                    <h3>{name.weather[0].description}</h3>
                    <h4>{name.wind.speed} km/h</h4>
                    <h5>{Math.floor(name.main.temp-273.15)} &deg;</h5>
                    <h6>{moment().format('YYYY.MM.DD')}</h6>
        </div>
    )
}

export default weather