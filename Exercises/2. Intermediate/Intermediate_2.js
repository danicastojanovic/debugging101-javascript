/*
* Please identify the any issue(s) with the following code. There may be
* syntax or style errors.
*/
const middleEarth = {
  1: {
    title: 'The Silmarillion',
    author: 'J.R.R. Tolkien'
  },
  2: {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien'
  },
  3: {
    title: 'The Fellowship of the Ring',
    author: 'J.R.R. Tolkien'
  },
  4: {
    title: 'The Two Towers',
    author: 'J.R.R. Tolkien'
  },
  5: {
    title: 'The Return of the King',
    author: 'J.R.R. Tolkien'
  }
}

for(let book in middleEarth) {
  console.log(middleEarth[book]);
}
console.log(middleEarth[5].author);