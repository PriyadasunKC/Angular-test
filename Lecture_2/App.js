// Example code for tight coupling with html code and low Cohesion (fully depend on each other)


var student = {
    name: "",
    type: "student"
};


// Every time press a key in the text box need to fire keyup function
function contentLoaded(event) {
    document.getElementById('nameId').addEventListener("keyup", keyup);
}

// keyup function calls the calculateNumericOutput function
function keyup(event) {
    calculateNumericOutput();
}


// calculateNumericOutput  reads the values of the text box
function calculateNumericOutput() {

    // Inside this function there are 3 functionalities 
    // that are not close to each other 
    // we can put them in to separate function and make the function high cohesion

    student.name = document.getElementById('nameId').value;

    // Loop over string that entered in the text box and takes the ASCII code each of character and add it to variable
    var totalValue = 0;
    for (var i = 0; i < student.name.length; i++) {
        totalValue += student.name.charCodeAt(i);
    }

    var output = "Total Numeric value of name is : " + totalValue;

    // put the values in to the output section of html
    document.getElementById("output1").innerHTML = output;
}


// Fire the entire function when only entire page is loaded
document.addEventListener('DOMContentLoaded', contentLoaded);