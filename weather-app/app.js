
//!  BUTTON FUNCTION 


let buttonsFunction = searchCity = () => {

    const input = document.querySelector("input").value

    const getWeather = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);

        //!   DOM Manipulations 

        document.querySelector("#city-name").textContent = data.name                    //? for name 
        document.querySelector("#weather-type").innerHTML = data.weather[0].main        //? for weather type
        document.querySelector("#temp").textContent = data.main.temp                    //? temp
        document.querySelector("#min-temp").textContent = data.main.temp_min            //? minimum temp
        document.querySelector("#max-temp").textContent = data.main.temp_max            //? maximum temp

    }
    getWeather()
}