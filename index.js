function scuberGreetingForFeet(distance){

let rideFare
  
if (distance <= 400) {
    rideFare = "This one is on me!"
} else if (distance >=400 && distance <=2000) {
     rideFare = "That will be twenty bucks."
} else if (distance >=2000 && distance <=2500)  {
    rideFare = "I will gladly take your thirty bucks."
} else if (distance > 2500) {
     rideFare = "No can do."
}


return rideFare
}

function ternaryCheckCity(city) {
  return city === "NYC"? "Ok, sounds good." : "No go."
}


function switchOnCharmFromTip(amount){

let tipGreeting

switch(amount) {
   case "generous":
    tipGreeting = "Thank you so much."
    break

   case "not as generous":
    tipGreeting =  "Thank you."
   break

  default:
    tipGreeting =  "Bye."
    break

}

return tipGreeting

}
