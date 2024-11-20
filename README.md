<a id="readme-top"></a>

# Sticker Smash for ReactNative

<a href="https://tecnate.dev" target="_blank" rel="author">Tecnate</a> | Last Updated: 20 Nov 2024

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a hands-on exploration of React Native, built using the Expo framework as part of a tutorial. You can find the original documentation in the [Source README](src-README.md).

The completed app, Sticker Smash, is an interactive photo-editing tool. Users can import photos from their device's library, enhance them with fun stickers, and customize the layout by dragging stickers to their desired position. Additionally, stickers can be resized with a simple double-tap or double-click, making the app intuitive and engaging to use.

By completing this project, I deepened my understanding of React Native's capabilities for building mobile apps.

<div align="center">

![screenshot1](screenshots/screenshot1.png "before")
![screenshot2](screenshots/screenshot2.png "after")

</div>

### Built With

-   React Native
-   Expo React Framework

<!-- GETTING STARTED -->

## Getting Started

Visit [Expo's Tutorial](https://docs.expo.dev/tutorial/introduction/) for step-by-step instructions to build the app.

### Prerequisites

Prior knowledge of:

-   JavaScript, TypeScript, & React
-   Node.js
-   Terminal

### Installation

-   Expo Go installed on a physical device
-   Node.js
-   VS Code or any other preferred code editor or IDE installed
-   A macOS, Linux, or Windows (PowerShell and WSL2) with a terminal window open

<!-- USAGE EXAMPLES -->

## Usage

In the terminal, run `npx expo start` to start Expo (or `npx expo start -c` to start and clear the cache).

-   Type `w` when prompted to see your project render in a web browser.
-   Use your mobile device's camera to scan the QR code that generates in the terminal to see your project render on your mobile screen.

### Troubleshooting

> **Note:** At the time of this update, the current iOS SDK Version 52 is incompatible with the source files. You can still render your project in a web browser (or you can still use SDK Version 51 if you haven't updated Expo Go app yet).

You will likely encounter errors if your dependencies versions don't match the original's. To fix this misalignment in versions:

1. Delete your **node_modules** directory: `rm -rf node_modules`
2. Replace your **package.json** file's contents with that from the source repo.
    - Visit the original [Sticker Smash Repo](https://github.com/expo/examples/tree/master/stickersmash) on GitHub for files.
3. Reinstall your **node_modules** directory: `npm install`
4. If necessary, you can replace the contents of your **app.json** file with that of the original source as well.

<!-- ROADMAP -->

## Roadmap

There are no plans to implement additional features at this time.

<!-- CONTRIBUTING -->

## Contributing

This project is for learning/demonstration and is not being actively developed.

<!-- LICENSE -->

## License

Distributed under the [MIT License](https://choosealicense.com/licenses/mit/).

<!-- CONTACT -->

## Contact

Nate: [Website](https://tecnate.dev/) | [GitHub](https://github.com/nvsmith) | [Gravatar Profile](https://gravatar.com/nvsmith435)

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

#### Expo React Framework

-   https://expo.dev/

#### README Template

-   [Best README Template](https://github.com/othneildrew/Best-README-Template/tree/master)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
