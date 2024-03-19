const ages = [19,18,17,15,20,21,23,14,25,26];

// sort the Array
ages.sort((a,b) => a-b);

// find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length-1];

// find the median age
let medianAge;
if(ages.length % 2 == 0){
    const mid1 = ages[Math.floor(ages.length/2)-1];
    const mid2 = ages[Math.floor(ages.length/2)];

    medianAge = (mid1 + mid2) / 2;
}
else{
    medianAge = ages[Math.floor(ages.length/2)];
}


// find the average age
const sumAges = ages.reduce((sum,age) => sum+age,0);
const averageAge = sumAges / ages.length;

// find the range of ages
const ageRange = maxAge - minAge;

// compare (min - average) and (max - average)
const mindiff = Math.abs(minAge - averageAge);
const maxdiff = Math.abs(maxAge - averageAge);

console.log('Sorted Ages : ',ages);
console.log('Min Ages : ',minAge);
console.log('Max Ages : ',maxAge);
console.log('Median Ages : ',medianAge);
console.log('Average Ages : ',averageAge);
console.log('Age range : ',ageRange);
console.log('Min - Average Difference : ',mindiff);
console.log('Max - Average Difference : ',maxdiff);

