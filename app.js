function calc() {
    let i = 0;
    let sum = 0;
    let number = document.querySelector("#number");
    while (i < number.value) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum = sum + i;
        }
        i++;
    }
    alert('A soma dos números é: ' + sum);
}