console.log("Welcome to the Community Portal");

/* PAGE LOAD */

window.onload = () => {
    console.log("Page Loaded Successfully");
};

/* EVENT CLASS */

class Event {

    constructor(name, category, date, location, seats, image) {

        this.name = name;
        this.category = category;
        this.date = date;
        this.location = location;
        this.seats = seats;
        this.image = image;

    }

    checkAvailability() {

        return this.seats > 0;

    }

}

/* EVENTS DATA */

const events = [

    new Event(
        "Music Festival",
        "Music",
        "20 Jun 2026",
        "Salem",
        20,
        "images/music.jpg"
    ),

    new Event(
        "Tech Workshop",
        "Workshop",
        "25 Jun 2026",
        "Trichy",
        15,
        "images/workshop.jpg"
    ),

    new Event(
        "Football Match",
        "Sports",
        "30 Jun 2026",
        "Chennai",
        10,
        "images/sports.jpg"
    ),

    new Event(
        "Food Carnival",
        "Food",
        "05 Jul 2026",
        "Coimbatore",
        30,
        "images/food.jpg"
    )

];

/* DISPLAY EVENTS */

function displayEvents(list) {

    const container =
        document.getElementById("eventContainer");

    container.innerHTML = "";

    list.forEach(event => {

        container.innerHTML += `

        <div class="eventCard">

            <img src="${event.image}"
                 alt="${event.name}">

            <div class="card-content">

                <h3>${event.name}</h3>

                <p>📅 ${event.date}</p>

                <p>📍 ${event.location}</p>

                <p>Category: ${event.category}</p>

                <p>Seats Available: ${event.seats}</p>

                <button onclick="goToRegister('${event.category}')">
                    Register
                </button>

            </div>

        </div>

        `;

    });

}

displayEvents(events);

/* GO TO REGISTER */

function goToRegister(category) {

    const eventType =
        document.getElementById("eventType");

    eventType.value = category;

    sessionStorage.setItem(
        "selectedEvent",
        category
    );

    const fees = {

        Music: "₹500",
        Workshop: "₹700",
        Sports: "₹400",
        Food: "₹300"

    };

    document.getElementById("fee")
        .innerHTML =
        "Event Fee : " + fees[category];

    document.getElementById("register")
        .scrollIntoView({
            behavior: "smooth"
        });

}

/* SEARCH */

document
    .getElementById("searchBox")
    .addEventListener("keyup", function () {

        const search =
            this.value.toLowerCase();

        const filtered =
            events.filter(event =>
                event.name
                    .toLowerCase()
                    .includes(search)
            );

        displayEvents(filtered);

    });

/* FILTER */

document
    .getElementById("categoryFilter")
    .addEventListener("change", function () {

        const category = this.value;

        if (category === "All") {

            displayEvents(events);

        } else {

            const filtered =
                events.filter(event =>
                    event.category === category
                );

            displayEvents(filtered);

        }

    });

/* PHONE VALIDATION */

document
    .getElementById("phone")
    .addEventListener("blur", function () {

        if (this.value.length < 10) {

            alert(
                "Please enter a valid phone number"
            );

        }

    });

/* EVENT FEE */

document
    .getElementById("eventType")
    .addEventListener("change", function () {

        const fees = {

            Music: "₹500",
            Workshop: "₹700",
            Sports: "₹400",
            Food: "₹300"

        };

        document.getElementById("fee")
            .innerHTML =
            "Event Fee : " + fees[this.value];

        localStorage.setItem(
            "eventType",
            this.value
        );

    });

/* CHARACTER COUNT */

document
    .getElementById("feedback")
    .addEventListener("keyup", function () {

        document.getElementById("charCount")
            .innerHTML =
            this.value.length;

    });

/* LOAD SAVED DATA */

window.addEventListener("load", () => {

    const savedEvent =
        localStorage.getItem("eventType");

    if (savedEvent) {

        document.getElementById("eventType")
            .value = savedEvent;

    }

    const selectedEvent =
        sessionStorage.getItem(
            "selectedEvent"
        );

    if (selectedEvent) {

        document.getElementById("eventType")
            .value = selectedEvent;

    }

});

/* FORM SUBMISSION */

document
    .getElementById("eventForm")
    .addEventListener("submit",
        async function (e) {

            e.preventDefault();

            const formData = {

                name:
                    this.name.value,

                email:
                    this.email.value,

                event:
                    document.getElementById(
                        "eventType"
                    ).value

            };

            try {

                const response =
                    await fetch(
                        "https://jsonplaceholder.typicode.com/posts",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json"
                            },

                            body:
                                JSON.stringify(
                                    formData
                                )
                        }
                    );

                await response.json();

                document
                    .getElementById(
                        "outputMsg"
                    )
                    .innerHTML =
                    "✅ Registration Successful";

                this.reset();

            }
            catch (error) {

                document
                    .getElementById(
                        "outputMsg"
                    )
                    .innerHTML =
                    "❌ Registration Failed";

            }

        });

/* VIDEO */

function videoReady() {

    document
        .getElementById("videoMsg")
        .innerHTML =
        "Video Ready To Play";

}

/* GEOLOCATION */

function findLocation() {

    if (navigator.geolocation) {

        navigator.geolocation
            .getCurrentPosition(

                position => {

                    document
                        .getElementById(
                            "location"
                        )
                        .innerHTML =

                        `
                        Latitude :
                        ${position.coords.latitude}

                        <br><br>

                        Longitude :
                        ${position.coords.longitude}
                        `;

                },

                error => {

                    alert(
                        "Location Permission Denied"
                    );

                },

                {
                    enableHighAccuracy: true,
                    timeout: 5000
                }

            );

    }

}

/* CLEAR STORAGE */

function clearPreferences() {

    localStorage.clear();

    sessionStorage.clear();

    alert(
        "Preferences Cleared Successfully"
    );

}

/* BEFORE EXIT */

window.onbeforeunload = function () {

    return "Are you sure you want to leave this page?";

};