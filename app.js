
//URL de la api
const url = "https://api.nasa.gov/planetary/apod?date=";

//Key personalizada que te da la página
const api_key = "&api_key=ksxRagNHIkxYbf5WHn7m7cJxBnqL3wKwBBysI3go";

//Fecha seleccionada desde el calendario
const dateInput =document.querySelector("#datepicker");

//Evento al cambiar la fecha del calendario
dateInput.addEventListener('change',(e)=>{
  
  e.preventDefault();
  
  fecha=dateInput;
  fetchNASAData();
 })

 //Llamada a la API
const fetchNASAData = async () => {
  try {
    const fecha= dateInput.value;
    const response = await fetch(`${url}${fecha}${api_key}`);
    const data = await response.json();
    console.log("NASA APOD data", data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};


//Desplegando informacion del json
const displayData = (data) => {
  document.getElementById("title").textContent = data.title;
  document.getElementById("date").textContent = data.date;
  document.getElementById("picture").src = data.hdurl;
  document.getElementById("explanation").textContent = data.explanation;
  
  
};

//Inicio llamada API
fetchNASAData()



