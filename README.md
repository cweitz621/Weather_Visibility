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
2. Create a `.env` file in the root directory
3. Add your Tomorrow.io API key to the `.env` file:
   ```
   TOMORROW_API_KEY=your_api_key_here
   ```
4. Open `index.html` in your web browser
5. Enter a location in the search box
6. Click "Get Weather" to see the results

## API Integration

This application uses the Tomorrow.io API to fetch weather data. The API endpoints used are:
- Real-time weather data
- Hourly forecasts

## Project Structure

- `index.html` - Main HTML file containing the application structure
- `styles.css` - CSS styles for the application
- `hourly_app.js` - JavaScript code for weather data and charts
- `.env` - Environment variables (not tracked by git)

## Usage

1. Enter a city name or coordinates in the search box
2. Click the "Get Weather" button
3. View the current visibility and cloud ceiling data
4. Scroll down to see hourly charts for both metrics

## Security Note

The API key is stored in the `.env` file which is not tracked by git. Make sure to:
1. Never commit your `.env` file
2. Keep your API key secure
3. Use different API keys for development and production

## License

This project is open source and available under the MIT License.

## Acknowledgments

- [Tomorrow.io](https://www.tomorrow.io/) for providing the weather API
- [Chart.js](https://www.chartjs.org/) for the visualization library 