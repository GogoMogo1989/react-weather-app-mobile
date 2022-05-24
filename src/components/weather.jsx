import "./weather.css"

const weather = ({name}) => {
    return(
        <div className="weatherCardContainer">
            <div className="card">
               {/*  <h1>{name.city.name}</h1>
                <h2>{name.city.country}</h2> */}
                <img className="img" src={`http://openweathermap.org/img/wn/${name.list[0].weather[0].icon}@2x.png`} />
                <h3>{name.list[0].weather[0].description}</h3>
                <h4>{name.list[0].wind.speed} km/h</h4>
                <h5>{Math.floor(name.list[0].main.temp)} &deg;</h5>
                <h6>{(name.list[0].dt_txt).slice(11,16)}</h6>
            </div>
        </div>
    )
}

export default weather