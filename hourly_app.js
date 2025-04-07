const baseUrl = 'https://api.tomorrow.io/v4/weather/forecast';
// For development, you can temporarily use your API key here
// For production, you should use a backend service to handle the API key
const apiKey = 'T6XfPBzpeaqDQkerfE1pAGSLxzqz8JeG'
const timeSteps = 'timesteps=1h';

const options = {
  method: 'GET',
  headers: { accept: 'application/json' }
};

// Initialize empty chart variables
let visChartInstance = null;
let ccChartInstance = null;

// Function to fetch weather data
async function getWeather(city) {
    try {
        const response = await fetch(`${baseUrl}?location=${city}&${timeSteps}&apikey=${apiKey}`, options);
        const data = await response.json();

        console.log("API Response:", data); // Debugging

        // Extract the first 24 hours
        const hourlyData = data.timelines?.hourly?.slice(0, 24);

        if (!hourlyData || hourlyData.length === 0) {
            console.error("No hourly data available.");
            return;
        }

        // Extract data for charts
        const location = data.location.name
        const times = hourlyData.map(entry => new Date(entry.time).getHours() + ":00");
        const visibilityValues = hourlyData.map(entry => entry.values.visibility);
        const cloudCeilingValues = hourlyData.map(entry => entry.values.cloudCeiling);

        console.log("Times:", times);
        console.log("Visibility:", visibilityValues);
        console.log("Cloud Ceiling:", cloudCeilingValues);

        // Update current weather conditions
        document.getElementById("currentLocation").textContent = `${location}`
        document.getElementById("currentVisibility").textContent = `${visibilityValues[0]} km`;
        document.getElementById("currentCloudCeiling").textContent = `${cloudCeilingValues[0]} km`;

        // Update charts
        updateChart('visChart', visChartInstance, 'Visibility (km)', times, visibilityValues, 'rgba(255, 140, 0, 1)');
        updateChart('ccChart', ccChartInstance, 'Cloud Ceiling (km)', times, cloudCeilingValues, 'rgba(0, 123, 255, 1)');

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to update charts
function updateChart(chartId, chartInstance, label, labels, data, color) {
    const canvas = document.getElementById(chartId);
    
    if (!canvas) {
        console.error(`Canvas element with id '${chartId}' not found.`);
        return;
    }

    const ctx = canvas.getContext('2d');

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                borderWidth: 3,
                borderColor: color,
                backgroundColor: color.replace('1)', '0.2)'), // Light fill color
                tension: 0.3,
                pointRadius: 4,
                pointBackgroundColor: color
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { title: { display: true, text: 'Time (Hours)' } },
                y: { title: { display: true, text: label }, beginAtZero: false }
            }
        }
    });

    // Assign the correct chart instance
    if (chartId === 'visChart') visChartInstance = chartInstance;
    else ccChartInstance = chartInstance;
}

// Add event listener to fetch weather on button click
document.getElementById("getWeather").addEventListener("click", () => {
    const city = document.getElementById("location").value.trim();
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

// Fetch default city weather on page load
document.addEventListener("DOMContentLoaded", () => {
    getWeather("Boston");
});
