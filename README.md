# Weather App

A modern React-based weather application that provides real-time weather information for cities worldwide. The app features a clean, responsive interface built with Material-UI components and integrates with the OpenWeatherMap API for accurate weather data.

## Project Overview

The Weather App is a single-page application (SPA) that allows users to search for weather information by city name. It displays comprehensive weather details including temperature, humidity, and weather conditions with dynamic visual elements.

### Key Features

- Real-time weather data fetching
- Responsive Material-UI interface
- Dynamic weather icons and backgrounds
- Error handling for invalid city searches
- Clean, modern design with dark/light theme support

## Technology Stack

### Frontend Framework
- **React 19.1.0** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server

### UI Components & Styling
- **Material-UI (MUI) 7.1.1** - React component library
- **MUI Icons Material** - Icon components
- **Emotion** - CSS-in-JS styling solution
- **Roboto Font** - Google's Roboto font family

### API Integration
- **OpenWeatherMap API** - Weather data provider

### Development Tools
- **ESLint** - Code linting and quality enforcement
- **TypeScript Types** - Type definitions for React

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- OpenWeatherMap API key (the current key in the code may have usage limits)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KSingha001/Weather_App.git
   cd Weather_App
## Install dependencies

```bash
npm install
```

## Start the development server

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run lint` - Run ESLint code quality checks
- `npm run preview` - Preview production build locally

---

## Running on Other Devices

### Local Network Access

1. **Find your local IP address**
    - Windows: `ipconfig`
    - macOS/Linux: `ifconfig` or `ip addr show`

2. **Start the development server with host binding**

    ```bash
    npm run dev -- --host
    ```

3. **Access from other devices**

    Navigate to `http://YOUR_LOCAL_IP:5173` on other devices connected to the same network.

---

## Production Deployment

1. **Build the application**

    ```bash
    npm run build
    ```

2. **Deploy the `dist` folder** to your preferred hosting service:
    - Netlify
    - Vercel
    - GitHub Pages
    - Any static hosting provider

---

## Project Structure

```code
src/
├── App.jsx          # Root application component
├── WeatherApp.jsx   # Main weather application logic
├── SearchBox.jsx    # City search and API integration
├── InfoBox.jsx      # Weather data display component
├── main.jsx         # React application entry point
└── *.css           # Component styling files
```

---

## Component Architecture

The application follows a hierarchical component structure:

- **App** - Application root
- **WeatherApp** - State management and coordination
- **SearchBox** - User input and API calls
- **InfoBox** - Weather data presentation

---

## API Configuration

The app uses the OpenWeatherMap API. To use your own API key:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Replace the API key in `src/SearchBox.jsx`

---

## Browser Compatibility

The application supports modern browsers with ES2020 features and JSX support.

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Run `npm run lint` to ensure code quality
4. Submit a pull request

---

## License

This project is private and not intended for public distribution.
