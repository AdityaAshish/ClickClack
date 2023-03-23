var clicks = 0
var autoClickers = 0
var colour = 1;


function colourMode() {
    var body = document.body;

    if (colour = 1){
    body.classList.toggle("dark_mode");
    document.getElementById("colourSwitcher").innerHTML = "Light Mode";
    console.log("Dark mode activated")
    colour = 0;
    } else {
        body.classList.toggle("light_mode");
        document.getElementById("colourSwitcher").innerHTML = "Dark Mode";
        colour = 1;
        console.log("Light mode activated")
    }

  }
  


//Makes autoclickers work by calling AutoclickerJob()
var x = 1
if (x=1) {
    setInterval(AutoclickerJob, 1000)
}

//updates clicks when user clicks the buttotn
function buttonClick() {
    clicks += 1;
    document.getElementById("click_counter").innerHTML = "Clicks = " + clicks;

}
//subtracts twenty clicks if user has purchases an autoclicker
function buyAutoClicker() {
    if (clicks >= 20) {
        autoClickers += 1;
        clicks -= 20;
        console.log("Autoclicker Purchased. There are now " + autoClickers + " autoclicker(s)");
        document.getElementById("click_counter").innerHTML = "Clicks = " + clicks;
        document.getElementById("AutoClickerNum").innerHTML = "Autoclickers= " + autoClickers;


    }
}

//makes autoclickers work
function AutoclickerJob() {
    clicks=clicks+autoClickers/2
    document.getElementById("click_counter").innerHTML = "Clicks = " + clicks;
}



    
        




