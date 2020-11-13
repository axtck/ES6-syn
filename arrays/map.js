// Covering array.prototype.map();

const generateRandomGrade = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pumpGrades = () => {
    const normalGrades = [];
    for (let i = 0; i < 5; i++) {
        normalGrades.push(generateRandomGrade(50, 100));
    }

    const pumpedGrades = normalGrades.map((x) => x < 91 ? x + 10 : x);
    return {normalGrades, pumpedGrades};

}

const grades = pumpGrades();
console.log(`Old grades: ${grades.normalGrades}.\nPumped grades: ${grades.pumpedGrades}.`);