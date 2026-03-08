// This file contains the JavaScript code that handles the functionality of the meme generator.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('memeForm');
    const memeGallery = document.getElementById('memeGallery');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const topText = document.getElementById('topText').value;
        const bottomText = document.getElementById('bottomText').value;
        const imageUrl = document.getElementById('imageUrl').value;

        if (!topText || !bottomText || !imageUrl) {
            alert('All fields are required!');
            return;
        }

        const memeContainer = document.createElement('div');
        memeContainer.classList.add('meme-container');

        const img = document.createElement('img');
        img.src = imageUrl;

        const topTextDiv = document.createElement('div');
        topTextDiv.classList.add('meme-text', 'top-text');
        topTextDiv.textContent = topText;

        const bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add('meme-text', 'bottom-text');
        bottomTextDiv.textContent = bottomText;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', function() {
            memeContainer.remove();
        });

        memeContainer.appendChild(img);
        memeContainer.appendChild(topTextDiv);
        memeContainer.appendChild(bottomTextDiv);
        memeContainer.appendChild(deleteBtn);

        memeGallery.appendChild(memeContainer);

        form.reset();
        