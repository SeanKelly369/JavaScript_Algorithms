
  const companies= [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 };
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 };
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 };
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 };
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 };
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 };
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 };
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 };
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 };
  ];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// FOR EACH

// Old Way
for(let i = 0; i< companies.length; i++) {
  console.log(companies[i]);
}

// Modern JS
companies.forEach(function(company, index, companies) {
  console.log(company);
  console.log(company.name);
});


// FILTER


// Get 21 and older
// Old Way
let canDrink = [];
for(let i = 0; i < ages.length; i++) {
  if(ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}

// ES5
const canDrink = ages.filter(function(age)) {
  if(age >= 21) {
    return true;
  }
});

// ES6
const canDrink = ages.filter(age => age >= 21);


// Filter retail companies
// ES5
const retailCompanies = companies.filter(function(company) {
  if(company.category === 'Retail') {
    return true;
  }
});

// ES6
const retailCompanies = companies.filter(company => company.category === 'Retail');

// Get 80s companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);

// Get companies that lasted at least 10 years
const decadeOldCompanies = companies.filter(company => (company.end - company.start >= 10));

console.log(decadeOldCompanies);



// MAP
// Create array of company names
const companyNames = companies.map(function(company) {
  return company.name;
});

console.log(companyNames);

const agesSquare = ages.map(age => Math.sqrt(age));
const agesTimesTwo = ages.map(age => (age*2));

const ageMap = ages
      .map(age => Math.sqrt(age))
      .map(age => age * 2);


console.log(agesSquare);
console.log(ageMap);


// SORT

// Sort companies by start year
const sortedCompanies = companies.sort(function(c1, c2) {
  if(c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});

const sortedCompaniesShorter = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies);
console.log(sortedCompaniesShorter)


// Sort ages

// decending order
const sortAges = ages.sort((a,b) => b - a);

// ascending order
const sortAges = ages.sort((a,b) => a - b);


// REDUCE


// with for loop
let ageSum = 0;
for(let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

// ES 5
const ageSum = ages.reduce(function(total, age) {
  return total + age;
}, 0);

// ES 6
const ageSum2 = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);
console.log(ageSum2);

// Total years for all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

console.log(totalYears)


// Combined Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
