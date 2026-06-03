window.onload=function(){

let saved=localStorage.getItem("eventType");

if(saved){

document.getElementById("eventType").value=saved;

}

};

function validatePhone(){

let phone=document.getElementById("phone").value;

if(phone.length!=10){

document.getElementById("phoneMsg").innerHTML=
"Enter Valid Phone Number";

}
else{

document.getElementById("phoneMsg").innerHTML=
"Valid Phone Number";

}

}

function showFee(){

let fee=document.getElementById("eventType").value;

document.getElementById("fee").innerHTML=
"Event Fee : ₹"+fee;

localStorage.setItem("eventType",fee);

}

function countCharacters(){

let text=document.getElementById("feedback").value;

document.getElementById("count").innerHTML=
text.length;

}

function submitForm(){

let name=document.getElementById("name").value;

if(name==""){

alert("Enter Name");

return;

}

document.getElementById("result").innerHTML=
"Registration Successful";

console.log("User Registered");

}

function registerEvent(){

alert("Event Registration Successful");

}

function videoReady(){

document.getElementById("videoMsg").innerHTML=
"Video Ready To Play";

}

function clearPreferences(){

localStorage.clear();

sessionStorage.clear();

alert("Preferences Cleared");

}

function findLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(

function(position){

document.getElementById("location").innerHTML=

"Latitude : "+position.coords.latitude+

"<br>Longitude : "+position.coords.longitude;

},

function(error){

alert("Location Access Denied");

},

{

enableHighAccuracy:true,

timeout:5000

}

);

}

}

function leavePage(){

return "Are you sure you want to leave?";

}

const events=[

{
name:"Music Festival",
date:"10 June 2026"
},

{
name:"Food Fair",
date:"15 June 2026"
},

{
name:"Sports Meet",
date:"20 June 2026"
}

];

events.forEach(event=>{

console.log(event.name+" - "+event.date);

});