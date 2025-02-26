async function fetchMultipleData(urls) {
    try {
        const fetchPromises = urls.map(url => fetch(url).then(response => {
            if (!response.ok) throw new Error(`Error fetching data from ${url}: ${response.status}`);
            return response.json();
        }));

        const data = await Promise.all(fetchPromises);
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}

// Usage example
const userId = 1; // Change userId as needed
const urls = [
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    "https://jsonplaceholder.typicode.com/todos/1"
];

fetchMultipleData(urls).then(data => console.log(data));
