

// let password = document.getElementById("password");
// let strengthBar = document.getElementById("strength");
// let strengthText = document.getElementById("strength-text");
// let feedback = document.getElementById("feedback");

// password.addEventListener("input", checkPassword);

// function togglePassword(){

// let type = password.getAttribute("type");

// if(type === "password"){
// password.setAttribute("type","text");
// }else{
// password.setAttribute("type","password");
// }

// }

// function checkPassword(){

// let value = password.value;
// let score = 0;
// feedback.innerHTML="";

// if(value.length >= 8){
// score++;
// }else{
// addFeedback("At least 8 characters");
// }

// if(/[A-Z]/.test(value)){
// score++;
// }else{
// addFeedback("Add uppercase letter");
// }

// if(/[0-9]/.test(value)){
// score++;
// }else{
// addFeedback("Add number");
// }

// if(/[!@#$%^&*]/.test(value)){
// score++;
// }else{
// addFeedback("Add special character");
// }

// /* strength levels */

// if(score==1){
// updateStrength(25,"red","Weak");
// }
// else if(score==2){
// updateStrength(50,"orange","Medium");
// }
// else if(score==3){
// updateStrength(75,"yellow","Good");
// }
// else if(score==4){
// updateStrength(100,"limegreen","Strong");
// }else{
// updateStrength(0,"transparent","");
// }

// }

// function updateStrength(width,color,text){

// strengthBar.style.width = width+"%";
// strengthBar.style.background = color;
// strengthText.innerText = text;

// }

// function addFeedback(msg){

// let li = document.createElement("li");
// li.innerText = msg;
// feedback.appendChild(li);

// }

// /* password generator */

// function generatePassword(){

// let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

// let pass="";

// for(let i=0;i<12;i++){

// pass += chars[Math.floor(Math.random()*chars.length)];

// }

// password.value = pass;

// checkPassword();

// }




let password = document.getElementById("password");
let strengthBar = document.getElementById("strength");
let strengthText = document.getElementById("strength-text");
let crackTime = document.getElementById("crack-time");
let feedback = document.getElementById("feedback");

password.addEventListener("input", checkPassword);

function togglePassword(){

let type = password.getAttribute("type");

if(type === "password"){
password.setAttribute("type","text");
}else{
password.setAttribute("type","password");
}

}

function checkPassword(){

let value = password.value;
let score = 0;

feedback.innerHTML="";

if(value.length >= 8){
score++;
}else{
addFeedback("Minimum 8 characters required");
}

if(/[A-Z]/.test(value)){
score++;
}else{
addFeedback("Add uppercase letter");
}

if(/[0-9]/.test(value)){
score++;
}else{
addFeedback("Add number");
}

if(/[!@#$%^&*]/.test(value)){
score++;
}else{
addFeedback("Add special symbol");
}

if(score==1){
updateStrength(25,"red","Weak");
}
else if(score==2){
updateStrength(50,"orange","Medium");
}
else if(score==3){
updateStrength(75,"yellow","Good");
}
else if(score==4){
updateStrength(100,"limegreen","Strong");
}else{
updateStrength(0,"transparent","");
}

estimateCrackTime(value);

}

function updateStrength(width,color,text){

strengthBar.style.width = width+"%";
strengthBar.style.background = color;

strengthText.innerText = "Strength: " + text;

}

function addFeedback(msg){

let li = document.createElement("li");
li.innerText = msg;
feedback.appendChild(li);

}

function estimateCrackTime(pass){

let length = pass.length;

if(length == 0){
crackTime.innerText="";
return;
}

let guesses = Math.pow(94,length);

let seconds = guesses / 1000000000;

let years = seconds / 31536000;

if(years > 1000){
crackTime.innerText = "⏳ Crack Time: Thousands of years";
}
else if(years > 1){
crackTime.innerText = "⏳ Crack Time: " + Math.round(years) + " years";
}
else if(seconds > 60){
crackTime.innerText = "⏳ Crack Time: " + Math.round(seconds/60) + " minutes";
}
else{
crackTime.innerText = "⏳ Crack Time: Seconds";
}

}

function generatePassword(){

let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

let pass="";

for(let i=0;i<12;i++){

pass+=chars[Math.floor(Math.random()*chars.length)];

}

password.value=pass;

checkPassword();

}

function copyPassword(){

let pass=document.getElementById("password");

if(pass.value===""){
alert("No password to copy!");
return;
}

navigator.clipboard.writeText(pass.value);

alert("Password copied!");

}