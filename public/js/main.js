const submitBtn = document.getElementById("submitBtn");
const cityname =document.getElementById("cityname");
const city_name=document.getElementById("city_name");
const temp_status=document.getElementById("temp_status");
const temp=document.getElementById("temp");
const datahide=document.querySelector(".middle_layer");
const degree=document.getElementById("degree");
const day=document.getElementById("day");
const today_data=document.getElementById("today_data");


const getInfo= async(event)=>{
  event.preventDefault();
  let city=cityname.value;
  if(city===""){
    city_name.innerHTML=`please write the name before search`;
    datahide.classList.add("data_hide");

  }
  else{
    try{
      let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=349c6aa2476cb16f5ee965d90de82e80`;
      const response= await  fetch(url);
      const data= await response.json();
      const arrd=[data];
      degree.innerText=`${arrd[0].main.temp}`;
      city_name.innerText=`${arrd[0].name },${arrd[0].sys.country}`;
      const tem=arrd[0].weather[0].main;
      console.log(tem.toString());
      if(tem.toString() =="Clear")
      {
        console.log(tem.toString());
        temp_status.innerHTML="<i class='fas fa-sun' style='color: yellow;'></i>";
      }
      else if (tem.toString() =="Rainy")
      {
        console.log(tem.toString());
        temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: blue;'></i>";
      }
      else if (tem.toString() =="Clouds")
      {
        console.log(tem.toString());
        temp_status.innerHTML="<i class='fas fa-cloud' style='color: white;'></i>";
      }
      else
      {
        console.log("haze hai re");
        temp_status.innerHTML="<i class='fas fa-smog' style='color: white;'></i>";
      }
      datahide.classList.remove("data_hide");

    }
    catch(err){
      city_name.innerHTML=`please enter the city name properly`;
      datahide.classList.add("data_hide");
    }

  }
}
const gcd=()=>{
  var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let ct=new Date();
  var day= weekday[ct.getDay()];
  return day;
    
}
day.innerText=gcd();

const gct=()=>{
  var cut=new Date();
  var date=cut.getDate();
  var year=cut.getFullYear();
  var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
  var mon=month[cut.getMonth()];
  
    let hours=cut.getHours();
    let min=cut.getMinutes();
    let p="AM";
    if(hours>11){
      p="PM";
      if(hours>12)hours-=12;
    }
    return ( `${mon},${date} | ${hours}:${min}${p}`);
}

today_data.innerText=gct();




submitBtn.addEventListener("click",getInfo);