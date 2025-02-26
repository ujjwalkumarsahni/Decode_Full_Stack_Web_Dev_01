function fetchUserDataAndPosts(userId) {
    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    return fetch(userUrl)
        .then(response => {
            if (!response.ok) throw new Error(`Error fetching user: ${response.status}`);
            return response.json();
        })
        .then(userData => {
            return fetch(postsUrl)
                .then(response => {
                    if (!response.ok) throw new Error(`Error fetching posts: ${response.status}`);
                    return response.json();
                })
                .then(postsData => ({
                    user: userData,
                    posts: postsData
                }));
        })
        .catch(error => console.error("Error:", error));
}

// Usage example
fetchUserDataAndPosts(1).then(data => console.log(data));
