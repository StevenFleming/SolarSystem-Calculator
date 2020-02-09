import { PlanetCalculator} from '../src/solarbackend.js';
import { exportAllDeclaration } from '@babel/types';

describe ("Planets", () => {
    test ('Should calculate Earth Years to Mercury Years', () => {
        let userinput = new PlanetCalculator(1)
        expect (userinput.mercuryAge.toPrecision(2)).toEqual("4.2");
    })

    test ('Should calculate Earth Years into Venus Years', () => {
        let userinput = new PlanetCalculator(1)
        expect (userinput.venusAge.toPrecision(2)).toEqual("1.6");
    })

    test ('Should calculate Earth Years into Mars Years', () => {
        let userinput = new PlanetCalculator(1)
        expect (userinput.marsAge.toPrecision(2)).toEqual("0.53");
    })

    test ('Should calculate Earth Years into Jupiter Years', () => {
        let userinput = new PlanetCalculator(1)
        expect (userinput.jupiterAge.toPrecision(2)).toEqual("0.084");
    })
})

    describe ("Life Expectency", () => {
        test ('should return text string telling user how many mercury years they have left to live', () => {
            let userinput = new PlanetCalculator(20)
            expect (userinput.mercuryLifeExpectency()).toEqual("You have about 217 years left to live")
        })

        test ('should return text telling user they have x number of jupiter years left to live', () =>{
            let user = new PlanetCalculator(1)
            expect (user.jupiterLifeLeft()).toEqual("You have about 5.99 Jupiter years left to live")
        })

        test ('should return text string telling user how many mars years past life expectency they have lived', () => {
            let userinput = new PlanetCalculator(71)
            expect (userinput.marsLifeExpectency()).toEqual("You have about 0.532 mars years left to live")
        })

        test ('should return text string telling user how many venus years past life expectency they have lived', () => {
            let userinput = new PlanetCalculator(73)
            expect (userinput.venusLifeExpectency()).toEqual( " You have surpassed venus life expectency by 1.61 years")
        })

    })

    describe ("Years to Mars", () => {
        test ( "should tell use how many earth years and mars years to travel to mars", () => {
            let userinput =new PlanetCalculator(1)
            expect (userinput.yearsToMars()).toEqual("traveling in a straight line under perfect conditions it would take approximately 1.56 years to travel to mars. Or 0.8297872340425533 mars years ")
        })

        test ( "should tell use how many earth years and mars years to travel to Jupiter", () => {
            let userinput =new PlanetCalculator(1)
            expect (userinput.yearsToJupiter()).toEqual( "traveling in a straight line under perfect conditions it would take approximately 17.96408674285714 years to travel to Jupiter. Or 1.514678477475307 Jupiter years ")
        })
    })




