export class PlanetCalculator{

    constructor (age){
    this.name = name
    this.age = age;
    this.lifeExpectency=72;
    this.velocity = 35000000; //fastest speed ever reached by humans extrapolated to Km per year

    this.mercuryAge= this.age/(.24);
    this.mercuryLifelifeExpectency = this.lifeExpectency/(.24)
    this.mercurydistance= 48000000; //shortest distance in km
    
    this.venusAge = this.age/(.62);
    this.venusLifelifeExpectency = this.lifeExpectency/(.62);
    this.venusDistance =38000000; //shortest distance in km

    this.marsAge =this.age/(1.88);
    this.marsLifelifeExpectency =this.lifeExpectency/(1.88);
    this.marsDistance =54600000; //shortest distance in km
          
    this.jupiterAge =this.age/(11.86);
    this.jupiterLifeExpectency = this.lifeExpectency/(11.86);
    this.jupiterDistance= 628743036; //shortest distance in km                                               
    }

    yearsToMars() {
        const yearsToMars = (this.marsDistance /this.velocity);
        let marsYearsToMars = yearsToMars/(1.88);
        let textYearsTo = `traveling in a straight line under perfect conditions it would take approximately ${yearsToMars} years to travel to mars. Or ${marsYearsToMars} mars years `
        return textYearsTo
    }

    yearsToMercury() {
        let yearsToMercury = (this.mercuryDistance /this.velocity);
        let mercuryYearsToMercury = yearsToMercury/(.24);
        let textYearsTo = `traveling in a straight line under perfect conditions it would take approximately ${yearsToMercury} years to travel to Mercury. Or ${mercuryYearsToMercury} Mercury years `
        return textYearsTo
    }


    yearsToJupiter() {
        let yearsToJupiter = (this.jupiterDistance /this.velocity);
        let jupiterYearsToJupiter = yearsToJupiter/(11.86);
        let textYearsTo = `traveling in a straight line under perfect conditions it would take approximately ${yearsToJupiter} years to travel to Jupiter. Or ${jupiterYearsToJupiter} Jupiter years `
        return textYearsTo
    }

    yearsToVenus() {
        let yearsToVenus = (this.venusDistance /this.velocity);
        let venusYearsToVenus = yearsToVenus/(.62);
        let textYearsTo = `traveling in a straight line under perfect conditions it would take approximately ${yearsToVenus} years to travel to Venus. Or ${venusYearsToVenus} Venus years `
        return textYearsTo
    }


    mercuryLifeExpectency() {
        let mercuryYearsLeft = this.mercuryLifelifeExpectency - this.mercuryAge
        let textYearsLeft = `You have about ${mercuryYearsLeft.toPrecision(3)} years left to live`;
            if (mercuryYearsLeft>=0){
                return textYearsLeft
            } else{
                let mercuryYearsLeftAbsoluteValue = mercuryYearsLeft* (-1)
                let textYearsPast =` You have surpassed mercury's life expectency by ${mercuryYearsLeftAbsoluteValue.toPrecision(3)} years` 
                return textYearsPast
        }
    }
    venusLifeExpectency() {
        let venusYearsLeft = this.venusLifelifeExpectency - this.venusAge;
            if (venusYearsLeft>=0){
                let textYearsLeft = `You have about ${venusYearsLeft.toPrecision(3)} years left to live`;
                return textYearsLeft
            } else if (venusYearsLeft<0){
                let venusYearsLeftAbsoluteValue = venusYearsLeft* (-1)
                let textYearsPast =` You have surpassed venus life expectency by ${venusYearsLeftAbsoluteValue.toPrecision(3)} years` 
                return textYearsPast
        }
    }
    jupiterLifeLeft() {
        let jupiterYearsLeft =this.jupiterLifeExpectency - this.jupiterAge;
            if (jupiterYearsLeft>=0){
                let textYearsLeft = `You have about ${jupiterYearsLeft.toPrecision(3)} Jupiter years left to live`;
                return textYearsLeft
            } else{
                let jupiterYearsLeftAbsoluteValue = jupiterYearsLeft* (-1)
                let textYearsPast =` You have surpassed Jupiters life expectency by ${jupiterYearsLeftAbsoluteValue.toPrecision(3)} years` 
                return textYearsPast
        }
    }

    marsLifeExpectency() {
        let marsYearsLeft =this.marsLifelifeExpectency - this.marsAge;
            if (marsYearsLeft>=0){
                let textYearsLeft = `You have about ${marsYearsLeft.toPrecision(3)} mars years left to live`;
                return textYearsLeft
            } else{                                               
                let marsYearsLeftAbsoluteValue = marsYearsLeft* (-1)
                let textYearsPast =` You have surpassed mars life expectency by ${marsYearsLeftAbsoluteValue.toPrecision(3)} mars years` 
                return textYearsPast
        }
    }
}



                                                                                                                                                                   