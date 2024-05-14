const apikey ='8bb23c27bd83b7dce4e1d666cc5a5d5c';
const apiurl ='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
async function checkweather(){
    const response = await fetch(apiurl +city +'&appid=${apikey}');
    var data =await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";
    if(data.weather[0].main =="clouds"){
        
    }
}
  searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})
