function racePromises(promises) {
    return Promise.race(promises)
        .then(result => console.log("First resolved:", result))
        .catch(error => console.error("First rejected:", error));
}

// Example usage
const promise1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 resolved"), 3000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Promise 2 resolved"), 2000));
const promise3 = new Promise((_, reject) => setTimeout(() => reject("Promise 3 rejected"), 1000));

racePromises([promise1, promise2, promise3]);

