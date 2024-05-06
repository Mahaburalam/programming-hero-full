const players = [23, 28, 45, 34, 27, 33];

const playerAge = players.find(n => (n > 25));
console.log(`Show Player Age: ${playerAge}`);

const test = players.find(n => (n > 20));
console.log(test)

const testMore = players.find(n => (n < 20));
console.log(testMore);

/*
    Find method returns based on condition match but show only the first element.
*/