import { } from '../src/solarbackend.js';
import { exportAllDeclaration } from '@babel/types';

Describe ("Mercury", () => {
    test ('Should calculate Earth Years to Mercury Years', () => {
        expect (function Mercury(1)).toEqual(4.16);

    })
})

