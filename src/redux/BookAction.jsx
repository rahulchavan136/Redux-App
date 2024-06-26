export const BUY = "BUY";
export const SELL = "SELL";
export const ADD_BOOK = "ADD_BOOK";

export const purchaseBook = () => {
    return {
        type: BUY,
        payload: 5
    };
};

export const sellBook = () => {
    return {
        type: SELL,
        payload: 2
    };
};

export const addBook = (bookName, price, authorName) => {
    return {
        type: ADD_BOOK,
        payload: {
            bookName,
            price,
            authorName
        }
    };
};
