import { http } from './http.js';
import { ui } from './ui.js';

document.addEventListener('DOMContentLoaded', getPosts);

document.querySelector('.post-submit').addEventListener('click', submitPost);

function getPosts() {
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(error => console.error(error))
}

function submitPost() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value; 
    
    const data = {
        title,
        body
    }

    http.post('http://localhost:3000/posts', data)
        .then(data => {
            ui.showAlert('Post added!', 'alert success');
            ui.showFields();
            getPosts();
        })
        .catch(error => console.error(error));
}
