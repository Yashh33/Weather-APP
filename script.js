const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3e9d7895ecmshab036c976381228p184ec0jsn91d691aa8d3f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

            var table = document.getElementById("myTable")
            var row = table.insertRow(1);
            var cell = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            var cell5 = row.insertCell(5);
            var cell6 = row.insertCell(6);
            var cell7 = row.insertCell(7);
            var cell8 = row.insertCell(8);
            // var cell9 = row.insertCell(9);
            // var cell10 = row.insertCell(10);
            cell.innerHTML = city;
            cell1.innerHTML = response.cloud_pct+"%";
            cell2.innerHTML = response.feels_like+"°C";
            cell3.innerHTML = response.humidity+"%";
            cell4.innerHTML = response.max_temp+"°C";
            cell5.innerHTML = response.min_temp+"°C";
            // cell6.innerHTML = response.sunrise;
            // cell7.innerHTML = response.sunset;
            cell6.innerHTML = response.temp+"°C";
            cell7.innerHTML = response.wind_degrees+"°";
            cell8.innerHTML = response.wind_speed+"km/h";

        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
    // myFunction(city.value)
})

dropdown1.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather("delhi")
})
dropdown2.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather("Ahmedabad")
})
dropdown3.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather("Bengaluru")
})
dropdown4.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather("Mumbai")
})
dropdown5.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather("Kolkata")
})

getWeather("Delhi")

// const myFunction = (city) => {
//     var table = document.getElementById("myTable")
//     var row = table.insertRow(0);
//     var cell = row.insertCell(0);
//     var cell1 = row.insertCell(1);
//     var cell2 = row.insertCell(2);
//     var cell3 = row.insertCell(3);
//     var cell4 = row.insertCell(4);
//     var cell5 = row.insertCell(5);
//     var cell6 = row.insertCell(6);
//     var cell7 = row.insertCell(7);
//     var cell8 = row.insertCell(8);
//     var cell9 = row.insertCell(9);
//     var cell10 = row.insertCell(10);
//     cell.innerHTML = city;
//     cell1.innerHTML = response.cloud_pct;
//     cell2.innerHTML = response.feels_like;
//     cell3.innerHTML = response.humidity;
//     cell4.innerHTML = response.max_temp;
//     cell5.innerHTML = response.min_temp;
//     cell6.innerHTML = response.sunrise;
//     cell7.innerHTML = response.sunset;
//     cell8.innerHTML = response.temp;
//     cell9.innerHTML = response.wind_degrees;
//     cell10.innerHTML = response.wind_speed;
// }

