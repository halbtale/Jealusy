const addButton = document.getElementById('add-button');

addButton.addEventListener('click', () => {
    sessionStorage.setItem('test', "OK");
});

