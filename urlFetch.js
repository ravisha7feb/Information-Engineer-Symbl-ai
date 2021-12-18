//using https
function sortAndPrint(json_obj) {
    json_obj.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    for(var i = 0; i < json_obj.length; i++) {
        var obj = json_obj[i];

        console.log(obj.id);
        console.log("\t", obj.name) ;
    }
}
console.log("Fetching data...");
const https = require('https')
const url = "https://www.example.com/get-data";
https.get(url, res => {
let data = '';
res.on('data', chunk => {
    data += chunk;
});
res.on('end', () => {
    data = JSON.parse(data);
    //sortAndPrint(data);
    console.log(data);
})
}).on('error', err => {
console.log(err.message);
})


