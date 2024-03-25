const getBook = () => {
    const storedBook = localStorage.getItem('book');
    if(storedBook){
        return JSON.parse(storedBook);
    }
    else{
        return [];
    }
};
const saveBook = bookId => {
    const storedBooks = getBook();
    const exist = storedBooks.find(id => id === bookId);
    if(!exist) {
        storedBooks.push(bookId)
        localStorage.setItem('book', JSON.stringify(storedBooks))
    }
}
export {getBook, saveBook}