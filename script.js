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

// Handle click on btn ==>
document
    .getElementsByClassName("jumbotron")[0]
    .getElementsByClassName("btn-secondary")[0]
    .addEventListener("click", (e) => {
        // Disable the link
        e.preventDefault();

        var cards = document
            .getElementsByClassName("album")[0]
            .querySelectorAll(".col-md-4:not(.order-last)");

        // If all cards are order-last, remove order-last from all cards
        if (cards.length == 0) {
            document
                .getElementsByClassName("album")[0]
                .querySelectorAll(".col-md-4")
                .forEach((card) => {
                    card.classList.remove("order-last");
                });

            // redefine the var cards to the new list without order-last
            cards = document
                .getElementsByClassName("album")[0]
                .querySelectorAll(".col-md-4:not(.order-last)");
        }

        // Add the class order-last to the first card
        cards[0].classList.add("order-last");
    });

// Handle click on btn <==
document
    .getElementsByClassName("jumbotron")[0]
    .getElementsByClassName("btn-primary")[0]
    .addEventListener("click", (e) => {
        // Disable the link
        e.preventDefault();

        var cards = document
            .getElementsByClassName("album")[0]
            .querySelectorAll(".col-md-4:not(.order-first)");

        // If all cards are order-last, remove order-last from all cards
        if (cards.length == 0) {
            document
                .getElementsByClassName("album")[0]
                .querySelectorAll(".col-md-4")
                .forEach((card) => {
                    card.classList.remove("order-first");
                });

            // redefine the var cards to the new list without order-last
            cards = document
                .getElementsByClassName("album")[0]
                .querySelectorAll(".col-md-4:not(.order-first)");
        }

        // Add the class order-last to the last card
        cards[cards.length - 1].classList.add("order-first");
    });

// Handle keydown on navbar-brand only if the user selected the text
document
    .getElementsByClassName("navbar-brand")[0]
    .addEventListener("keydown", (e) => {
        let body = document.getElementsByTagName("body")[0];

        // Body style reset
        body.classList = "";

        // Prevent default
        e.preventDefault();

        // Handle keypress
        if (e.key == "a") {
            body.classList.add("col-4");
        }
        if (e.key == "y") {
            body.classList.add("col-4");
            body.classList.add("offset-4");
        }
        if (e.key == "p") {
            body.classList.add("col-4");
            body.classList.add("offset-8");
        }
    });
