/*function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}*/

const json = require('./data.json');

var json2 = [
    {
        id: 1,
        name: "Item 1"
    }, 
    {
        id: 3,
        name: "Item 3"
    }, 
    {
        id: 2,
        name: "Item 2",
    }, 
    {
        id: 4,
        name: "Item 4"
    }
]

function sortAndPrint(json) {
    json.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    for(var i = 0; i < json.length; i++) {
        var obj = json[i];

        console.log(obj.id);
        console.log("\t", obj.name) ;
    }
}

sortAndPrint(json2);