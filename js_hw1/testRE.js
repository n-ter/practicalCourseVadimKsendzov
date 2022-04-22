let age_2 = 18;
let age_3 = 60;

const checkAge = function (age_1) {
    if (/^\d{1,3}$/.test(age_1)) {
        if (age_1 < age_2) { console.log("You don't have access cause your age is " + age_1 + ". It's less then " + age_2) }
        else if (age_1 >= age_2 && age_1 < age_3) { console.log("Welcome!") }
        else if (age_1 > age_3) { console.log("Keep calm and look Culture channel") }
        else { console.log("Your age is 60") }
    } else { console.log("Error. It's not age") };
};
console.log("------correct values--------");
checkAge(0);
checkAge(18);
checkAge('99');
checkAge(60);

console.log("------ incorrect values--------");
checkAge(-60);
checkAge("99j");
checkAge(true);
checkAge('');
checkAge(1088);