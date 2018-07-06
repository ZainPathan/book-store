export const createBook = (book) => {
    //Return Action
    return {
        //Unique identifier
        type: 'CREATE_BOOK',
        //Payload
        book: book
    }
};