/* import React from 'react';
import '../App.css';

const baseURL = 'https://api.darksky.net/forecast/';
const key = '9acc955664b58b852bf3215b34a006cf';
var latitude = '';
var longitude = '';
var temperature = '';

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (p) {
      latitude = p.coords.latitude;
      longitude = p.coords.longitude;
    })
  }
}

getLocation();

const url = baseURL.concat(key, '/', latitude, ',', longitude);

'https://api.darksky.net/forecast/' + key + '/' + latitude + ',' + longitude;

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let weather = data.results;
  return weather.map(function(weather) {
    temperature = weather.temperature;
    console.log(temperature);
  })
})

export default function Weather() {
  return (
    <div>
      {temperature}
    </div>
  );
} */