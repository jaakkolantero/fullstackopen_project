<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jaakkolantero/fullstackopen_project">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Pizza italia</h3>

  <p align="center">
    FULL STACK WEB DEVELOPMENT PROJECT
    <br /><br />
    <a href="https://pizzaitalia.now.sh/">View Demo</a>
    ·
    <a href="https://github.com/jaakkolantero/fullstackopen_project/issues">Report Bug</a>
    ·
    <a href="https://github.com/jaakkolantero/fullstackopen_project/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://pizzaitalia.now.sh/)

Open university [FULL STACK WEB DEVELOPMENT PROJECT](https://courses.helsinki.fi/en/aytkt21010/129098202) where I built a serverless restaurant app with git-based cms [TinaCMS](https://tinacms.org/). Authentication is done with Google's Firebase.

### Built With

- [TinaCMS](https://tinacms.org/)
- [Next.js](https://nextjs.org/)
- [Now.sh](https://zeit.co/home)
- [TailwindCSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [Figma](https://www.figma.com)
- [Static Forms](https://www.staticforms.xyz/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm

```sh
npm install npm@latest -g
```

### Installation / Getting started

#### NOTE: tested on linux(ubuntu)

1. Clone the repo

```sh
git clone https://github.com/jaakkolantero/fullstackopen_project.git
```

2. Setup .env in www folder

```sh
cd fullstackopen_project/
touch www/.env
# open with your editor ex.
code www/.env
```

.env

```sh
# Update these with your Firebase app's values.
FIREBASE_AUTH_DOMAIN=pizza-italia-example.firebaseapp.com
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-skpto@pizza-italia-example.iam.gserviceaccount.com
FIREBASE_DATABASE_URL=https://pizza-italia-example.firebaseio.com
FIREBASE_PROJECT_ID=pizza-italia-example
FIREBASE_PUBLIC_API_KEY=AIzaSyDcIEXAMPLE8sUoypkIOOKJgQ

# Your Firebase private key.
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nMIIEvQIBADAiDqFc19dgtKt\n...\n-----END PRIVATE KEY-----\n

# Secrets used by cookie-session.
SESSION_SECRET_CURRENT=someSecretValue
SESSION_SECRET_PREVIOUS=anotherSecretValue

```

3. Install and run project

```sh
npm run install:all
npm run start:tinacms
```

[http://localhost:3000/](http://localhost:3000/)

<!-- USAGE EXAMPLES -->

## Usage

Currently TinaCMS editor is only usable when running locally. I'm working on serverless version of TinaCMS github backend but in the meantime updating content needs a bit more work.

You can get a feel of TinaCMS editor in demo(Heading content is editable although save doesn't obviously work).

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/jaakkolantero/repo/issues) for a list of proposed features (and known issues).

## Contact

Tero Jaakkola - [jaakkolantero](https://twitter.com/jaakkolantero) - tero.jaakkola1@gmail.com

Project Link: [https://github.com/jaakkolantero/fullstackopen_project](https://github.com/jaakkolantero/fullstackopen_project)

<!-- ACKNOWLEDGEMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jaakkolantero/fullstackopen_project
[contributors-url]: https://github.com/jaakkolantero/fullstackopen_project/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/jaakkolantero/fullstackopen_project?style=social
[stars-url]: https://github.com/jaakkolantero/fullstackopen_project/stargazers
[issues-shield]: https://img.shields.io/github/issues-raw/jaakkolantero/fullstackopen_project
[issues-url]: https://github.com/jaakkolantero/fullstackopen_project/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/jaakkolantero/fullstackopen_project/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jaakkolantero
[product-screenshot]: images/screenshot.png
