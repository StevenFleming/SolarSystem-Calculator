import { PlanetCalculator} from '../src/solarbackend.js';
import { exportAllDeclaration } from '@babel/types';

describe ("Planets", () => {
    test ('Should calculate Earth Years to Mercury Years', () => {
        let userinput = new PlanetCalculator(1, "Mercury")
        expect (userinput.Mercury(1)).toEqual("4.2");

    })


    test ('Should calculate Earth Years into Venus Years', () => {
        let userinput = new PlanetCalculator(1, "Venus")
        expect (userinput.Venus(1)).toEqual("1.6");
    })

    test ('Should calculate Earth Years into Mars Years', () => {
        let userinput = new PlanetCalculator(1, "Mars")
        expect (userinput.Mars(1)).toEqual("0.53");
    })

    test ('Should calculate Earth Years into Jupiter Years', () => {
        let userinput = new PlanetCalculator(1, "Jupiter")
        expect (userinput.Jupiter(1)).toEqual("0.084");
    })

})

