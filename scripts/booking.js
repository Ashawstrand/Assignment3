/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let totalCost = 0;
let dayCounter = 0;


let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");


let calculatedCost = document.getElementById("calculated-cost");
let fullButton = document.getElementById("full");
let halfButton = document.getElementById("half");
let clearButton = document.getElementById("clear-button");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function ApplyClickedClass() {
    if (!this.classList.contains("clicked")) {
        this.classList.add("clicked");
        dayCounter++;
    }
    else {
        this.classList.remove("clicked");
        dayCounter--;
    }
    calculate();
}

monday.addEventListener("click", ApplyClickedClass);
tuesday.addEventListener("click", ApplyClickedClass);
wednesday.addEventListener("click", ApplyClickedClass);
thursday.addEventListener("click", ApplyClickedClass);
friday.addEventListener("click", ApplyClickedClass);





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


function clearDays() {
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");

    dayCounter = 0;
    calculate();
}

clearButton.addEventListener("click", clearDays);



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDayRate() {
    costPerDay = 20;
    calculate();
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
}

halfButton.addEventListener("click", halfDayRate);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


function fullDayRate() {
    costPerDay = 35;
    calculate();
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
}

fullButton.addEventListener("click", fullDayRate);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function calculate() {
    totalCost = costPerDay * dayCounter;
    calculatedCost.innerHTML = totalCost;
}