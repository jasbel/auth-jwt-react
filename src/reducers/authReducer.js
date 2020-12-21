/** Reduccion de autenticacion
 * @module Auth
 */

import { types } from "../types/types";

const initialState = {
    checking: true,
    // uid: null,
    // nameL null
}

/** funcion autreducer
 * @function authReducer
 * @param state Estado con initialState
 * @param action Acciones
 * @return El Estado del tipo por defecto
 */
export const authReducer = ( state = initialState, action ) => {

    switch(action.type) {

        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false,
            }

        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }


        case types.authLogout:
            return {
                checking: false
            }

        default:
            return state;
    }

}