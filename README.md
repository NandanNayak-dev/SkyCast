# SkyCast

SkyCast is a responsive weather application built with React and Vite. It lets users search for a city and instantly view live weather details such as temperature, condition, local time, humidity, wind, cloud cover, visibility, pressure, and last updated data.

Live Website: [sky-cast-rosy.vercel.app](https://sky-cast-rosy.vercel.app)

## Project Overview

SkyCast was created as a frontend weather project to practice building modern user interfaces with React. The app takes a city input from the user, fetches real-time weather data from the WeatherAPI service, and presents the results in a clean and readable layout.

The project focuses on:

- Building reusable React components
- Managing state with React hooks
- Fetching live data from an external API
- Styling a responsive UI with CSS
- Deploying a React app to Vercel

## Features

- Search weather by city name
- Displays current temperature in Celsius and Fahrenheit
- Shows weather condition with icon
- Displays local time and timezone of the searched location
- Shows humidity, wind speed and direction, cloud cover, visibility, and pressure
- Friendly welcome screen before the first search
- Clean responsive interface for desktop and mobile

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Material UI
- WeatherAPI
- Vercel

## Project Structure

```text
SkyCast/
├── public/
│   └── logo.png
├── src/
│   ├── App.jsx
│   ├── Navbar.jsx
│   ├── SearchBox.jsx
│   ├── Content.jsx
│   ├── App.css
│   ├── Navbar.css
│   ├── SearchBox.css
│   ├── Content.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## How It Works

1. The user enters a city name in the search bar.
2. The app sends a request to the WeatherAPI current weather endpoint.
3. The fetched weather data is stored in React state.
4. The UI updates to show detailed live weather information for that location.

## Installation and Setup

To run this project locally:

```bash
npm install
npm run dev
```

After starting the development server, open the local Vite URL shown in the terminal.

## Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint to check code quality.

## API Used

This project uses the [WeatherAPI](https://www.weatherapi.com/) current weather endpoint to fetch live weather information.

## Deployment

The project is deployed on Vercel:

[https://sky-cast-rosy.vercel.app](https://sky-cast-rosy.vercel.app)

## Future Improvements

- Add weather forecast for upcoming days
- Add error handling for invalid city names
- Add loading states while data is being fetched
- Add location-based weather using browser geolocation
- Hide API keys using environment variables

## Author

Developed as the SkyCast weather project.
