const weather = ({city, country, description, wind, temp, time, img}) => {
    return(
        <div className="card">
            <h1>{city}</h1>
            <h2>{country}</h2>
            <h3>{description}</h3>
            <h4>{wind} km/h</h4>
            <h5>{temp} &deg;</h5>
            <h6>{time}</h6>
            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`}/>
        </div>
    )
}

export default weather