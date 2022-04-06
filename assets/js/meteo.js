
const apikey = "37b17848af09d28814487d6e4a553bc9",
  lang = "fr";

//let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}`;

// fetch(url)
//     .then(response =>response.json()
//         .then((data) =>{
//             console.log(data)
//             document.querySelector(".ville").innerHTML = data.name
//             document.querySelector(".desc").innerHTML =
//               data.weather[0].description;
//             document.querySelector(".temp").innerHTML = data.main["temp"];

//         }

//             ))
let cities = [
  "Oissery",
  "Orly-sur-Morin",
  "Ormeaux",
  "Ormesson",
  "Othis",
  "Ozoir-la-Ferrière",
  "Ozouer le Repos",
  "Ozouer-le-Voulgis",
];
let temp_icon = {
  nuageux: "fa fa-cloud",
};
//let
    let search = document.querySelector("#search");
    let city = document.querySelector("#city").value;
    let mycity = document.querySelector("#city");
    
    //let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}`;
    


    //weather variables
    let temp = document.querySelector(".temp");
    let tabMaxMin = document.querySelector("#tab-max-min");
    let tabVentDeg = document.querySelector("#tab-vent-deg");
    let tabPression = document.querySelector("#tab-pression");
    let tabVentVitesse = document.querySelector("#tab-vent-vitesse");

    let tabDesc = document.querySelector("#tab-description");
    let tabVisible = document.querySelector("#tab-visiblite");
    let tabRessentie = document.querySelector("#tab-Ressentie");

Callapi("paris")
mycity.addEventListener("change", function () {
    let city = document.querySelector("#city").value;
   console.log(city)
   Callapi(city);
})


//console.log(city)
function Callapi(a) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=37b17848af09d28814487d6e4a553bc9&lang=fr&units=metric`;
  fetch(url).then((answer) =>
    answer.json().then((data) => {
      console.log(data);

      temp.innerHTML = Math.floor(data.main.temp) + "° ";
      //
      tabMaxMin.innerHTML =
        data.main.temp_max + " ° / " + data.main.temp_min + " °";
      tabVentDeg.innerHTML = data.wind.deg + " °";
      tabVentVitesse.innerHTML = data.wind.speed + " km/h";
      tabPression.innerHTML = data.main.pressure + " mb"; //feels_like:visibility
      tabDesc.innerHTML = data.weather[0].description;
      tabRessentie.innerHTML = data.main.feels_like;
      tabVisible.innerHTML = data.visibility + " km/h";
    })
  );
}

function BgChange(desc) {
    let bg = document.querySelector(".meteo")
    //if(desc == "couvert")
   
}
//Callapi(city)

