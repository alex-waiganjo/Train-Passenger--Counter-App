let count = 0; 
function Increment(){     
    count += 1 
    //  same as count = count + 1;
    document.getElementById("count").textContent = count;
}
let previousentry = document.getElementById("previous")
function Save(){  
  
   let countStr = count + " , "
   previousentry.textContent +=  countStr
   document.getElementById("count").innerHTML= 0;
   count = 0
//    console.log(previousentry)  
}

 
/*
let Fullname = "Alex Waiganjo"
let text = "Welcome Back "
document.getElementById("welcome").innerHTML = text + Fullname;


//Exercise
let points = 50;
points = points + 50
console.log(points)

points = points -75 
console.log(points)

points = points + 45 
console.log(points)


// Challenge 
function sum(a,b){
console.log(a+b)
}

sum(288,727)

//Exercise
let laps = 0  /----- When the variable is declared outside the function it increments itself  -----/

function Laps(){
    let laps = 0   /---- When the variable is declared inside the function ,it does not increment---/
    laps= laps+1
    console.log(laps)
}

Laps()
Laps()
Laps()
Laps()
Laps()


//Exercise
let name = "Alex";
let greeting = "Hello there, my name is ";
let message = greeting + name; 
console.log(message)


//Exercise 
let mypoints = 3
function addpoints(){
    mypoints += 3
    console.log(mypoints)
}

addpoints()
addpoints()
addpoints()

function removepoints(){
    mypoints -= 2
    console.log(mypoints)
}

removepoints()
removepoints()


console.log("My points:"+3+3) //string result
*/


