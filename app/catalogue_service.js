// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  return catalogue.length;
}

function checkBook(book) {
  // Your code here
  for (let i = 0; i < catalogue.length; i++) { //check through all of the books in the array
    let bookToCheck = catalogue[i];

    if (bookToCheck === book) {
      return true;
    }
  }
  return false;
}


function countBooksByFirstLetter(letter) {
  // This tells computer that count begins at zero
  let count = 0; 
  // This tells computer what your loop is - to start looping at index point zero, to keep going until the end of the array and to go through them one at a time
  for (let i = 0; i < catalogue.length; i++) {
  // This tells computer to go through the catalogue array and each time it finds a title that starts with the letter (in this case W is being tested for by the test.js)
    if (catalogue[i].startsWith(letter)){
  // This tells computer to add one to the count variable each time it finds a title beginning with W
      count++
    }
  }
  // And then we are asking it to return 'count', which has now changed from zero because the computer has added 1 to it each time it found a title starting with W
  return count;
}

function countBooksByKeyword(keyword) {
  // This would be similar to the function above, but instead of ...ByFirstLetter it would be ...ByKeyword
// So I'll start off by copying the one above and replacing 'letter' with 'keyword'
// That didn't pass the test the first time, but then I noticed there was .startsWith in there
// I looked in Mozilla dev reference for something else. .contains didn't seem to exist. But .match works 
// I did have to change the case of the words being tested to Title case i.e. Assassin not assassin. 
// So I guess .match has to match the data exactly, which may not be entirely what is wanted as users may not match case

// This tells computer that count begins at zero
let count = 0; 
// This tells computer what your loop is - to start looping at index point zero, to keep going until the end of the array and to go through them one at a time
for (let i = 0; i < catalogue.length; i++) {
// This tells computer to go through the catalogue array and each time it finds a book title that contains this keyword (in this case assassin is being tested for by the test.js)
    if (catalogue[i].match(keyword)){
// This tells computer to add one to the count variable each time it finds a title containing the word "assassin"
    count++
  }
}
// And then we are asking it to return 'count', which has now changed from zero because the computer has added 1 to it each time it found a title containing the keyword "assassin"
return count;
}
// I added another test that looked for a number - first I did "2666" so it was still treating the number like a string. That passed. 
// Then I took out the speech marks and so the number was more of a number. That still passes. 
// What if someone calls the function with a number? [1, 2, 3] - this passes
// Or a boolean? - this brings up an error. 


function getBooksByAuthor(author) {
  // Writing it out in pseudocode first ...

  // I need to return a new array of all the books by a particular author. 
  // So I need computer to go through the whole catalogue array and not stop when it finds the first one. 

  // So ...

// check through the catalogue array from beginning to end, one at a time

// // USE FILTER? when you find the string that contains the author name, keep hold of it

// // when the string doesn't contain author name, discard it

// // at the end, return a new array of all the strings that contain our particular author

//I'm going round in circles with this one. I'll move onto doing exercises from 003 and then maybe return to this if I have time on Wednesday or Thursday. 

// THIS IS JAMES' SOLUTION
  
let books = [];  
for(let i=0; i < catalogue.length; i++) {
    if(catalogue[i].toLowerCase().includes(author.toLowerCase())) {
      books.push(catalogue[i])
    }
  }
  return books;
}	


module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};
