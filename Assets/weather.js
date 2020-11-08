// declaring variable of the button to check the weather
var checkWeather = document.querySelector("#checkweather");

// adding event listener on click to display city name and call a function
checkWeather.addEventListener("click", function (event) {
    event.preventDefault();
    var city = document.querySelector("#cityname").value;
	weatherBalloon(city);

	// saving into local storage
		
	localStorage.setItem(city, city);
	add_row_to_table(city)
})

// calling function to display particular info from the array of the corresponding API
function weatherBalloon( cityname ) {
	var key = '37784d28cc099b99cb68d22e1e5ae94f';
	fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityname+'&appid=' + key)

	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		// calling array number of every 8th element from the array in order to get to the new date
		drawWeather(data, 0*8); // Call drawWeather
		drawWeather(data, 1*8); // Call drawWeather
		drawWeather(data, 2*8); // Call drawWeather
		drawWeather(data, 3*8); // Call drawWeather
		drawWeather(data, 4*8); // Call drawWeather
	})
	.catch(function() {
		// catch any errors
	});
}	
  
function drawWeather( d , i) {
	// converting into Imperial Units
	// var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.list[i].main.temp)-273.15)*1.8)+32); 
	// console.log(fahrenheit)
	// document.getElementById('description').innerHTML = d.weather[0].description;
	// document.getElementById('temp').innerHTML = celcius + '&deg;';


	// getting real values from the corresponding ID's - city name, description, date, temperature, & humidity
	document.getElementById('city').innerHTML = d.city.name;
	localStorage.setItem(d.city.name, d.city.name);
	// document.getElementById('description'+0).innerHTML = d.list[i].weather[0].description;
	document.getElementById('description'+i).innerHTML = d.list[i].weather[0].description;
	document.getElementById('date'+i).innerHTML = d.list[i].dt_txt;
	document.getElementById('temp'+i).innerHTML = fahrenheit + ' &#176;F';
	document.getElementById('humidity'+i).innerHTML = d.list[i].main.humidity + '%';


	// calling out cooresponding icon of the weather & location
	let locationIcon = document.querySelector('.weather-icon'+i);
	// icn = d.list[i].weather[0].icon;
	locationIcon.innerHTML = '<img src=./Assets/icons/' + d.list[i].weather[0].icon + '.png>';
}

// declaring onload function as soon as the page refreshes

window.onload = function() {
	// weatherBalloon( 6167865 );
	// setting my current location, Boston by default on refresh
	weatherBalloon( 'Boston' );


	// fetching the city name from the local storage, saving it and displaying it in the row
	for (x in localStorage){
		citynamefromstorage = localStorage.getItem(x)
		if (citynamefromstorage  != null){
			add_row_to_table(citynamefromstorage);
		}
	}
	addRowHandlers();
}

// displaying the weather details form the history city list

function add_row_to_table(x) {
	var table = document.getElementById("myTable");
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	cell1.innerHTML = x;
}

// fetching the city name from the dynamically generated table on the left
// and the row that the user clicks, run the weather API for the city
function addRowHandlers() {
	var rows = document.getElementById("myTable").rows;
	for (i = 0; i < rows.length; i++) {
		rows[i].onclick = function(){ return function(){
				var id = this.cells[0].innerHTML;
			//    alert("id:" + id);
				weatherBalloon( id );
		};
		}(rows[i]);
	}
}