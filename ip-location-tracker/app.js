const form = document.querySelector('.header__form');
const input = document.querySelector('.form__input');

function getLocation(){
  const address = document.querySelector('.ip-address__response');
  const locate = document.querySelector('.location__response');
  const timezone = document.querySelector('.timezone__response');
  const isp = document.querySelector('.isp__response');
  const key = 'at_zWpPAQSJjFm9Ze0kLLUQ3J1F9OJWT';
  const ip = input.value;
  let lat;
  let lng;
  fetch(`https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ip}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    address.textContent = data.ip;
    locate.textContent = data.location.region;
    timezone.textContent += data.location.timezone;
    isp.textContent = data.isp;
    lat = data.location.lat;
    lng = data.location.lng;

    //Map
let myMap;
myMap = L.map('mapid').setView([lat, lng], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVweXRlcmNvZGVyIiwiYSI6ImNrdG0xemZwejBtY2wybm1qbHN6dGhuaXIifQ.HzQQjjLdM5_omFj0pekgog', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoianVweXRlcmNvZGVyIiwiYSI6ImNrdG0xemZwejBtY2wybm1qbHN6dGhuaXIifQ.HzQQjjLdM5_omFj0pekgog'
}).addTo(myMap);

  })
  .catch(err => console.log(err))
}

form.addEventListener('submit', (e)=> {
  e.preventDefault()
  getLocation()
})


