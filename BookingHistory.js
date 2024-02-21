var key = Object.keys(localStorage);
var table = document.getElementById("tblHistory");
var date = "2024-01-02";
var date1;
for (let i = 0; i < key.length; i++) {
    var value = localStorage.getItem(key[i]);
    var row = table.insertRow();
    row.insertCell(0).innerHTML = key[i];
    var arr = value.split(",");
    row.insertCell(1).innerHTML = arr[0];
    row.insertCell(2).innerHTML = arr[1];
    row.insertCell(3).innerHTML = arr[2];
    row.insertCell(4).innerHTML = arr[3];
    row.insertCell(5).innerHTML = arr[4];
    date1 = arr[4];
    row.insertCell(6).innerHTML += `<button type="button" onclick="check(${key[i]})" id="cancel${key[i]}">Cancel</button>`;
}

function check(key) {
    var flag = 0; 
    if (new Date(date) < new Date(date1)) {
        flag = 1;
    } else {
        document.getElementById("CM").innerText = "*Cancellation Denied";
    }
    if (flag == 1) {
        alert("are you sure, you want to cancel?")
        localStorage.removeItem(key);
        window.location.reload(true);
    }
}