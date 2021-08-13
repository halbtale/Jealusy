const appContent = document.getElementById('app-content');

export const displayElements = (elements) => {
    appContent.innerHTML = '';
    elements.forEach((element) => {
        appContent.insertAdjacentHTML('beforeend', `<app-card title="${element.title}" description="${element.description}" imgUrl="${element.imgUrl}"></app-card>`);
    })
}