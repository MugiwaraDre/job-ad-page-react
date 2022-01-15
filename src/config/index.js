const urls = new Map();

urls.set('localhost', 'http://localhost:5000');
urls.set('job-page.herokuapp.com/', 'https://fastify-course.herokuapp.com/');

export const baseUrl = urls.get(window.location.hostname);
