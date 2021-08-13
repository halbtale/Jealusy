const appContent = document.getElementById('app-content');

export const displayElements = (elements) => {
    if (elements.length) {
        appContent.innerHTML = '';
        elements.forEach((element) => {
            if (element) {
                appContent.insertAdjacentHTML('beforeend', `<app-card title="${element.title}" description="${element.description}" imgUrl="${element.imgUrl}"></app-card>`);
            }
        })
    }
}