# Weather Visibility and Cloud Ceiling App

A simple web application that displays real-time weather data using the Tomorrow.io API. The app provides visibility and cloud ceiling information for any location.

## Features

- Real-time weather data retrieval
- Search functionality for any city or location
- Display of current visibility and cloud ceiling measurements
- Hourly charts for visibility and cloud ceiling trends
- Responsive design for various screen sizes

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Chart.js for data visualization
- Tomorrow.io Weather API

## Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, etc.)
- An API key from Tomorrow.io (you can get one at [Tomorrow.io](https://www.tomorrow.io/))

### Setup

1. Clone this repository
2. Open `index.html` in your web browser
3. Enter a location in the search box
4. Click "Get Weather" to see the results

## API Integration

This application uses the Tomorrow.io API to fetch weather data. The API endpoints used are:
- Real-time weather data
- Hourly forecasts

## Project Structure

- `index.html` - Main HTML file containing the application structure
- `styles.css` - CSS styles for the application
- `hourly_app.js` - JavaScript code for weather data and charts

## Usage

1. Enter a city name or coordinates in the search box
2. Click the "Get Weather" button
3. View the current visibility and cloud ceiling data
4. Scroll down to see hourly charts for both metrics

## Security Note

⚠️ **Important Security Information**:
This application currently stores the API key directly in the client-side JavaScript code. This is not a secure practice for production environments because:
1. The API key is visible to anyone who views the page source
2. It could be misused by others
3. It could lead to unexpected API usage charges

For a production environment, you should:
1. Create a backend service to handle API calls
2. Store the API key securely on the server
3. Have the frontend make requests to your backend instead of directly to the API

## License

This project is open source and available under the MIT License.

## Acknowledgments

- [Tomorrow.io](https://www.tomorrow.io/) for providing the weather API
- [Chart.js](https://www.chartjs.org/) for the visualization library 