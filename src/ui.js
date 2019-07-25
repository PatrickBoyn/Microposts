class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.formState = 'add';
    };

    showPosts(posts) {
        let output = '';

        posts.forEach(post => {
            output += `
             <div class="card">
                <div class="card-body">
                    <h4 class="card-title">${post.title}</h4>
                    <p class="card-text">${post.body}</p>
                    <a href="#" class="edit" data-id=${post.id}>Edit Post</a>
                </div>
             </div>
            `;
        });

        this.post.innerHTML = output;
    }
}

export const ui = new UI();
