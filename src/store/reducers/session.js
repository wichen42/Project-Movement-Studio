import { type } from "os";
import csrfFetch from "../csrf";

export const SET_CURRENT_USER = "session/SET_CURRENT_USER";
export const REMOVE_CURRENT_USER = "session/REMOVE_CURRENT_USER";

export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    user,
})

export const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER,

})

export const getSession = ({ session }) => (session ? session : null);

export const storeCurrentUser = (user) => {
    if (user) {
        sessionStorage.setItem("currentUser", JSON.stringify(user))
    } else {
        sessionStorage.removeItem("currentUser")
    }
}

export const signup = user => async dispatch => {

}

export const login = ({ credential, password }) => async dispatch => {
    const res = await csrfFetch("/api/v1/session", {
        method: "POST",
        body: JSON.stringify({ credential, password }),
    });
    const data = await res.json();
    dispatch(setCurrentUser(data.user));
    return res;
};

export const logout = () => async dispatch => {
    const res = await csrfFetch("/api/v1/session", {
        method: "DELETE",
    });
    dispatch(removeCurrentUser());
    return res;
};

export const restoreSession = () => async dispatch => {
    const res = await csrfFetch("/api/v1/session");
    storeCSRFToken(res);
    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return res;
};

const storeCSRFToken = (res) => {
    const csrfToken = res.headers.get("X-CSRF-Token");
    if (csrfToken) {
        sessionStorage.setItem("X-CSRF-Token", csrfToken);
    }
};

const initialState = {
    user: JSON.parse(sessionStorage.getItem("currentUser")),
};

export default function sessionReducer(state = initialState, action) {
    const nextState = { ...state };
    switch (action.type) {
        case SET_CURRENT_USER:
            nextState.user = action.user;
            return nextState;
        case REMOVE_CURRENT_USER:
            nextState.user = null;
            return nextState;
        default: 
            return state;
    };
};