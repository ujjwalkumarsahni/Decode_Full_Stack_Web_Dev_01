function randomNumberGenerator() {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
}

function printWithInterval() {
    randomNumberGenerator();
    setInterval(randomNumberGenerator, 2000);
}

printWithInterval();
