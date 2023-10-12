let score = 0;
    let gameStarted = false;

    const startButton = document.getElementById("start-button");
    const eggImage = document.getElementById("egg");
    const scoreDisplay = document.getElementById("score");

    startButton.addEventListener("click", () => {
        if (!gameStarted) {
            eggImage.style.display = "block";
            startButton.style.display = "none";
            gameStarted = true;
            score = 0;
            scoreDisplay.textContent = "Score: 0";

            startButton.style.backgroundColor = "green";
            startButton.textContent = "Click as fast as you can!";
            setTimeout(endGame, 10000); // Pelin kesto: 10 sekuntia
        }
    });

    eggImage.addEventListener("mousedown", () => {
        if (gameStarted) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
        }
    });

    function endGame() {
        gameStarted = false;
        eggImage.style.display = "none";
        startButton.style.backgroundColor = "grey";
        startButton.textContent = "Start Game";
        startButton.style.display = "block";
        alert(`Game Over! Your score: ${score}`);
    }
    
    const apiKey = '875fd6993256d0944392801a45582d62'; // Korvaa API-avaimella

    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Oulu&appid=${apiKey}&units=metric`
        );
    
        if (!response.ok) {
          throw new Error('Säädatan hakeminen epäonnistui');
        }
    
        const data = await response.json();
    
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const windSpeed = data.wind.speed; // Lisätty tuulen nopeuden haku
    
        const temperatureElement = document.getElementById('temperature');
        const descriptionElement = document.getElementById('description');
        const windSpeedElement = document.getElementById('wind-speed'); // Lisätty tuulen nopeuden näyttämiseen
    
        temperatureElement.textContent = `Temperature: ${temperature} °C`;
        descriptionElement.textContent = `Weather: ${weatherDescription}`;
        windSpeedElement.textContent = `Wind Speed: ${windSpeed} m/s`; // Näytetään tuulen nopeus
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchWeatherData();
    

