function calculator() {
    // Data capture
    let billAmount = document.getElementById("bill amount").value
    let tipPercent = document.getElementById("tip percent").value
    // Validate input with regex
    let patt = new RegExp("^[0-9]+(\.[0-9]+)?$")
    if(billAmount === "" || tipPercent === "")
        alert("Please fill both fields for tip calculation.")
    else if(!patt.test(billAmount) || !patt.test(tipPercent))
        alert("Invalid input. Please enter only numbers.")
    else{
        billAmount = parseFloat(billAmount)
        tipPercent = parseFloat(tipPercent)
        let tipAmount = billAmount * (tipPercent/100)
        // toFixed keeps 2 decimal points
        document.getElementById("results").style.display = "block"
        document.getElementById("tip amount").innerHTML = "Tip amount: " + tipAmount.toFixed(2) + " $"
        let billTotal = billAmount + tipAmount
        document.getElementById("bill total").innerHTML = "Bill total: " + billTotal.toFixed(2) + " $"
    }

}
