import fs from 'fs';
// create map
const maxCount = {
//array that has true or false for each of the pools to say whether or not is a valid game
// 12 red cubes, 13 green cubes, and 14 blue cubes
red: 12,
green: 13,
blue: 14,
};

function partOne(file) {
    const lines = fs.readFileSync(file, "utf-8").trim().split('\r\n');
    return lines.map((line) => {
    // parse this line 
    // Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
    // map it to give individual strings
return line
   
    .split(': ')[1]
    .split('; ')
    // .map((set) => set.split(', '));
    // array that has 3 blue 4 red inside
    .map((set) => {
    const pulls = set.split(', ');
    return pulls.every((pull) => {
        const [count, color] = pull.split(' ');
        // console.log(count, color);
        return maxCount[color] >= Number(count);
      });
    }).every((p) => p);
    //return every play is true
    // console.log(sets);
}).reduce((s, result, i) => {
//reduced, each one that is true take that game number and we have a total sum. reduce the whole thing. total sum. index as the game number. if result is true (i + 1) index is 0 based - we start the whole thing off at 0
return result ? s + (i + 1) : s;
}, 0);
}



// console.log(partOne('./example.txt'));
console.log(partOne("./input.txt"));
//2237