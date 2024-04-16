// Декларирање на променлива destination и иницијализација со вредност "Canada" (можете да ја промените дестинацијата за да тестираш различни сценарија)
const destination = "Canada"; // You can change the destination to test different scenarios

// Проверка дали дестинацијата е "USA" и печатење на соодветна порака
if (destination === "USA") {
    console.log("The shipping cost to USA is $10.");
} 
// Проверка дали дестинацијата е "Canada" и печатење на соодветна порака
else if (destination === "Canada") {
    console.log("The shipping cost to Canada is $15.");
} 
// Проверка дали дестинацијата е "UK" и печатење на соодветна порака
else if (destination === "UK") {
    console.log("The shipping cost to UK is $20.");
} 
// Ако не е исполнета ниту една од претходните услови, дестинацијата не е достапна и печатење на порака за тоа
else {
    console.log("Shipping to this destination is not available.");
}
