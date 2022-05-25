import "./forecast.css"

const forecast= ({name}) => {
    return(
        <div className="forecastComponents">
            <div className="forecastCard">
                <img src={`http://openweathermap.org/img/wn/${name.list[1].weather[0].icon}@2x.png`} alt=""/>
                <h5>{Math.floor(name.list[1].main.temp)} &deg;</h5>
                <h6>{(name.list[1].dt_txt).slice(11,16)}</h6>
            </div>
            <div className="forecastCard">
                <img src={`http://openweathermap.org/img/wn/${name.list[2].weather[0].icon}@2x.png`} alt=""/>
                <h5>{Math.floor(name.list[2].main.temp)} &deg;</h5>
                <h6>{(name.list[2].dt_txt).slice(11,16)}</h6>
            </div>
            <div className="forecastCard">
                <img src={`http://openweathermap.org/img/wn/${name.list[3].weather[0].icon}@2x.png`} alt=""/>
                <h5>{Math.floor(name.list[3].main.temp)} &deg;</h5>
                <h6>{(name.list[3].dt_txt).slice(11,16)}</h6>
            </div>
        </div>
    )
}

export default forecast