const getReadBook = () => {
    const storedBook = localStorage.getItem('book');
    if(storedBook){
        return JSON.parse(storedBook);
    }
    else{
        return [];
    }
};
const saveReadBook = bookId => {
    const storedBooks = getReadBook();
    const exist = storedBooks.find(id => id === bookId);
    if(!exist) {
        storedBooks.push(bookId)
        localStorage.setItem('book', JSON.stringify(storedBooks))
    }
};
const getWishBook = () => {
    const storedWishBook = localStorage.getItem('wish-book');
    if(storedWishBook){
        return JSON.parse(storedWishBook)
    }
    else{
        return [];
    }
};
const saveWishBook = ( bookId) => {
 const storedWishBooks = getWishBook();
 const isExist = storedWishBooks.find(wishBookId => wishBookId === bookId);
 if(!isExist){
    storedWishBooks.push(bookId);
    localStorage.setItem('wish-book', JSON.stringify(storedWishBooks))
 }
}
export {getReadBook, saveReadBook, getWishBook, saveWishBook}