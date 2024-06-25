# WeatherSphere

WeatherSphere is a web application which displays the weather data of desired location like Min-Max temperature, humidity, day-night, feels-like temperature. WeatherSphere fetches data from OpenWeatherAPI and is built using ReactJS and CSS. 

## Tech Stack 

- ReactJS
- CSS
- HTML

## Project Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/DivineKushaL/weather_project.git
    cd weather_project
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    npm start
    ```

4. Go to the Web browser and open below link to view the application:
   ```bash
   http://localhost:3000
   ```

## Usage

Once the application is running, you can use it by entering the desired location in the search bar to get the information about weather of desired location 

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


## Deployment

WeatherSphere is deployed using GitHub Pages and can be accessed at [WeatherSphere](https://divinekushal.github.io/weather_project/).

To deploy your own version of WeatherSphere using GitHub Pages, follow these steps:

1. Ensure your `homepage` field in `package.json` is set to `"https://your-username.github.io/your-appname`
2. Build the project:
    ```bash
    npm run build
    ```
3. Deploy the `build` directory to the `gh-pages` branch:
    ```bash
    npm install -g gh-pages
    gh-pages -d build
    ```

Your project will be available at `https://your-username.github.io/your-appname`.

## Acknowledgments

- Special thanks to [OpenWeather](https://openweathermap.org/) for their API.
