
//WEATHER API BY API NINJAS HEADER INFORMATION
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '22845c6d04msh863b4580d4a80e9p1a2e43jsnfd688fa5ed10',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};



//FUNCTION FOR ASYNC FETCH API
const fetching_weather = (city) => {
    final_url = url + city; //creating final url with queryparam for fetching
    fetch (final_url,options)
    .then((response)=>response.json())
    .then((response=>{
    //FETCHING REQUIRED  VARIABLES FROM JSON
    temp.innerHTML = response.temp;
    humidity.innerHTML = response.humidity;
    wind_speed.innerHTML = response.wind_speed;
    }))
    .catch(err=>console.log(err))

}



//FUNCTION TO FETCH VALUES ON SUBMIT CLICK


submit.addEventListener("click",(e)=>{
    e.preventDefault(); //page doesnt keep refreshing
    const input_value = document.getElementById('city_name').value;//getting value from input field
    fetching_weather(input_value);
})
