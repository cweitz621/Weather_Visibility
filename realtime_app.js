
const baseUrl = 'https://api.tomorrow.io/v4/weather/realtime'
const apiKey = 'T6XfPBzpeaqDQkerfE1pAGSLxzqz8JeG'

const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'accept-encoding': 'deflate, gzip, br'}
};

const cloudCeilingDOM = document.querySelector('#cloudCeiling')
const visibilityDOM = document.querySelector('#visibility')

const searchBox = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')

async function getWeather(city) {
    try {
      const response = await fetch((baseUrl + '?location=' + city + '&apikey=' + apiKey), options);
      const data = await response.json();
  
      // Extract cloudCeiling and visibility
      const cloudCeiling = data.data.values.cloudCeiling;
      const visibility = data.data.values.visibility;
  
      // Update HTML
      cloudCeilingDOM.innerHTML = `Cloud Ceiling: ${cloudCeiling} km`;
      visibilityDOM.innerHTML = `Visibility: ${visibility} km`;
  
      console.log("Cloud Ceiling:", cloudCeiling);
      console.log("Visibility:", visibility);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

searchButton.addEventListener('click', () => {
    console.log(searchBox.value)
    getWeather(searchBox.value)
})

  