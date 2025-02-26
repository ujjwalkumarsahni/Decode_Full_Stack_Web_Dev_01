function createCounter() {
    let count = 0; 

    return function() {
        count++;
        console.log(`Button clicked ${count} times`);
    };
}

const counter = createCounter(); 


document.getElementById("counterButton").addEventListener("click", counter);
