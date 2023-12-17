function speedDetector(speed) {
    //a function named speedDetector and give it an argument of speed
        if (speed < 70) {
        //an if statement with a condition if the speed argument is less than 70
            console.log("Ok");
            //logs "Ok" to the console if true
        } else if (speed > 70 && speed < 135) {
        // an else if statement if the speed argument is greater than 70 and less than 135
            console.log("Points: " + Math.floor((speed - 70)/5));
            //logs "Points: " plus the rounded down difference between speed and 70 after being divided by 5 if true
        } else {
        //an else statement for any value equal to or aove 135
            console.log("License suspended");
            //logs "License suspended if true"
        }
}

speedDetector(134);
//logs Points: 12 when run