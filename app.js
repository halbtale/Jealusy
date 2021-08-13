import { AppStorage } from './modules/appstorage.js';
import {displayElements} from './modules/apprendering.js'
import { appData } from './modules/appdata.js';

const appStorage = new AppStorage();

const addButton = document.getElementById('add-button');
const appTextField = document.getElementById('app-text-field');

function appInit() {
    displayElements(appStorage.elements);
}

addButton.addEventListener('click', () => {
    const code = appTextField.value;
    if (code && appData.has(code)) {
        appStorage.addCode(code);
        displayElements(appStorage.elements);
    } else {
        alert('Invalid code');
    }
});

appInit();