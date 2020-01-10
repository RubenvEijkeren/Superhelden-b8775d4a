const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
sendRequest();

function requestJSON(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        let response = request.response;
        processResponse(response);
    }
}

function sendRequest() {
    requestJSON(requestUrl);
}

function processResponse(response) {
    console.log(response);
    var table = document.createElement("table");
    table.style = "border: 1px solid black";

    var thead = document.createElement("thead");
    var th = document.createElement("th");
    var tr = document.createElement("tr");
    var trb = document.createElement("tr");
    var arr = ["squadName", "homeTown", "formed", "secretBase", "active"]
    document.body.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(tr);
    for (i in arr){
        var name = arr[i];
        var th = document.createElement("th");
        th.innerText = name;
        tr.appendChild(th);
        var value = response[name];
        var td = document.createElement("td");
        td.style = "border: 1px solid black";
        td.innerText = value;
        trb.appendChild(td);
    }
    table.appendChild(trb);
    memberTable(response["members"]);
}

function memberTable(mem){
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var th = document.createElement("th");
    var td = document.createElement("td");
    var tr = document.createElement("tr");
    var trb = document.createElement("tr");

    table.style = "border: 1px solid black";
    document.body.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(tr);

    var arr = ["name", "age", "SecretIdentity", "powers"]

    for (i in arr){
        if (!isNaN(i)){
            var name = arr[i];
            var th = document.createElement("th");
            th.innerText = name;
            tr.appendChild(th);
        }   
    }
    tr = document.createElement("tr");
    td = document.createElement("td");
    table.appendChild(tr);
    for (i in mem){
        tr = document.createElement("tr");
        console.log(mem[i]);
        for (j in mem[i]){
            td = document.createElement("td");
            td.innerText = mem[i][j];
            tr.appendChild(td);
            table.appendChild(tr);
           console.log(mem[i][j]);
        }
    }
}