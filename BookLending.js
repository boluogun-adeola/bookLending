const library = ( ()=>{
    let availableBooks = ["Yual Noah Harrari: Homo Deus", "Chimamanda Adichie : Half Of A Yellow Sun ","Chris Abani : Becoming Abigail","Ayobami Adebayo : Stay With Me","Chinua Achebe : Things Fall Apart","Elnathan John: Becoming Nigerian","Chibundu Onuzo : Welcome To Lagos"]
    let borrowedBooks =[];
    function  borrowBooks(name){
        const booksAvailable = availableBooks.filter((_,index )=>index !== name);
        const bookBorrowed =availableBooks.filter((_,index)=>index === name);
        if(bookBorrowed[0]!== undefined){
            availableBooks = booksAvailable;
            borrowedBooks.push(bookBorrowed[0]);
            return `\n You have borrowed ${bookBorrowed[0]}`
        }else{
            `\n You made an invaid selection,select your preferred book index number`
        }
    }

    const returnBook = name => {
        const book = borrowedBooks[name];
        const removeBook = borrowedBooks.filter((_,index) => index !== name);
        if (borrowedBooks.includes(book)) {
            borrowedBooks = removeBook;
            availableBooks.push(book);
            return `\n You returned ${book} to the library`
        }else{
            return `\n Please enter the correct index number of the book you want to return`
        }
        
    }
    const showAvailableBooks = ()=>{
        return availableBooks;
    }
    const showBorrowedBooks = () =>{
        return borrowedBooks;
    }
    return {
        totalAvailableBooks : showAvailableBooks,
        borrow : borrowBooks,
        bookReturned: returnBook,
        totalBorrowedBooks : showBorrowedBooks
    }
}
)();
 console.log(`Hey BookWorm! Welcome to the Library`);
for(let i = 0; i<1;){
    let options = prompt(`\n\n What are you interested in today?  \n1: See Available Books. \n2: Borrow a book. \n3: Return a book. \n4: View the list of your borrowed books.\n5: Exit\n\n`);
      if (options ==1) {
            bookHolder = `\n`
            library.totalAvailableBooks().forEach((book,name)=>{bookHolder += name + 1 +book+ `\n`});
            console.log(`\n Available Books are :\n` + bookHolder);
      }
    
      if (options ==2){
            bookHolder = `\n`
            library.totalAvailableBooks().forEach((book,name)=>{
                return bookHolder += name + 1 + book +  `\n`
            });
            console.log(library.borrow(Number(prompt(`\nWhich book are you borrowing?\n` + bookHolder + `\n`)- 1 )));
      }
        if(options ==3){
            if(library.totalBorrowedBooks().length<=0){
                console.log(`\n You are either yet to borrow a book or you have returned all previously borrowed books`)
            }else{
                bookHolder = `\n`;
                library.totalBorrowedBooks().forEach((book,name) =>{
                    return bookHolder += name + 1 + book + `\n`});
                console.log(`\n Which book are you returning?\n` + bookHolder)

                }
        }
          if (options == 4){
    
            if(library.totalBorrowedBooks().length <= 0){
                console.log(`You have not borrowed any book`)
            }else{
                bookHolder = `\n`
                library.totalAvailableBooks().forEach((book,name)=>{
                    return bookHolder += name + 1 + book + `\n`
                });
                console.log(library.bookReturned(Number(prompt(`\n The books you have borrowed are:\n`+ bookHolder + `\n`) - 1)))
            }
          }
      if(options ==5){
        i =1;
        console.log(`Thanks for coming,hope to see you soon \n`)
      }
     if (options>5 || options<=0){

       console.log(`Please make a valid index number selection`)
     }
}

