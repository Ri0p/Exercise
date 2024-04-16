// Декларирање на променлива purchaseAmount и иницијализација со вредност 500 (можете да ја промените вредноста за да тестираш различни сценарија)
const purchaseAmount = 50; // You can change the purchase amount to test different scenarios

// Проверка дали вкупниот износ на купување е поголем или еднаков на $100 и печатење на соодветна порака за попуст
if (purchaseAmount >= 100) {
    // Пресметка на износот на попустот (10%)
    const discount = purchaseAmount * 0.1;
    // Печатење на порака за попустот со вкупниот износ и износот на попустот
    console.log(`Congratulations! You are eligible for a 10% discount. Your discount amount is $${discount.toFixed(2)}.`);
} 
// Проверка дали вкупниот износ на купување е поголем или еднаков на $50 и помал од $100 и печатење на соодветна порака за попуст
else if (purchaseAmount >= 50 && purchaseAmount < 100) {
    // Пресметка на износот на попустот (5%)
    const discount = purchaseAmount * 0.05;
    // Печатење на порака за попустот со вкупниот износ и износот на попустот
    console.log(`Congratulations! You are eligible for a 5% discount. Your discount amount is $${discount.toFixed(2)}.`);
} 
// Ако не е исполнета ниту една од претходните услови, купувањето не е соодветно за попуст и печатење на порака за тоа
else {
    console.log("Sorry, you are not eligible for any discount.");
}
