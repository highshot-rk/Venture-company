// import jwtAuthService from "../../services/jwtAuthService";
import { setUserData } from "./UserActions";
// import history from "history.js";
import dynamic from 'next/dynamic';

// const jwtAuthService = dynamic(
//     () => import('../../services/jwtAuthService'),
//     {
//         ssr: false
//     }
// )


export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const RESET_PASSWORD = "RESET_PASSWORD";

export function loginWithEmailAndPassword({ email, password }) {
  return dispatch => {
    dispatch({
      type: LOGIN_LOADING
    });

    // jwtAuthService
    //   .loginWithEmailAndPassword(email, password)
    //   .then(user => {
    //     dispatch(setUserData(user));

    //     // history.push({
    //     //   pathname: "/"
    //     // });

    //     return dispatch({
    //       type: LOGIN_SUCCESS
    //     });
    //   })
    //   .catch(error => {
    //     return dispatch({
    //       type: LOGIN_ERROR,
    //       payload: error
    //     });
    //   });
  };
}

export function resetPassword({ email }) {
  return dispatch => {
    dispatch({
      payload: email,
      type: RESET_PASSWORD
    });
  };
}
