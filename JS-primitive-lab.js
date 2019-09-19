//Question 1 
var friends = [
    'Moe',
    'Larry',
    'Curly',
    'Jane',
    'Emma',
    'Elizabeth',
    'Elinor',
    'Mary',
    'Darcy',
    'Grey',
    'Lydia',
    'Harriet'
  ];

// var lastFriend = friends[11];
  var lastFriend = friends[friends.length-1];
  
console.log(lastFriend);

// Question 2: sort list in alphabetical order
friends.sort();
console.log(friends);

//Question 3: sort alphabetically 
var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
var friendsArray = friends.split(',').sort();
console.log(friendsArray);

//Question 4: Reverse Alphabetical 
var friendsArrayReverse = friends.split(',').sort().reverse();
console.log(friendsArrayReverse);

//Question 5: Combine two arrays then order alphabetically 
var myFriends = [
    'Rickon',
    'Meera',
    'Hodor',
    'Jojen',
    'Osha',
    'Rickard',
    'Maester',
    'Rodrik',
    'Jory',
    'Septa',
    'Jon'
  ];
  
  var yourFriends = [
    'Bilbo',
    'Boromir',
    'Elrond',
    'Faramir',
    'Frodo',
    'Gandalf',
    'Legolas',
    'Pippin'
  ];

var allFriends = myFriends.concat(yourFriends).sort();
console.log(allFriends);

//Question 6: Find rank of favorite food 'Pho'
var foods = [
    'Popcorn',
    'Potato chips',
    'Shrimp',
    'Chicken rice',
    'Poutine',
    'Tacos',
    'Toast',
    'French Toast',
    'Crab',
    'Pho',
    'Lasagna',
    'Brownie',
    'Lobster',
    'Donuts',
    'Ice cream',
    'Hamburger',
    'Sushi',
    'Chocolate',
    'Pizza'
  ];
var pho = foods.indexOf('Pho');
console.log(pho);

//Question 7: Remove 'Donut'
var donuts = foods.splice(foods.indexOf('Donuts'),1);
console.log(foods);

//Question 8: What are 5th to 10th element?
console.log(foods.slice(6,11));


//Question 9: Replace "Space" to "Spice"
var word = "Space";
// console.log(word.replace('space', 'spice'));
var wordArr = word.split('')
wordArr.[2] = 'i';
wordArr.join('');
console.log(wordArr);

//Question 10: Find median age 
//sort, find length, divide half, find value of 
var ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];
