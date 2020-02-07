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
        let textYearsPast =` You have surpassed Jupiters life expetency by ${jupiterYearsLeft.toPrecision(3)} `
            if (jupiterYearsLeft>0){
                return textYearsLeft
            }else{
               jupiterYearsLeft* (-1)
                return textYearsPast
            }
        // return jupiterAge.toPrecision(2);
        }

    }




// // Constructor for User
//    function User (age, planet){

//     this.age = age;
//     this.planet= planet;
//     this.planetcount=0;
//     }

//     Mercury() {
//         var marsage = this.age/(.24);
//         return marsage;
//     }
// }