

const baseUrl = "http://jsonplaceholder.typicode.com"

export const getUser = () => fetch(`${baseUrl}/users`);
export const getUsersPost = (id) => fetch(`${baseUrl}/posts?userId=${id}`);
