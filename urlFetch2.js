const fetch = require("node-fetch");
function sortAndPrint(json_obj) {
    json_obj.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    for(var i = 0; i < json_obj.length; i++) {
        var obj = json_obj[i];

        console.log(obj.id);
        console.log("\t", obj.name) ;
    }
}

const getJSON = async url => {
    const response = await fetch(url);
    if(!response.ok) // check if response worked (no 404 errors etc...)
        throw new Error(response.statusText);

    const data = response.json(); // get JSON from the response
    return data; // returns a promise, which resolves to this data value
}

  
console.log("Fetching data...");
getJSON("https://soundcloud.com/oembed?url=http%3A//soundcloud.com/forss/flickermood&format=json").then(data => {
  console.log(data);
  //sortAndPrint(data);
}).catch(error => {
  console.error(error);
});