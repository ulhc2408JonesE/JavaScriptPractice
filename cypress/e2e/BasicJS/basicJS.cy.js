const section1 = require('../../../practice/01_return');
const section2 = require('../../../practice/02_function_parameters');
const section3 = require('../../../practice/03_if_statements');
const section4 = require('../../../practice/04_variables');
const section5 = require('../../../practice/05_arrays_and_loops');

describe('JavaScript Exercices', () => {

  it('T1 - JS Exercices 1/5 - Returning the string Hello World', () => {
    cy.wrap(section1.hello()).should('eq', 'Hello World');
  });

  it('T2 - JS Exercices 1/5 - Returning a + b ', () => {
    cy.wrap(section1.sum(2, 3)).should('eq', 5);
    cy.wrap(section1.sum(7, 9)).should('eq', 16);
  });

  it('T3 - JS Exercices 1/5 - Returning Hello  + name', () => {
    cy.wrap(section1.helloPerson('Bill')).should('eq', 'Hello Bill');
    cy.wrap(section1.helloPerson('Dave')).should('eq', 'Hello Dave');
  });

  it('T4 - JS Exercices 1/5 - Returning a minus b', () => {
    cy.wrap(section1.minus(2, 3)).should('eq', -1);
    cy.wrap(section1.minus(7, 1)).should('eq', 6);
  });

  it('T5 - JS Exercices 1/5 - Returning a divided by b', () => {
    cy.wrap(section1.divide(15, 3)).should('eq', 5);
    cy.wrap(section1.divide(18, 9)).should('eq', 2);
  });

  it('T6 - JS Exercices 2/5 - Should double a number', () => {
    cy.wrap(section2.double(5)).should('eq', 10);
    cy.wrap(section2.double(7)).should('eq', 14);
    cy.wrap(section2.double(3)).should('eq', 6);;
  });

  it('T7 - JS Exercices 2/5 - Should multiply two numbers', () => {
    cy.wrap(section2.multiply(3, 7)).should('eq', 21);
    cy.wrap(section2.multiply(9, 5)).should('eq', 45);
    cy.wrap(section2.multiply(20, 4)).should('eq', 80);
  });

  it('T8 - JS Exercices 2/5 - Should shout a word', () => {
    cy.wrap(section2.shout('hello')).should('eq', 'HELLO');
    cy.wrap(section2.shout('world')).should('eq', 'WORLD');
  });

  it('T9 - JS Exercices 2/5 - Should return the first element of an array', () => {
    cy.wrap(section2.first([5, 9, 8])).should('eq', 5);
    cy.wrap(section2.first(['Bill', 'Doug','Fred','Micheal'])).should('eq', 'Bill');
  });

  it('T10 - JS Exercices 3/5 - Returns correct beverage for age', () => {
    cy.wrap(section3.canDrink(20)).should('eq', 'juice');
    cy.wrap(section3.canDrink(15)).should('eq', 'juice');
    cy.wrap(section3.canDrink(21)).should('eq', 'beer');
    cy.wrap(section3.canDrink(25)).should('eq', 'beer');
  });

  it('T11 - JS Exercices 3/5 - Returns correct response for voting age', () => {
    cy.wrap(section3.canVote(17)).should("eq", "can't vote");
    cy.wrap(section3.canVote(19)).should('eq', 'can vote');
    cy.wrap(section3.canVote(18)).should('eq', 'can vote');
    cy.wrap(section3.canVote(10)).should("eq", "can't vote");
  });

  it('T12 - JS Exercices 3/5 - Returns correct driving status', () => {
    cy.wrap(section3.canDrive(12)).should('eq', 'no driving');
    cy.wrap(section3.canDrive(14)).should('eq', 'no driving');
    cy.wrap(section3.canDrive(15)).should('eq', 'learners permit');
    cy.wrap(section3.canDrive(16)).should('eq', 'can drive during day');
    cy.wrap(section3.canDrive(17)).should('eq', 'can drive during day');
    cy.wrap(section3.canDrive(18)).should('eq', 'can drive anytime');
    cy.wrap(section3.canDrive(19)).should('eq', 'can drive anytime');
    cy.wrap(section3.canDrive(45)).should('eq', 'can drive anytime');
  });

  it('T13 - JS Exercices 3/5 - Returns correct time of the week', () => {
    cy.wrap(section3.week('Monday')).should('eq', 'weekday');
    cy.wrap(section3.week('Tuesday')).should('eq', 'weekday');
    cy.wrap(section3.week('Wednesday')).should('eq', 'weekday');
    cy.wrap(section3.week('Thursday')).should('eq', 'weekday');
    cy.wrap(section3.week('Friday')).should('eq', 'almost weekend');
    cy.wrap(section3.week('Saturday')).should('eq', 'weekend');
    cy.wrap(section3.week('Sunday')).should('eq', 'weekend');
  });

  it('T14 - JS Exercices 4/5 - Should reassign the value of the variable', () => {
    section4.number = 10;
    expect(section4.number).to.equal(10);
  });

  it('T15 - JS Exercices 4/5 - Should return a constant variable', () => {
    const result = section4.getName();
    expect(result).to.equal('Bill');
  });

  it('T16 - JS Exercices 4/5 - Should declare and calculate a new variable', () => {
    const result = section4.newNumber;
    const expectedValue = section4.number + 10;
    expect(result).to.equal(expectedValue);
  });

  const array1 = [92, 84, 76, 45, 96, 79, 99, 59, 52, 68, 32];
  const array2 = ['Bill', 'Ted', 'Andy', 'Melissa', 'Tisha', 'Zach'];
  const array3 = [4, 6, 10, 25];

  it('T17 - JS Exercices 5/5 - Returns first element from array', () => {
    cy.wrap(section5.first(array1)).should('eq', 92);
    cy.wrap(section5.first(array2)).should('eq', 'Bill');
    cy.wrap(section5.first(array3)).should('eq', 4);
  });

  it('T18 - JS Exercices 5/5 - Returns the length of an array', () => {
    cy.wrap(section5.howMany(array1)).should('eq', 11);
    cy.wrap(section5.howMany(array2)).should('eq', 6);
    cy.wrap(section5.howMany(array3)).should('eq', 4);
  });

  it('T19 - JS Exercices 5/5 - TReturns last element from array', () => {
    cy.wrap(section5.last(array1)).should('eq', 32);
    cy.wrap(section5.last(array2)).should('eq', 'Zach');
    cy.wrap(section5.last(array3)).should('eq', 25);
  });

  it('T20 - JS Exercices 5/5 - Returns sum of all elements using for loop', () => {
    cy.wrap(section5.forLoopSum(array1)).should('eq', 782);
    cy.wrap(section5.forLoopSum(array3)).should('eq', 45);
  });

  it('T21 - JS Exercices 5/5 - Returns highest number of array ', () => {
    cy.wrap(section5.forLoopHighest(array1)).should('eq', 99);
    cy.wrap(section5.forLoopHighest(array3)).should('eq', 25);
  });

  it('T22 - JS Exercices 5/5 - Returns sum of an array of numbers', () => {
    cy.wrap(section5.forEachLoopSum(array1)).should('eq', 782);
    cy.wrap(section5.forEachLoopSum(array3)).should('eq', 45);
  });

  it('T23 - JS Exercices 5/5 - Return the highest number from an array', () => {
    cy.wrap(section5.forEachLoopHighest(array1)).should('eq', 99);
    cy.wrap(section5.forEachLoopHighest(array3)).should('eq', 25);
  });

  it('T24 - JS Exercices 5/5 - Return the sum of all numbers in the array', () => {
    cy.wrap(section5.whileLoopSum(array1)).should('eq', 782);
    cy.wrap(section5.whileLoopSum(array3)).should('eq', 45);
  });

  it('T25 - JS Exercices 5/5 - Return the highest number from an array', () => {
    cy.wrap(section5.whileLoopHighest(array1)).should('eq', 99);
    cy.wrap(section5.whileLoopHighest(array3)).should('eq', 25);
  });
});