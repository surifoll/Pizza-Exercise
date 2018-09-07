var xhr = new XMLHttpRequest();
let arr = [];
xhr.open('GET', "http://files.olo.com/pizzas.json", true);
xhr.send();
 
xhr.onreadystatechange = processRequest;
 
function processRequest(e) {
 if (xhr.readyState == 4 || xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);

var key = 0;
var respons2 = response.reduce(function(acc, item) {  
  key = key +1;
  acc[key] = acc[key] || [];
  acc[key].push(item);
  return acc;
}, []);
 var groupedByTime = response.groupBy('toppings')
   // console.log(respons2);
      //  console.log(JSON.stringify(respons2));


for(let a in groupedByTime){
 
arr.push({"a":a, "b": groupedByTime[a], "c":groupedByTime[a].length});

}
var result = arr.sort(function(a,b){

if(a.c == b.c) return 0;
return a.c<b.c?1:-1;
});
for(let i = 0; i <20; i++){

console.log(result[i]);
}
    }

}
Array.prototype.groupBy = function(prop) {
  return this.reduce(function(groups, item) {
    const val = item[prop]
    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, [])
}

