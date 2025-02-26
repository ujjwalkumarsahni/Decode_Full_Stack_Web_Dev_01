async function fetchData(url) {
    try {
        const response = await fetch(url); // Fetch data from the URL
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Parse JSON response
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Usage example
fetchData("https://jsonplaceholder.typicode.com/todos/1")
    .then(data => console.log(data));
