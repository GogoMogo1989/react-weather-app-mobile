import "./weather.css"

const weather = ({name}) => {
    return(
        <div className="weatherCardContainer">
            <div className="card">
                <img className="img" src={`http://openweathermap.org/img/wn/${name.list[0].weather[0].icon}@2x.png`} alt="" />
                <h3>{name.list[0].weather[0].description}</h3>
                <h4>{Math.floor(name.list[0].main.temp)} &deg;</h4>
                <h5>{name.list[0].wind.speed} km/h</h5>
            </div>
        </div>
    )
}

export default weather