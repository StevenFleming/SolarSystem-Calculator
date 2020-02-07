export class PlanetCalculator{

    constructor (age, planet){

    this.age = age;
    this.planet= planet;
    this.planetcount=0;
    }

    Mercury() {
        var marsage = this.age/(.24);
        return marsage.toPrecision(2);
    }
}

//     Venus() {
//         var venusage = this.age/()
//     }
// }


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