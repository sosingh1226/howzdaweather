var submit = document.querySelector('.submit')
var input = document.querySelector('.input_text');
// var city = document.querySelector('#city')
var date = document.querySelector('.date')
var icon = document.querySelector('icon')
var temp = document.querySelector('temp')
var humidity = document.querySelector('humidity')
var windspeed = document.querySelector('windspeed')

// var uvindex = document.querySelector('uvindex')

submit.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid=37784d28cc099b99cb68d22e1e5ae94f&units=imperial')

.then(response => response.json())
.then(data => {



  // var inputValue = data['list']['city']['name'];
  // console.log(inputValue)
  console.log(data)
  var objWeather = JSON.parse(data);

  console.log("herrrrrrrr")
  console.log(objWeather)

  // var name = objWeather.city.name;
  // console.log(name)

  // var dateValue = data['list']['dt_txt'];
  // console.log(dateValue)
  // // var icon = data['weather']['icon'];
  // var tempValue = data['list']['main']['temp'];
  // console.log(tempValue)
  // var humidityValue = data['list']['main']['humidity'];
  // console.log(humidityValue)
  // var windspeedValue = data['list']['wind']['speed'];
  // console.log(windspeedValue)

  // input.innerHTML = inputValue;
  // date.innerHTML = dateValue;
  // // icon.innerHTML = iconValue;
  // temp.innerHTML = tempValue;
  // humidity.innerHTML = humidityValue;
  // windspeed.innerHTML = windspeedValue;
  // input.value ="";

  return response.blob();

})


// .catch(err => alert("Wrong city name!"));
  
  })