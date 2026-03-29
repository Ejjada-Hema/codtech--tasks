async function getWeather(){

let city = document.getElementById("city").value;

let apiKey = "1ff40046ff8f6ca026ceea38e97537aa";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

let response = await fetch(url);
let data = await response.json();

let weather = `
<h2>${data.name}</h2>
<p>🌡 Temperature: ${data.main.temp} °C</p>
<p>☁ Weather: ${data.weather[0].main}</p>
<p>💧 Humidity: ${data.main.humidity}%</p>
`;

document.getElementById("weatherResult").innerHTML = weather;

}
catch(error){
document.getElementById("weatherResult").innerHTML="City not found";
}

}