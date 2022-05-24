import "./form.css"

const Form = ({loadWeather}) => {
    return(
        <div className="formContainer">
            <form className="form" 
                  onSubmit={loadWeather} >
                <input type="text" 
                       autoComplete="off" 
                       className="input"
                       name="city" 
                       placeholder="Város"
                       />
            </form>
        </div>
    )
}

export default Form