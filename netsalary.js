let taxableSalary = (grossSalary) => {
    //arrow function taxableSalary with grossSalary as parameter
    if (disabled === "true" && mortgage === "true" && homeOwnershipSavings === "true") {
        return grossSalary + 2400 + 5000 + 20000 + 9000 + 25000 + 150000;
        //if statement that returns a sum of all benefits to grossSalary when parameters disabled, mortgage and homeOwnershipSavings are true
    } else if (disabled === "true" && mortgage === "true" && homeOwnershipSavings === "false") {
        return grossSalary + 2400 + 5000 + 20000 + 9000 + 150000;
        //else if statement that returns a sum of all benefits to grossSalary except homeOwnershipSavings(25000)
    } else if (disabled === "true" && mortgage === "false" && homeOwnershipSavings === "true") {
        return grossSalary + 2400 + 5000 + 20000 + 25000 + 150000;
        //else if statement that excludes mortgage (9000)
    } else if (disabled === "true" && mortgage === "false" && homeOwnershipSavings === "false") {
        return grossSalary + 2400 + 5000 + 20000 + 150000;
        //else if statement that excludes mortgage and homeOwnershipSavings
    } else if (disabled === "false" && mortgage === "true" && homeOwnershipSavings === "true") {
        return grossSalary + 2400 + 5000 + 20000 + 9000 + 25000
        //else if statement that excludes just disabled (150000)
    } else if (disabled === "false" && mortgage === "false" && homeOwnershipSavings === "true") {
        return grossSalary + 2400 + 5000 + 20000 + 25000;
        //else if statement that excludes both disabled and mortgage
    } else if (disabled === "false" && mortgage === "true" && homeOwnershipSavings === "false") {
        return grossSalary + 2400 + 5000 + 20000 + 9000;
        //else if statement that excludes disabled and homeOwnershipSavings
    } else {
        return grossSalary + 2400 + 5000 + 20000;
        //else statement that excludes all the above parameters
    }
}

//function calculateTax that takes in taxableSalary as parameter
function calculateTax (taxableSalary) {
    //uses if ... else if ... else statement to return ccertain percentage of taxableSalary depending on the latter's amount
    if (taxableSalary <= 24000) {
        //returns 10% of taxableSalary if it's less than or equal to 24000
        return 0.1 * taxableSalary;
    } else if (taxableSalary > 24000 && taxableSalary <= 32333) {
        return 0.25 * taxableSalary;
    } else if (taxableSalary > 32333 && taxableSalary <= 500000) {
        return 0.3 * taxableSalary;
    } else if (taxableSalary > 500000 && taxableSalary <= 800000) {
        return 0.325 * taxableSalary;
    } else {
        return 0.35 * taxableSalary;
    }
}

//function calculateNhif that takes in taxableSalary as its parameter
function calculateNhif (taxableSalary) {
    //returns a certain amount using if... else if ... else statement depending on the value of taxableSalary 
    if (taxableSalary < 6000) {
        //returns 150 when taxableSalary is less tahn 6000;
        return 150;
    } else if (taxableSalary < 8000) {
        return 300;
    } else if (taxableSalary < 12000) {
        return 400;
    } else if (taxableSalary < 15000) {
        return 500;
    } else if (taxableSalary < 20000) {
        return 600;
    } else if (taxableSalary < 25000) {
        return 750;
    } else if (taxableSalary < 30000) {
        return 850;
    } else if (taxableSalary < 35000) {
        return 900;
    } else if (taxableSalary < 40000) {
        return 950;
    } else if (taxableSalary < 45000) {
        return 1000;
    } else if (taxableSalary < 50000) {
        return 1100;
    } else if (taxableSalary < 60000) {
        return 1200;
    } else if (taxableSalary < 70000) {
        return 1300;
    } else if (taxableSalary < 80000) {
        return 1400;
    } else if (taxableSalary < 90000) {
        return 1500;
    } else if (taxableSalary < 100000) {
        return 1600;
    } else {
        return 1700;
    }
}

//function calculateNssf that has taxableSalary as its parameter
function calculateNssf (taxableSalary) {
    //returns 6% of taxableSalary
    return 0.06 * taxableSalary;
}

//function netSalary that takes in taxableSalary as its parameter
function netSalary(taxableSalary) {
    //calls function calculateTax(), calculateNhif() and calculateNssf() with their parameters taxableSalary
    return taxableSalary - (calculateTax(taxableSalary) + calculateNhif(taxableSalary) + calculateNssf(taxableSalary));
    //returns the result of subtracting the return values of the functions from taxableSalary
}

//to confirm that function is working assign true or false values to disabled, mortgage and homeOwnershipSavings
const disabled = false;

const mortgage = true;

const homeOwnershipSavings = true;

//logs the result of calling taxableSalary within netSalary that has 100300 passed as its argument for grossSalary
console.log(netSalary(taxableSalary(100300)));
//=> 80028