export class PlanetCalculator{

    constructor (age, planet){

    this.age = age;
    this.planet= planet;
    this.planetcount=0;
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