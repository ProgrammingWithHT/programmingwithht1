
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export const posts = (posts = [],action) => { //posts and state same name desn't matter and state can't be empty so we give state=[] 
    switch (action.type) {
        case FETCH_ALL:
            console.log(posts,'fetchall')
          return action.payload;
        case LIKE:
            console.log(posts,'reducerposts')
          return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case CREATE:
          return [...posts, action.payload];
        case UPDATE:
          return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE:
          return posts.filter((post) => post._id !== action.payload);
        default:
          return posts;
      }
}


