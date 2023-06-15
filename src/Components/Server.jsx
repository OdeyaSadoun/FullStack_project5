

const Server = {
  getUsers: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
  },

  getTodos: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    return todos;
  },

  getTodosByUserId: async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    const todos = await response.json();
    return todos;
  },

  getAlbums: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const albums = await response.json();
    return albums;
  },

  getAlbumsByUserId: async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    const albums = await response.json();
    return albums;
  },

  getPosts: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts;
  },

  getPostsByUserId: async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    return posts;
  },

  getCommentsByUserId: async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?userId=${userId}`);
    const comments = await response.json();
    return comments;
  },

  getCommentsByPostId: async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const comments = await response.json();
    return comments;
  },

  getPhotos: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = await response.json();
    return photos;
  },

  getPhotosByAlbumId: async (albumId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    const photos = await response.json();
    return photos;
  }
};

export default Server;
