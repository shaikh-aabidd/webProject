// https://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=fb5840d41e8c3e2a6785a5a354c22ee2
const searchBtn = document.getElementById("searchbtn");
const cityInp = document.querySelector("#cityName");
const cityName = document.querySelector("#city_name");
const tempStatus = document.querySelector("#temp_status");
const temp = document.querySelector("#temp");
const dataHide = document.querySelector("#data_hide");
const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

let date = new Date();
let day = date.getDay();
let month = date.getMonth();
let todayDate = date.getDate();
document.getElementById("day").innerText=`${daysInWeek[day]}`;
document.getElementById("today_date").innerText=`${todayDate} ${months[month]}`;


searchBtn.addEventListener("click",async(event)=>{
    event.preventDefault();
    let cityVal = cityInp.value;
    if(cityVal === ""){
        cityName.innerText = "Error : Name is empty";
    }else{
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=fb5840d41e8c3e2a6785a5a354c22ee2`
        try{
            let response = await fetch(url);
            const data = await response.json();
            temp.innerText = Math.floor(data.main.temp)+"°";
            console.log(data.main.temp+"°")
            let tempMod = data.weather[0].main;
            console.log(tempMod)
            cityName.innerText = `${data.name} ${data.sys.country}`;
            dataHide.style.visibility = "visible";

            if(tempMod === "Clear"){
                tempStatus.innerHTML = `<i class="fa-solid fa-sun" style="color:yellow;"></i>`;
            }else if(tempMod === "Smoke" || tempMod === "Mist"){
                tempStatus.innerHTML = `<i class="fa-solid fa-smog" style="color:#ededed;"></i>`; 
            }
            else if(tempMod === "Rain"){
                tempStatus.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`; 
            }
            else{
                tempStatus.innerHTML = `<i class="fa-solid fa-cloud"></i>`; 
            }

            console.log(data.weather[0].main)
        }catch(err){
            cityName.innerText = "City not found !"
            dataHide.style.visibility = "hidden";

        }
    
    }

})


