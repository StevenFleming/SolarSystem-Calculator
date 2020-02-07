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

describe ("Life Expectency", () => {
    test ('should return text string telling user how many jupiter years they have left to live', () => {
        let userinput = new PlanetCalculator(20, "Jupiter")
        expect (userinput.jupiterLifeExpectency(20)).toEqual(`You have about 4.38 left to live`)
    })
})

describe ("Life Expectency", () => {
    test ('should return text string telling user how many jupiter years past life expectency they have lived', () => {
        let userinput = new PlanetCalculator(73, "Jupiter")
        expect (userinput.jupiterLifeExpectency(73)).toEqual(` You have surpassed Jupiters life expectency by 0.0843`)
    })

})
