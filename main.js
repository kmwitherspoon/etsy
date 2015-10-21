console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("hi");
});
//  question 1

var etsyAvg = [];
etsyAvg = _.map(items, function(item, idx, arr){
   return item.price;
});
var sum = 0;
var etsyPrice = etsyAvg.length;
_.each(etsyAvg, function(item){
  sum += item;
  return sum/etsyPrice;
});

$('#answer1').append(Math.round(sum/etsyPrice));

//question 2

var etsyRange = _.chain(items).filter(function(item){
  return item.price < 18 && item.price > 14;
})
.pluck("title")
.map(function(item){
  return item + "<br>";
}).value();

$('#answer2').append(etsyRange);

// question 3
var curr = items.filter(function(item){
  return item.currency_code === "GBP";
});

var myString = " ";
_.each(curr, function(item){
  myString += item.title + " ; Price: $" + item.price;
});
$('#answer3').append(myString);


// question 4

var etsyMaterials = items.filter(function(item){
 return _.contains(item.materials, "wood");
});

var etsyMatWood = etsyMaterials.map(function(item){
 return [item.title] + "<br>";
});

$('#answer4').append(etsyMatWood);

// question 5
var etsyLotsMaterials =
items.filter(function(item) {
  if(item.materials.length >= 8){
    return true;
  }
})
var myStringMat = etsyLotsMaterials.map(function(item){
  return item.title + ";" + " Number of Materials: " +  item.materials.length + ";" +"<br>" + "Materials: " + item.materials + "<br>";
});


$('#answer5').append(myStringMat);

// question 6
var madeBy = items.filter(function(item){
  return item.who_made === "i_did";
});

var amount = madeBy.length;

$('#answer6').append(amount);
