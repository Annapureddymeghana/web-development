const postTitleInput = document.getElementById('post-title');
const postContentInput = document.getElementById('post-content');
const addPostButton = document.getElementById('add-post');
const blogPostContainer = document.querySelector('.blog-post');

addPostButton.addEventListener('click', () => {
    const postTitle = postTitleInput.value;
    const postContent = postContentInput.value;

    if (postTitle && postContent) {
        const newPost = document.createElement('div');
        newPost.classList.add('blog-post');
        newPost.innerHTML = `
            <h1>${postTitle}</h1>
            <p>${postContent}</p>
        `;
        blogPostContainer.appendChild(newPost);

        postTitleInput.value = '';
        postContentInput.value = '';
    }
});

