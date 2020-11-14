/*
Covering Array.prototyp.map().

Parameters:
-callback: 
Function that is called for every element of arr. 
Each time callback executes, the returned value is added to new_array.

When not to use map():
Since map builds a new array, using it when you aren't using the returned array is an anti-pattern; 
use forEach or for-of instead.
*/

const generateRandomGrade = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pumpGrades = () => {
    const normalGrades = [];
    for (let i = 0; i < 5; i++) {
        normalGrades.push(generateRandomGrade(50, 100));
    }

    const pumpedGrades = normalGrades.map((x) => x < 91 ? x + 10 : x);
    return { normalGrades, pumpedGrades };

}

const grades = pumpGrades();
console.log(`Old grades: ${grades.normalGrades}.\nPumped grades: ${grades.pumpedGrades}.`);