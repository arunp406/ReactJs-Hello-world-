import React from 'react';

export const createBook = (book)=>{
    return{
        type:'CREATE_BOOK',
        book:book
    }
};