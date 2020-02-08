import { PlanetCalculator} from '../src/solarbackend.js';
import { exportAllDeclaration } from '@babel/types';

describe ("Planets", () => {
    test ('Should calculate Earth Years to Mercury Years', () => {
        let userinput = new PlanetCalculator(1)
        expect (userinput.Mercury()).toEqual("4.2");
    })

    test ('Should calculate Earth Years into Venus Years', () => {
        let userinput = new PlanetCalculator(1)
        expect (userinput.Venus()).toEqual("1.6");
    })

    test ('Should calculate Earth Years into Mars Years', () => {
        let userinput = new PlanetCalculator(1)
        expect (userinput.Mars()).toEqual("0.53");
    })

    test ('Should calculate Earth Years into Jupiter Years', () => {
        let userinput = new PlanetCalculator(1)
        expect (userinput.Jupiter()).toEqual("0.084");
    })
})

    describe ("Life Expectency", () => {
        test ('should return text string telling user how many mercury years they have left to live', () => {
            let userinput = new PlanetCalculator(20)
            expect (userinput.mercuryLifeExpectency()).toEqual("You have about 217 years left to live")
        })

        test ('should return text string telling user how many jupiter years past life expectency they have lived', () => {
            let userinput = new PlanetCalculator(73)
            expect (userinput.jupiterLifeExpectency()).toEqual(` You have surpassed Jupiters life expectency by 0.0843 years`)
        })

        test ('should return text string telling user how many mars years past life expectency they have lived', () => {
            let userinput = new PlanetCalculator(71)
            expect (userinput.marsLifeExpectency()).toEqual("You have about 0.532 years left to live")
        })

        test ('should return text string telling user how many venus years past life expectency they have lived', () => {
            let userinput = new PlanetCalculator(71)
            expect (userinput.venusLifeExpectency()).toEqual( `You have about 1.61 years left to live`)
        })

    })





