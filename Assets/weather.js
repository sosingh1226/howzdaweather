var checkWeather = document.querySelector("#checkweather");

checkWeather.addEventListener("click", function (event) {
    event.preventDefault();
    var city = document.querySelector("#cityname").value;
	// console.log (city)
	weatherBalloon(city);
	

	
	// localStorage.setItem(city, city);

	for (x in localStorage){
		console.log(localStorage.getItem(x));
		//console.log(x);
	}
})


// var submit_temp = document.querySelector('#submit_temp')
// var place = document.querySelector("#cname")

// submit_temp.addEventListener('click', function(){
// 	event.preventDefault();
// 	// var input = document.querySelector('.input_text');
// 	console.log("inside click event listener....")
// 	// var input = document.querySelector('#cname');
// 	// var input = document.getElementById('.cname');
// 	console.log(place)

// 	console.log("rrrrrrrrr");
// 	// weatherBalloon(input);
// })

function weatherBalloon( cityname ) {

	// console.log(cityname)
	var key = '37784d28cc099b99cb68d22e1e5ae94f';
	// fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
	// fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityname+ '&appid=' + key)  

	fetch('https://api.openweathermap.org/data/2.5/forecast?q='+cityname+'&appid=' + key)

	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		// console.log(data)
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
	// var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.list[i].main.temp)-273.15)*1.8)+32); 
	
	// console.log(fahrenheit)

	// document.getElementById('description').innerHTML = d.weather[0].description;
	// document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('city').innerHTML = d.city.name;
	localStorage.setItem(d.city.name, d.city.name);
	// document.getElementById('description'+0).innerHTML = d.list[i].weather[0].description;
	document.getElementById('description'+i).innerHTML = d.list[i].weather[0].description;
	document.getElementById('date'+i).innerHTML = d.list[i].dt_txt;
	document.getElementById('temp'+i).innerHTML = fahrenheit + ' &#176;F';
	document.getElementById('humidity'+i).innerHTML = d.list[i].main.humidity + '%';

	let locationIcon = document.querySelector('.weather-icon'+i);
	// icn = d.list[i].weather[0].icon;
	locationIcon.innerHTML = '<img src=./Assets/icons/' + d.list[i].weather[0].icon + '.png>';

}



window.onload = function() {
// weatherBalloon( 6167865 );
weatherBalloon( 'Boston' );

for (x in localStorage){
	// console.log(localStorage.getItem(x));
	citynamefromstorage = localStorage.getItem(x)
	if (citynamefromstorage  != null){
		add_row_to_table(citynamefromstorage);
	}
}

}

function add_row_to_table(x) {
	var table = document.getElementById("myTable");
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	cell1.innerHTML = x;
  }
