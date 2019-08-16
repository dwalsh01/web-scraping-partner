# Web Scraping Partners

Purpose of this was to scrape company names from various sources

## Installation

To download this project select **clone or download** and **download zip**.

Node + Yarn are required to run this project.

- [Install Node](https://nodejs.org/en/)
- [Install Yarn](https://yarnpkg.com/en/docs/install#windows-stable)

Once you have those installed and the project unzipped, open the project folder in your terminal.

- enter `yarn install`
- you should now see a *node_modules* folder and no error messages in your terminal
- once thats completed you can run the project for yourself using `yarn start`

## Editor

I recommend [VSCode](https://code.visualstudio.com/)

If you open vscode and select file, open folder you can open your unzipped project.

## Usage

To add your own scrape function:

- create it within the `src/getScrapes.js` file.
- import it within the `src/index.js` where it says `import {...} from './getScrapes.js` add within the curley braces
