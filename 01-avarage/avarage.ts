let nums: number[] = [1,2,3,4,5];
let sum:number =0;

for (let index = 0; index < nums.length; index++) {
    sum +=nums[index];
}

let avg:number = sum / nums.length;
console.log(avg);