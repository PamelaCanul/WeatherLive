# Weather Information App

## Description

A simple, modern, and responsive React application to fetch real-time weather information using the Weatherstack API.

## Features

- Enter a city name to get weather information
- Display weather data including temperature and description
- Handle and display error messages for invalid inputs or API failures

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PamelaCanul/WeatherLive

   ```

2. Navigate to the project directory:

   ```bash
   cd WeatherLive

   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Create a .env file in the root of the project and add your Weatherstack API key:
   ```bash
   NEXT_PUBLIC_WEATHER_API_KEY = your_OpenWeatherMap_api_key
   ```

## Usage

1. Clone the repository:

   ```bash
    npm start

   ```

2. Open your browser and go to http://localhost:3000

## Deployment

### Deploy to AWS Amplify

1. Push your code to a GitHub repository.
2. Go to the AWS Amplify Console.
3. Connect your GitHub repository to AWS Amplify.
4. Configure the build settings, ensuring the environment variables are set up correctly:
   ```bash
   NEXT_PUBLIC_WEATHER_API_KEY
   ```
5. Deploy the application.

## App
