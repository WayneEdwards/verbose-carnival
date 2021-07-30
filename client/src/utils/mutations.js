import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
            email
        }
        
    }
}

`;
export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
            user {
                _id
                username
                email
            }
            token 
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookData: bookData!) {
        saveBook(bookData: $bookData) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                description
                title
                image
                link
                authors
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation deleteBook ($bookId: String!) {
        deleteBook(bookId:$bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                description
                title
                image
                link
                authors
            }
        }
    }
`;
