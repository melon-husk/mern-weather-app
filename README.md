# MERN Weather App

Weather app using MERN stack

## Installation

Use npm to install all the dependencies

Install backend dependencies

```bash
npm install && npm i nodemon
```

Install frontend dependencies

```bash
cd frontend && npm install
```

## Usage

To start the backend server

```bash
nodemon server
```

To start the frontend server

```bash
npm start
```

Now you can go to `localhost:3000` to access your frontend

## Setup

- Create .env file at the root directory of the project and add your `PORT`, `ATLAS_URI` and `OPEN_WEATHER_API_KEY` variables
- Go to `frontend/src/App.js` and replace the address in axios post to point to your server
- Go to `frontend/src/components/SearchBar/SearchBar.js` and replace the address in axios post to point to your server

### TODO

- Add multiple theme support
- Add Page support
- Document the code
- Auto load weather data from IP on startup
