import { appData } from './appdata.js';

export class AppStorage {
    codes = []

    constructor() {
        const rawCodes = sessionStorage.getItem('codes');
        if (rawCodes) this.codes = JSON.parse(rawCodes);
    }

    addCode(code) {
        if (this.codes.includes(code)) return;
        this.codes.push(code);
        sessionStorage.setItem('codes', JSON.stringify(this.codes));
    }

    get elements() {
        return this.codes.map(code => {
            return appData.get(code);
        });
    }
};