![Rick and Morty](frontend/public/img/nav_logo.png)

### Deploy Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/709b8e18-30dc-434d-bcdf-c277222fbd34/deploy-status)](https://app.netlify.com/sites/nazarenocarlesso-rick-and-morty/deploys)

# About The Project

#### Find your favorite rick and morty characters.

You have access to about 800+ characters from over 100+ diferent locations and 51 episodes and collect them in a deck of cards.

I built this app during my four months Fullstack Developer Bootcamp at soyHenry to demonstrate what has been learned and explore our creativity.

### Made by

#### Nazareno Carlesso

Fullstack Web Developer, who likes to learn new things and collaborate in different types of projects, like this website.

### Build With

![Javascript](https://img.shields.io/badge/Javascript-black.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/React-black.svg?style=flat-square&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/Redux-black.svg?style=flat-square&logo=redux&logoColor=%23593d88)
![NodeJS](https://img.shields.io/badge/NodeJS-black?style=flat-square&logo=node.js&logoColor=%68a063)
![Express](https://img.shields.io/badge/Express-black.svg?style=flat-square&logo=express&logoColor=%2361DAFB)
![MaterialUI](https://img.shields.io/badge/MaterialUI-black.svg?style=flat-square&logo=mui&logoColor=%230081CB)
![HTML5](https://img.shields.io/badge/HTML5-black.svg?style=flat-square&logo=html5&logoColor=%23E34F26)
![CSS3](https://img.shields.io/badge/CSS3-black.svg?style=flat-square&logo=css3&logoColor=%231572B6)
![Netlify](https://img.shields.io/badge/Netlify-black.svg?style=flat-square&logo=netlify&logoColor=#00C7B7)

# Getting Started

### Instalation

To setup the frontend first we need to install the dependencies.

1. Access the package.json inside frontend subdirectory
2. Open it with the integrated terminal
3. Enter the next command line

```
npm install
```

4. Start the development server using the next command line

```
npm start
```

### Environment

The Vite frontend uses the public Rick and Morty API by default. Copy
`frontend/.env.example` to `frontend/.env` before starting the app:

```env
VITE_BACK=https://rickandmortyapi.com
```

This lets you run or deploy the frontend without the project's backend.

To check the frontend with ESLint, run `npm run lint` from `frontend/`.
VS Code can show lint warnings in the editor with the recommended ESLint
extension.

### API

It will work with the previous API but the proyect has it's own API that contains the logic of the endpoint routes

6. Repeat the instalation process but now inside the backend subdirectory

7. Server will listen our request with the next command line

```
npm run dev
```

### Environment

To run the project's API locally, copy `backend/.env.example` to
`backend/.env`. It sets the server port:

```env
PORT=3000
```

### Finish

To use the project's backend instead of the public API, change
`VITE_BACK` in `frontend/.env` to `http://localhost:3000` and start the
backend with `npm run dev`. Restart the frontend after changing environment
variables.

Run `npm run build` in `frontend/` to create the static site in `frontend/dist/`.


# Screenshots

![signin](screenshots/signin.png)
![home](screenshots/home.png)
![deck](screenshots/deck.png)
![favorites](screenshots/favorites.png)
![about](screenshots/about.png)
![detail](screenshots/detail.png)
![responsive](screenshots/responsive.png)

### Thanks for visiting

Would be nice if you leave a star