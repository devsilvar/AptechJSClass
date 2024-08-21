class ATM {
  constructor(PIN, Name, balance) {
    this.PIN = PIN;
    this.Name = Name;
    this.balance = balance;
  }

  transfer(amount) {
    return (this.balance = this.balance - amount);
  }

  checkbalance() {
    return 'your balalnce is';
  }

  withdraw(amount) {
    return 'you are withdrawing ';
  }
}

let wisdom = new ATM(1299, 'wisdom', 'Zenith');

console.log(wisdom.withdraw());

let personDetails1 = {
  name: 'wisdom',
  age: 12,
  gender: 'male',
  matrciNo: 'pmt/13',
};

let personDetails2 = {
  name: 'val',
  age: 13,
  gender: 'male',
  matrciNo: 'pmt/13',
};

class Person {
  constructor(name, age, gender, matric) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.matric = matric;
  }

  getInfo() {
    return `  
     Name: ${this.name}
     gender: ${this.gender}
     age: ${this.age}
     matric: ${this.matric}

     `;
  }
}

let person2 = new Person('valentibe', 13, 'male', 'WWP');

let person3 = new Person('Zion', 11, 'female', 'WWP');

console.log(person2.getInfo());
console.log(person3.getInfo());
