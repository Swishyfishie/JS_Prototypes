//Object.prototype
//Person.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

//calculate age

Person.prototype.calculateAge =  function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

//Gets Married (manipulating object)
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}


const john = new Person('John', 'Doe', '8-12-1990');
const mary = new Person('Mary', "Smith", '4/21/1972');

console.log(mary.getFullName());

mary.getsMarried('Johnson');


console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('nothing'));