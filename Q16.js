// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer


function seasonCheck(userInput) {
    if (userInput == "September" || "October" || "November") {
        return "the season is Autumn";
    }else if(userInput == "December" || "January" || "February") {
        return "the season is Winter"; 
    }else if(userInput == "March" || "April" || "May") {
        return "the season is Winter"; 
    }else if(userInput == "June" || "July" || "August") {
        return "the season is Winter"; 
    }else{
        return "invalid";
    }
}

console.log(seasonCheck("September"));