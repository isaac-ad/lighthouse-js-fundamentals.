let whichSchool = function (age) {
if (age < 13) {
    console.log("Elmentary School")
}
else if (age <=13 && age <= 18) {
console.log("Secondary School")
}
else { 
  console.log("Lighthouse labs") 
}
};
whichSchool(35)
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));