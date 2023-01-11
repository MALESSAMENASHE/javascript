let obj={
    bookName: "Game Over",
    authorName: 'mike.g' ,
    publishingYear : 1999 ,
    type : 'roman',
    pages : 110,
}

function description(obj){
    let result = "";
      return 'the book ${book.bookName} was written by ${obj.authorName} in the year ${obj.publishingYear}' ;
}

console.log(description(book));
