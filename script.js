const apiKey ="b020614c6740457803036d0585df467c";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }else{
        var data =await response.json();

   // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" " + "Km/Hr";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src ="weather-app-img/clouds.png";
    }
   else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src ="weather-app-img/drizzle.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src ="weather-app-img/clear.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src ="weather-app-img/mist.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src ="weather-app-img/rain.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display ="none";

    }

    
}
document.getElementById('searchBar').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const query = event.target.value;
        // Perform your search or other actions with the query
        // alert('Search query: ' + query);
        checkWeather(searchBox.value);
    }
});

searchBtn.addEventListener('click',()=>{

    checkWeather(searchBox.value); 
})

