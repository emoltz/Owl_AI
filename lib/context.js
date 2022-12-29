// import context for components that need it
import { createContext } from 'react';

export const UserContext = createContext({
    user: null,
    username: null,
});