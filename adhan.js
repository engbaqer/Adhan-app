
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based
const day = currentDate.getDate();

 

const button=document.getElementById("button");

button.onclick=()=>{
  // get city name from user
  const city=document.getElementById("input").value;
console.log(city)
// sent request for API to whit date and city name 
  axios.get(`https://api.aladhan.com/v1/timingsByAddress/${year}-${month}-${day}?address=${city}`)
  .then(function (response) {
    // handle success
    console.log(response);
    console.log(response.data.data.timings) 

    // Fill in the data on the page
const data=`


  <div class="row mt-5">
  <div class="col">
  <h3 >ALFajr</h3> 
  <hr>
  <p >Time:${response.data.data.timings.Fajr}</p>
  </div>
  <div class="col ">
  <h3 >Sunrise</h3> 
  <hr>
  <p >Time:${response.data.data.timings.Sunrise}</p>
  </div>
  <div class="col">
    <h3 >ALDhuhr</h3>
    <hr> 
    <p >Time:${response.data.data.timings.Dhuhr}</p>
    </div>
  <div class="row mt-5">
  <div class="col">
  <h3 >Sunset</h3>
  <hr> 
  <p >Time:${response.data.data.timings.Sunset}</p>
  </div>
  <div class="col">
  <h3 >ALMaghrib</h3> 
  <hr>
  <p >Time:${response.data.data.timings.Maghrib}</p>
  </div>
  <div class="col">
  <h3>Midnight</h3>
  <hr> 
  <p>Time:${response.data.data.timings.Midnight}</p>
  </div>
  </div>`;
document.getElementsByClassName("body_JS")[0].innerHTML=data;
document.getElementsByClassName("info")[0].innerHTML=`<h1 class="city container text-center  mt-5" >${city}</h1> `;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
 // delete  the value of input 
//  const input=document.getElementById("input")
//  input.onclick=()=>{
// input.value=" ";
//  }

