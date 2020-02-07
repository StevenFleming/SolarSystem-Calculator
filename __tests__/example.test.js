import { } from '../src/solarbackend.js';
import { exportAllDeclaration } from '@babel/types';

describe ("Mercury", () => {
    test ('Should calculate Earth Years to Mercury Years', () => {
        expect (Mercury(1)).toEqual(4.16);

    })
})

