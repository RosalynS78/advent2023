// max of 6 blue 2 green 4 red = 6*2*4 = 48 power - game 1 then add them all up

import fs from 'fs';

function partTwo(file) {
    const lines = fs.readFileSync(file, "utf-8").trim().split('\r\n');
    //take off \r - test
    return lines.map((line) => {
        const maxCount = {
            red: 0,
            green: 0,
            blue: 0,
        };

         line

            .split(': ')[1]
            .split('; ')

            .forEach((set) => {
                const pulls = set.split(', ');
                return pulls.forEach((pull) => {
                    const [count, color] = pull.split(' ');
                    // if the max for that color is less than the current overwrite it
                    if (maxCount[color] < Number(count)) {
                        maxCount[color] = Number(count);
                    }
                });
            });
            // console.log(maxCount);
            return maxCount.red * maxCount.green * maxCount.blue;
    }).reduce((s, v) => s + v);
}



// console.log(partTwo('./example.txt'));
console.log(partTwo("./input.txt"));
// 66681

