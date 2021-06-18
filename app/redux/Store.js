import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducers/RootReducer";
import {MakeStore, createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

const initialState = {};

const middlewares = [thunk];

export const Store = createStore(
  RootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
  )
);

const makeStore = (context) => createStore(
  RootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
  )
);;

export const wrapper = createWrapper(makeStore, {debug: true});
