import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import Reducers from '../reducers';

export const Store = configureStore({ reducer: Reducers }, applyMiddleware(thunk));