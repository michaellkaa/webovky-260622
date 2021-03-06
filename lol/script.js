var root = document.querySelector(':root');

function setColorMode() {
    var elementBody = document.body;
    
    if (localStorage.getItem("colorMode") == "dark") {
        elementBody.classList.add("dark-mode");
    } else {
        elementBody.classList.remove("dark-mode");
    }



};


function changeColorMode () {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("colorMode", "dark");
    } else {
        localStorage.setItem("colorMode", "light");
    }

    console.log(localStorage.getItem("colorMode")); 
};






let logo = document.getElementById('logo');

let darkImageURL = "logo-black_b.png";
let lightImageURL = "logo-white_t.png";

document.getElementById("dark-mode").addEventListener('click', function(event) {
    var element = document.body;

    if (this.innerHTML === "Dark") {
      element.dataset.theme = "dark";
      this.innerHTML = "Light";
    } else {
      element.dataset.theme = "light";
      this.innerHTML = "Dark";
    }
});

console.log(localStorage.getItem("colorMode"));


setColorMode();

