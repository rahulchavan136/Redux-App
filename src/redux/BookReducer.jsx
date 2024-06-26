import { BUY, SELL, ADD_BOOK } from "./BookAction";

const initialState = {
    numberOfBooks: 20,
    books: []
};

const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY:
            return {
                ...state,
                numberOfBooks: state.numberOfBooks + action.payload
            };
        case SELL:
            return {
                ...state,
                numberOfBooks: state.numberOfBooks - action.payload
            };
            case ADD_BOOK:
                const { bookName, price, authorName } = action.payload;
                const newBook = {
                    bookName,
                    price,
                    authorName
                };
                return {
                    ...state,
                    books: [...state.books, newBook]
                };
        default:
            return state;
    }
};

export default BookReducer;
