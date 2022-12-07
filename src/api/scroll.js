import axios from "axios";

export const fetchRepositories = async (page) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}`
  );
  return response.json();
};
