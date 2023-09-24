let newTitle = document.querySelector('button');
newTitle.innerText = 'not google';
newTitle.style.color='green';
newTitle.addEventListener('click', () => {
    newTitle.style.color = 'blue';
});