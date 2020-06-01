function myFunction() {
    let factor1 = document.getElementById("multiply").value;
    let factor2 = document.getElementById("multiplication").value;
    let sum = 0;
    var counter = 0;
    while (counter < factor2) {
        sum = sum + parseFloat(factor1);
        counter = counter + 1;
    }
    document.getElementById("output").innerHTML = "The answer is " + sum;
    }