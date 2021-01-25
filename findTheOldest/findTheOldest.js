let findTheOldest = function(obj) {

    return obj.reduce((oldest, currentPerson)=>{
        console.table(oldest);
        let currentPersonAge = getAge(currentPerson);
        let oldestAge = getAge(oldest);
        return oldestAge > currentPersonAge ? oldest: currentPerson;
    })
    

}

function getAge(person){

    return person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
}

module.exports = findTheOldest
