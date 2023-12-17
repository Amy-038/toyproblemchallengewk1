## Author
Amy Sirma

# TOY PROBLEM CHALLENGE WEEK 1
## Set-up instructions
If you haven't already fork and clone this reposortory in your own local environment on a folder of your choosing. Enter its directory and type code . to open it in VS Code (this may be a different command if you use a different code editor)



## Student Grade Generator
Challenge 1: Student Grade Generator (Toy Problem)

In studentgrade.js write a function that prompts the user to input student marks.
The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

### Description
- Write a function named studentGradeGenerator and give it a parameter of studentMarks that will taking in numbers between 0 - 100
- Within that function create an if ... else if ... else statement
- For the first if statement give it a condition of studentMarks > 79 and in it's code block let it return "A" (remember the grade is a string) if true
- Next, write an else if statement that will return "B" for 59 to 49 by making a condition of studentMarks <= 60 && >= 79 or studentMarks <= 60 && studentMarks >= 79, if true let it return "B" in it's code block
- Continue with making else if statemtents like that following this pattern:
              C - 59 to 49;
              D - 40 to 49;
- Finally, write an else statement that returns E or instead write another else if statement that returns E for a condition studentMarks < 40
- You can confirm the function works by calling it and passing an argument of a number between 0 and 100 and see if it correspons with the right grade


## Speed Detector
Challenge 2: Speed Detector (Toy Problem)

In speeddetector.js write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

    For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

### Description
- Create a function named speedDetector and give it an argument of speed
- Within it's code block create an if... else if ... else statement
- For if statement, give it a condition of speed < 70, so that if speed is less than 70 the function logs "Ok"
- Create an else if statement and give it a condition of speed is greater than 70 and less than 135. For every 5km/hr the speed is greater then 70, 1 demerit point is logged. Therefore, to get the number of points for an argument do speed - 70, for the difference and divide it by 5 to have (speed - 70)/5
- Since the points only add for every extra 5km/hr, we should round down the values using Math.floor(). Therefore, Math.floor((speed - 70)/5)
- Add the value to a string like so, "Points: " + Math.floor((speed - 70)/5) for the else if to statement log it
- For any points above 12, that is 135km/hr and obove, log "License suspended" using an else statement
- You can call the function with a value to confirm if the function is working properly


## Net Salary Calcualtor
In netsalary.js write a program whose major task is to calculate an individual’s Net Salary by 
getting the inputs of basic salary and benefits.
Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.
https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

### Description
- To calculate taxableSalary, create a function that adds all the relevant benefits to gross salary using information from the linked site.eg. using an if statement, if the tax payer has a disability, mortgage and home ownership saving plans (.ie. all values are true) all the reliefs and benefits should be added to their gross salary and the value returned like so, 
    if (disabled === "true" && mortgage === "true" && homeOwnershipSavings === "true") {
        return grossSalary + 2400 + 5000 + 20000 + 9000 + 25000 + 150000;
    }
- Do that for all the other values and assign the value to taxableSalary
- For tax (or PAYE) using the figures given in the PAYE table in the linked site, use an if ... else if ... else statemnt to correctly assign the corresponding percentage to taxableSalary in a function calculateTax with the parameter of taxableSalary and return the value. eg. 
    if (taxableSalary <= 24000) {
        return 0.1 * taxableSalary;
    }
- Do the same thing to calculate NHIF using function calculateNhif .eg. 
    if (taxableSalary < 6000) {
        return 150
    }
- To get NSSF, create a function that returns 6% of taxableSalary, regardless of it's value
- Net salary will be gotten from subtractiong tax, NHIF and NSSF returned values from taxableSalary, write a function that calls the previous functions within it and uses their return values to subract from taxableSalary
- You can confirm if the program works by assigning some values to variables mortgage, disabled, and homeOwnershipSavings based on the "user" and calling the functions with a defined figure for grossSalary


## Author and license
@ 2023 Amy Sirma MIT License

Copyright (c) 2023 Amy-038

## Technologies
JavaScript

## Contact Information
tel: +254 794 331299
email: sirmaamy@gmail.com


