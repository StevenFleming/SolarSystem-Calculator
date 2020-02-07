export class PlanetCalculator{

    constructor (age, planet){

    this.age = age;
    this.planet= planet;
    this.lifeExpectency=72;
    }

    Mercury() {
        let marsAge = this.age/(.24);
        return marsAge.toPrecision(2);
    }

    Venus() {
        let venusAge = this.age/(.62);
        return venusAge.toPrecision(2);
    }
    Mars() {
        let marsAge =this.age/(1.88);
        return marsAge.toPrecision(2);
    }
    Jupiter() {
        let jupiterAge =this.age/(11.86);
        return jupiterAge.toPrecision(2);
    }

    jupiterLifeExpectency() {
        const lifeExpectencyJupiter = this.lifeExpectency/(11.86);
        let jupiterAge =this.age/(11.86);
        let jupiterYearsLeft =lifeExpectencyJupiter - jupiterAge
        let textYearsLeft = `You have about ${jupiterYearsLeft.toPrecision(3)} left to live`;
            if (jupiterYearsLeft>=0){
                return textYearsLeft
            } else{
                let jupiterYearsLeft =lifeExpectencyJupiter - jupiterAge
                let jupiterYearsLeftAbsoluteValue = jupiterYearsLeft* (-1)
                let textYearsPast =` You have surpassed Jupiters life expectency by ${jupiterYearsLeftAbsoluteValue.toPrecision(3)}` 
                return textYearsPast
            }
        }
    marsLifeExpectency() {
        const lifeExpectencymars = this.lifeExpectency/(1.88);
        let marsAge =this.age/(1.88);
        let marsYearsLeft =lifeExpectencymars - marsAge;
        let textYearsLeft = `You have about ${marsYearsLeft.toPrecision(3)} left to live`;
            if (marsYearsLeft>=0){
                return textYearsLeft
            } else{
                let marsYearsLeft =lifeExpectencymars - marsAge
                let marsYearsLeftAbsoluteValue = marsYearsLeft* (-1)
                let textYearsPast =` You have surpassed mars life expectency by ${marsYearsLeftAbsoluteValue.toPrecision(3)}` 
                return textYearsPast
            }
        }
    venusLifeExpectency() {
        const lifeExpectencyvenus = this.lifeExpectency/(.62);
        let venusAge =this.age/(.62);
        let venusYearsLeft =lifeExpectencyvenus - venusAge;
        let textYearsLeft = `You have about ${venusYearsLeft.toPrecision(3)} left to live`;
            if (venusYearsLeft>=0){
                return textYearsLeft
            } else if (venusYearsLeft<0){
                let venusYearsLeftAbsoluteValue = venusYearsLeft* (-1)
                let textYearsPast =` You have surpassed venus life expectency by ${venusYearsLeftAbsoluteValue.toPrecision(3)}` 
                return textYearsPast
            }
        }
        
    }



