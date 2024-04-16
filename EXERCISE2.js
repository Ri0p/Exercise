// Декларирање на променлива age и иницијализација со вредност 30
const age = 69; // You can change the age to test different scenarios

// Проверка дали возрастот е помеѓу 10 и 17 години (вклучително) и печатење на соодветна порака
if (age >= 10 && age <= 17) {
    console.log("You qualify for Junior membership.");
} 
// Проверка дали возрастот е помеѓу 18 и 64 години (вклучително) и печатење на соодветна порака
else if (age >= 18 && age <= 64) {
    console.log("You qualify for Adult membership.");
} 
// Проверка дали возрастот е поголем или еднаков на 65 години и печатење на соодветна порака
else if (age >= 65) {
    console.log("You qualify for Senior membership.");
} 
// Ако не е исполнета ниту една од претходните услови, печатење на порака за непостоечко членство
else {
    console.log("Sorry, you are not eligible for membership.");
}
