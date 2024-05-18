const student = {
    totalStudent: 321,
    schoolName: "Valo Bangla",
    totalBatch: 12,
    sections: ['A', 'B', "C"],
    teachers: {
        name: "Test",
        qualification: "B.Sc",
    },
    totalStuff: 68,
    branch: 4
};
// console.log(student, typeof(student));
// console.table(student);

// object to string conversion
const stringConvert = JSON.stringify(student);
console.log(stringConvert, typeof(stringConvert));

// string to object conversion
const stringToObject = JSON.parse(stringConvert);
console.log(stringToObject, typeof(stringToObject));