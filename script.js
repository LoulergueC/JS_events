// Footer clique
var nclique = 1;

document.getElementsByTagName("footer")[0].addEventListener("click", () => {
    console.log("clique n°" + nclique);
    nclique++;
});

// burger menu collapse
document
    .getElementsByClassName("navbar-toggler")[0]
    .addEventListener("click", () => {
        document.getElementById("navbarHeader").classList.toggle("collapse");
    });

// First card edit handle
var firstcard = document.getElementsByClassName("card")[0];

firstcard
    .getElementsByClassName("btn-outline-secondary")[0]
    .addEventListener("click", () => {
        firstcard.style.color = "red";
    });

// Second card edit handle
var secondcard = document.getElementsByClassName("card")[1];

secondcard
    .getElementsByClassName("btn-outline-secondary")[0]
    .addEventListener("click", () => {
        if (secondcard.style.color == "green") {
            secondcard.style.color = "inherit";
        } else {
            secondcard.style.color = "green";
        }
    });
