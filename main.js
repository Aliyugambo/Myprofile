const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-discription p');
const notificationElement = document.querySelector('.notification');
const locationElement = document.querySelector('.location p');
function sendEmail() {
    Email.send({
        SecureToken : "70a0bfc5-acc3-46a4-bf24-725260c50676",
        To : 'abayomiwuraola686@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Mail From Portfolio",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
} 

let latitude = 0.0;
let longitude = 0.0;


const weather ={};

weather.temperature = {
    unit: "celsius"
};

const KELVIN = 273;

const key ="12bc564a933705b5fcf528d988701f0e";

if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = 'block'
    notificationElement.innerHTML= '<p>Browser does not suport geolocation</p>';
}

function setPosition(position){
    latitude=position.coords.latitude;
    longitude =position.coords.longitude;
    getWeather(latitude,longitude);

}

function showError(error){
  notification.style.display = "block";
  notification.innerHTML = `<p>${error.message}</p>`;
}
function getWeather(latitude, logitude){
  let api= `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
 
  fetch(api)
      .then(function (response){
          let data = response.json();
          return data;
      })
      .then(function(data){
          weather.temperature.value=Math.round(data.main.temp -KELVIN);
          weather.description=data.weather[0].description;
          // weather.iconId= data.weather[0].icon;
          weather.city= data.name;
          weather.country= data.sys.country;
      })
      .then(function(){
          displayWeather();
      });
}

function displayWeather(){
  // iconElement.innerHTML=`<img src="icons/${weather.iconId}.png"/>`;
  tempElement.innerHTML= `${weather.temperature.value} *<span>C</span>`;
  descElement.innerHTML= weather.description;
  // dateElement.innerHTML=weather.date;
  locationElement.innerHTML= `${weather.city}, ${weather.country}`;
}