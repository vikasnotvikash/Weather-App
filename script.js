const apiKey = "241ab4919d5b2762ddab1c373f76a45d"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function weatherchecker(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "images/mist.png"
        }
        else if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "images/rain.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}


searchbtn.addEventListener("click", function () {
    weatherchecker(searchbox.value);

    gsap.to(".card", {
        height: "95%",
        scrub: 5
    }),

        gsap.to(".weather-icon", {
            transform: "translatey(-5%)",
            opacity: 1,
            delay: 0.3,
            duration: 1.1,
            scrub: 5
        }),

        gsap.to(".temp", {
            transform: "translateX(0%)",
            scrub: 5,
            delay: 0.5,
            duration: 1.1,
            opacity: 1
        }),

        gsap.to(".city", {
            transform: "translateX(0%)",
            scrub: 5,
            delay: 0.5,
            duration: 1.1,
            opacity: 1
        }),

        gsap.to(".col", {
            scale: 1,
            delay: 1.2,
            duration: 1.1,
            scrub: 5,
            opacity: 1
        })
})


 