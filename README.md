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
cd frontend
npm install
```

## Setup

- Create .env file at the root directory and add your `PORT` and `ATLAS_URI` variables
- Go to `frontend/App.js` and replace the address in axios post to point to your server
- Go to `frontend/components/SearchBar/SearchBar.js` and replace the address in axios post to point to your server

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

### TODO

- Add multiple theme support
- Add Page support
- Refactor
