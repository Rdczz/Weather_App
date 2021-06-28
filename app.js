const api = {
    key: "96ac691d87bd7e4e064ffc9ee928ddf5",
    base: "https://api.openweathermap.org/data/2.5/"
}

function result(query) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=metric&appid=b739d23c5b442dc2f494c8a0c78af77f", true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            console.log(data);
            document.getElementById('location').innerHTML = data.name;
            document.getElementById('temp').innerHTML = data.main.temp;
            document.getElementById('weather').innerHTML = data.weather[0].description;
            document.getElementById('max').innerHTML = data.main.pressure;

        } else {
            alert("Enter a valid City name");
        }
    }
    request.send();
}

function fetch() {
    var city = document.getElementById('search').value;
    result(city);
}


// If user hit Enter to get results
const searchbox = document.querySelector('.searchbox');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        fetch();
    }
}
