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

// Disable bootstrap by double clicking navbar
var bootstraphref =
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";

document.getElementsByTagName("header")[0].addEventListener("dblclick", () => {
    let linkBootstrap = document.querySelector(
        'link[rel="stylesheet"][href="' + bootstraphref + '"]'
    );

    if (linkBootstrap.disabled == false) {
        linkBootstrap.disabled = true;
    } else {
        linkBootstrap.disabled = false;
    }
});

// Handle all cards view mouseover
var cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.getElementsByClassName("btn-success")[0].addEventListener(
        "mouseover",
        () => {
            card.getElementsByClassName("card-text")[0].classList.toggle(
                "collapse"
            );
            console.log(card);
            let img = card.getElementsByTagName("img")[0];
            if (img.style.width == "20%") {
                img.style.width = "100%";
            } else {
                img.style.width = "20%";
            }
        }
    );
});
