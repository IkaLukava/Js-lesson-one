
// * input

// var name = window.prompt("what is your name? ");
// var age = window.prompt("how old are you?");
// document.write("Hey" + name + ",how are you today.Do you like being"+age+"years old?");



//* calculator

// var num1 = window.prompt("enter a number");
// var num2 = window.prompt("enter another number")
// // parseInt
// num1 =parseFloat(num1);
// num2 =parseFloat(num2);

// document.write(num1 + num2);

//* functions

// function addition(num1,num2){
//     return num1+num2;
// }
// var addedNumbers=addition(4,100)
// document.write(addedNumbers);

//accessing html element

// var header =document.getElementById("header");
// header.style.color ="red";
// header.style.background ="blue";

// var link = document.getElementById("link");
// link.style="color:red"

// var messages = document.getElementById("messages");
// var textbox = document.getElementById("textbox");
// var button = document.getElementById("button");

// button.addEventListener("click",function(){
//     var newMessage = document.createElement("li");
//     newMessage.innerHTML = textbox.value;
//     messages.appendChild(newMessage);
//     textbox.value= "";
// });
                            //  if statements
// var isMale =true;
// var isTall =true;

// if(isMale && isTall){
//     document.write("you are a tall male");
// }else if(isMale && !isTall){
//     document.write("you are a short male");
// }else if(!isMale && isTall){
//     document.write("you are not male,but you are tall");
// }else{
//     document.write("you are eather not male or not tall or both");
// }

//  function max(nam1,nam2,nam3){
//     if (num1 != num2 && num1 >= num3){
//         return num1;
//     }else if (num2 >= num1 && num2 >=num3){
//         return num2;
//     }else{

//     }
//  }
//  if("phrase"=="phrase"){
//     document.write("True");
//  }\

//  function getDayName(dayNum){
//     var day;

//     switch(dayNum){
//         case 0:
//             day = "Sunday";
//             break;
//         case 1:
//             day = "Monday";
//             break;
//         case 2:
//             day = "Tuesday";
//             break;
//         case 3:
//             day = "Wednsday";
//             break;
//         case 4:
//             day = "Thursday";
//             break;
//         case 5:
//             day = "Friday";
//             break;
//         case 6:
//             day = "Saturday";
//             break;
//             default:
//                 day = "Day doesn't exit,"+dayNum+"isnt a valid number"
//     }
//     return day;
//  }
//  document.write(getDayName(88));


// var person ={
//     name:"Ika",
//     age:17,
//     isMale:true,
//     occupation:"programmer",
//     printName:function(){
//     document.write("<h1>" + this.name + "</h1>");
//     }
// };

// document.write(person.name)

// real world objects


// var myMovie = {
//     title:"the social Network",
//     realeaseYear:"2023",
//     duration:2.0,
//     actors:[
//     {
//         name:"jessie eisenberg",
//         birthday: new Date("October 5,1980"),
//         hometown:"New York,New York"
//     },
//     {
//         name:"Rooney mara",
//         birthday: new Date("april 17 ,1985"),
//         hometown:"New York"
//     },
//     ]
// }

// document.write(myMovie.actors[0].name);

// while loops

//  var i=1;

//  while(i <=10){
//     document.write(i + "</br>");
//     i++;
//  }

// var password

// var password ="wordpass";
// var response;
// var entryCount = 0;
// var entryLimit = 3;
// var error =false;


// while(response != password && !error){
//     if(entryCount<entryLimit){
//     response=window.prompt("Enter password");
//     entryCount++;
// } else {
//     error = true;
// }
// }
// if(error){
//     alert("too many entries!");
// }else{
// alert("you got it!");
// }

// for loops

// var i=0;
// while(i<10){
//     document.write(i+"<br>")
//     i++
// }

// var frends = ["ika","jemala","nika"];
// for(var i=0;i<frends.length;i++){
// document.write(frends[i]+"<br>")
// }

// for(var i = 0; i<10; i++){
//     document.write(i+"<br>")
// }

// building a multiple

// var questions=[
//     {
//         prompt:"what color are apples?\n(a) Red/Green\n\
//         (b)Purple\n(c) Orange",
//         answer:"a"
//     },
//     {
//         prompt:"what color are Bananas?\n(a) Teal\n\
//         (b)Magenta\n(c) Yellow",
//         answer:"c"
//     },
//     {
//         prompt:"what color are strawberries?\n(a) Yellow\n\
//         (b)Red\n(c) Blue",
//         answer:"b"
//     },
// ]
// var score=0;

// for(var i=0;i<questions.length;i++){
//     var response = window.prompt(questions[i].prompt);
//     if(response==questions[i].answer){
//        score++;
//        alert("Correct!");
//     }else{
//         alert("Wrong!");
//     }
// }
// alert("You got"+ score + "/" + questions.length);
 

// Nested loops

// var numberGrid=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [0]
// ];


// for (var i=0; i<numberGrid.length; i++){
//     for(var j=0; j<numberGrid[i].length; j++){
//         document.write(numberGrid[i][j]);
//         document.write("<br>");
//     }
// }

// for each loops

// var books =[]
// var friends=["ikako","Luka","koba"];

// for(var i=0; i<friends.length; i++){
//     document.write(friends[i]+ "<br>")
// }

// timing

// function sayHi(){
//     alert("hi");
// }

// web storage

var textbox = document.getElementById("textbox");
var button = document.getElementById("btn");

button.addEventListener("click",function(){
  localStorage.name=textbox.value;
});
document.write(localStorage.name);