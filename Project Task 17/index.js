class School{
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name(){
        return this._name;
    }

    get level(){
        return this._level;
    }

    get numberOfStudents(){
        return this._numberOfStudents;
    }

    set numberOfStudents(number){
        if(Number.isNaN(number)){
            console.log("Invalid input: numberOfStudents must be set to a Number.")
        }else{
            this._numberOfStudents = number;
        }
    }

    quickFacts() {
        console.log(
          `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
        );
      }
    
      static pickSubstituteTeacher(substituteTeachers) {
        const randomNumber = Math.floor(
          Math.random() * (substituteTeachers.length - 1)
        );
        return substituteTeachers[randomNumber];
      }
}

class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
        super(name, "primary", numberOfStudents);
        this._pickupPolicy = pickupPolicy
    }

    get pickupPolicy(){
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportTeams){
        super(name, "high", numberOfStudents);
        this._sportTeams =  sportTeams;
    }

    get sportTeams(){
        return this._sportTeams;
    }
}

const lorrainHansbury = new PrimarySchool(
    "Lorrainee Hansbury",
    "Not a Number",
    // "35",
    "Students must be picked up by a parent, guardian, or a family member over the age of 13."

    
);
lorrainHansbury.quickFacts();

// High School Creation
const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

console.log(alSmith.sportsTeams);

// Static Method
const substitute = School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);



// class SchoolCatalog extends School{

// }