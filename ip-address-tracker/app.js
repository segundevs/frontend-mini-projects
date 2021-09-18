const form = document.querySelector(".header__form");
const input = document.querySelector(".form__input");

document.addEventListener('DOMContentLoaded', ()=>{
  getData()
})


// Initialize map and use the user longitude and latitude to get location
function getMap(lat, lng){
  const container = L.DomUtil.get('mapid');
  if(container != null){
  container._leaflet_id = null;
  }
    const myMap = L.map("mapid").setView([lat, lng], 15);

    const marker = L.marker([lat, lng]).addTo(myMap)
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVweXRlcmNvZGVyIiwiYSI6ImNrdG0xemZwejBtY2wybm1qbHN6dGhuaXIifQ.HzQQjjLdM5_omFj0pekgog",
      {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: "pk.eyJ1IjoianVweXRlcmNvZGVyIiwiYSI6ImNrdG0xemZwejBtY2wybm1qbHN6dGhuaXIifQ.HzQQjjLdM5_omFj0pekgog",
        }
      ).addTo(myMap);
      marker.setLatLng([lat, lng]).openPopup();
}


//Fetch data from API after user enters their ip address
function getData() {
  const key = "at_zWpPAQSJjFm9Ze0kLLUQ3J1F9OJWT";
  const ip = input.value;
  fetch(`https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ip}`)
    .then((res) => res.json())
    .then((data) => {
      getLocation(data)
      getMap(data.location.lat, data.location.lng)
    })
    .catch((err) => console.log(err));
}


//Get and display user information on the screen
function getLocation(data){
  const address = document.querySelector(".ip-address__response");
  const locate = document.querySelector(".location__response");
  const timezone = document.querySelector(".timezone__response");
  const isp = document.querySelector(".isp__response");
    address.textContent = data.ip;
    locate.textContent = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
    timezone.textContent = `UTC ${data.location.timezone}`;
    isp.textContent = data.isp;    
}

//Trigger display when a user submits form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getData();
  input.value = '';
});
