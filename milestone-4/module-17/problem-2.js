var physicsMark = 35.45;
var mathematicsMark = 75.25;
var biologyMark = 65;
var chemistryMark = 80;
var banglaMark = 99.50;

var totalMarks = (physicsMark + mathematicsMark + biologyMark + chemistryMark + banglaMark);
console.log(totalMarks);

var averageMarks = (totalMarks / 5)
averageMarks = averageMarks.toFixed(2);
averageMarks = parseFloat(averageMarks);

console.log(averageMarks);