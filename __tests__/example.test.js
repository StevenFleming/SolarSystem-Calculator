import { PlanetCalculator} from '../src/solarbackend.js';
import { exportAllDeclaration } from '@babel/types';

describe ("Mercury", () => {
    test ('Should calculate Earth Years to Mercury Years', () => {
        let userinput = new PlanetCalculator(1, "Mercury")
        expect (userinput.Mercury(1)).toEqual("4.2");

    })

describe ("Venus", () =>{
    test ('Should clculate Earth Years into Venus Years', () => {
        let userinput = new PlanetCalculator(1, "Venus")
        expect (userinput.Venus(1)).toEqual("1.61");
    })

})
})

