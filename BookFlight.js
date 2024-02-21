var json = {
    "destinations": [
        {
            "id": 1,
            "name": "City B"
        },
        {
            "id": 2,
            "name": "City D"
        },
        {
            "id": 3,
            "name": "City F"
        },
        {
            "id": 4,
            "name": "City M"
        },
        {
            "id": 5,
            "name": "City P"
        }
    ],
    "sources": [
        {
            "id": 1,
            "name": "City A"
        },
        {
            "id": 2,
            "name": "City C"
        },
        {
            "id": 3,
            "name": "City E"
        },
        {
            "id": 4,
            "name": "City T"
        },
        {
            "id": 5,
            "name": "City U"
        },
        {
            "id": 6,
            "name": "City K"
        }
    ],
    "flights": [
        {
            "flightID": 1,
            "name": "Flight 1",
            "price": 300,
            "sourceID": 1,
            "destinationID": 2,
            "departureDate": "2023-12-15"
        },
        {
            "flightID": 2,
            "name": "Flight 2",
            "price": 250,
            "sourceID": 3,
            "destinationID": 4,
            "departureDate": "2023-12-18"
        },
        {
            "flightID": 3,
            "name": "Flight 3",
            "price": 400,
            "sourceID": 5,
            "destinationID": 6,
            "departureDate": "2023-12-20"
        },
        {
            "flightID": 4,
            "name": "Flight 4",
            "price": 350,
            "sourceID": 2,
            "destinationID": 1,
            "departureDate": "2023-12-22"
        },
        {
            "flightID": 5,
            "name": "Flight 5",
            "price": 280,
            "sourceID": 4,
            "destinationID": 3,
            "departureDate": "2023-12-25"
        },
        {
            "flightID": 6,
            "name": "Flight 6",
            "price": 420,
            "sourceID": 6,
            "destinationID": 5,
            "departureDate": "2023-12-28"
        },
        {
            "flightID": 7,
            "name": "Flight 7",
            "price": 320,
            "sourceID": 1,
            "destinationID": 3,
            "departureDate": "2023-12-30"
        },
        {
            "flightID": 8,
            "name": "Flight 8",
            "price": 260,
            "sourceID": 3,
            "destinationID": 5,
            "departureDate": "2024-01-02"
        },
        {
            "flightID": 9,
            "name": "Flight 9",
            "price": 380,
            "sourceID": 5,
            "destinationID": 1,
            "departureDate": "2024-01-05"
        },
        {
            "flightID": 10,
            "name": "Flight 10",
            "price": 310,
            "sourceID": 2,
            "destinationID": 4,
            "departureDate": "2024-01-08"
        }
    ]
 };

const parseURL = new URL(window.location.href);
const id = parseURL.searchParams.get("id");

var table = document.getElementById("bookingTable");
document.getElementById("flightName").innerHTML = json.flights[id-1].name;
document.getElementById("price").innerHTML = json.flights[id-1].price;
var tax = document.getElementById("tax");
var total = document.getElementById("total");
var totalPrice = 0;
function price(){
    var Qty = document.getElementById("Qty").value;
    if(!(Number(Qty) <= 0 || Number(Qty) > 10)){
        var no = document.getElementById("Qty").value;
        var num = (Number(no)*Number(json.flights[id-1].price)/10)
        tax.innerHTML = num;
        total.innerHTML = Number(num) + Number(json.flights[id-1].price);
        totalPrice += Number(num) + Number(json.flights[id-1].price); 
    }
}

var flag = 0;
var flag1 = 0
function validation(){
    if (flag == 0 || flag1 == 0) {
        var name1 = document.getElementById("Name");
        var Qty = document.getElementById("Qty").value;
        if (name1.value == "") {
            document.getElementById("ErrorName").innerHTML = "*Name can not be blank";
        } else if (name1.value.length < 4){
            document.getElementById("ErrorName").innerHTML = "*Minimum 4 characters required";
        } else {
            document.getElementById("ErrorName").innerHTML = "";
            flag = 1;
        }

        if (Qty == "") {
            document.getElementById("ErrorQty").innerHTML = "*Price can not be blank";
        } else if (Number(Qty) <= 0 || Number(Qty) > 10) {
            document.getElementById("ErrorQty").innerHTML = "*MIN/MAX values are not followed for number of persons";
        } else {
            document.getElementById("ErrorQty").innerHTML = "";
            flag1 = 1;
        }
    } 
    if (flag == 1 && flag1 == 1) {
        let x = Math.floor((Math.random() * 1000000) + 1);
        localStorage.setItem(x, [json.flights[id-1].name, totalPrice, Qty, "2024-01-02", json.flights[id].departureDate]);
        location.replace("BookingHistory.html");
    }
}