// https://github.com/svrcekmichal/redux-axios-middleware
// Every action which have payload.request defined will be handled by middleware. There are two possible type definitions.

// use action.type with string name
// action with type will be dispatched on start, and then followed by type suffixed with underscore and
// success suffix on success, or error suffix on error
// defaults: success suffix = "_SUCCESS" error suffix = "_FAIL"

import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_RESOURCE,
  GET_RESOURCE_SUCCESS,
  GET_RESOURCE_FAIL,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CREATE_NEW_USER,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAIL,
} from './actionTypes';

const initialState = {
  users: {
    loading: false,
    error: false,
    data: {},
  },
  resources: {
    loading: false,
    error: false,
    data: [],
  },
  login: {
    loading: false,
    error: false,
    success: false,
  },
  register: {
    loading: false,
    error: false,
    success: false,
  },
  newUser: {
    loading: false,
    error: false,
    success: false,
  },
};
export default function reducer(state = initialState, action) {
  console.log('REDUX ACTION: ' + action.type);
  switch (action.type) {
    case GET_USERS:
      return {...state, users: {...state.users, loading: true}};
    case GET_USERS_SUCCESS:
      console.log('reducer action.payload: ' + JSON.stringify(action.payload));
      return {
        ...state,
        users: {...state.users, loading: false, data: action.payload.data},
      };
    case GET_USERS_FAIL:
      console.log('reducer action.payload: ' + JSON.stringify(action.error));
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          error: 'Error while fetching users',
        },
      };

    case GET_RESOURCE:
      return {...state, resources: {...state.resources, loading: true}};
    case GET_RESOURCE_SUCCESS:
      console.log('reducer action.payload: ' + JSON.stringify(action.payload));
      return {
        ...state,
        resources: {
          ...state.resources,
          loading: false,
          data: action.payload.data,
        },
      };
    case GET_RESOURCE_FAIL:
      console.log('reducer action.payload: ' + JSON.stringify(action.error));
      return {
        ...state,
        resources: {
          ...state.resources,
          loading: false,
          error: 'Error while fetching ressources',
        },
      };

    case LOGIN:
      return {...state, login: {...state.login, loading: true}};
    case LOGIN_SUCCESS:
      console.log('reducer action.payload: ' + JSON.stringify(action.payload));
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          success: true,
          data: action.payload.data,
        },
      };
    case LOGIN_FAIL:
      console.log('reducer action.payload: ' + JSON.stringify(action.error));
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          success: false,
          error: 'Error while login',
        },
      };

    case REGISTER:
      return {...state, register: {...state.register, loading: true}};
    case REGISTER_SUCCESS:
      console.log('reducer action.payload: ' + JSON.stringify(action.payload));
      return {
        ...state,
        register: {
          ...state.register,
          loading: false,
          success: true,
        },
      };
    case REGISTER_FAIL:
      console.log('reducer action.payload: ' + JSON.stringify(action.error));
      console.log('reducer action.payload: ' + JSON.stringify(action.error));
      return {
        ...state,
        register: {
          ...state.register,
          loading: false,
          error: 'Error while register',
        },
      };

    case CREATE_NEW_USER:
      return {...state, newUser: {...state.newUser, loading: true}};
    case CREATE_NEW_USER_SUCCESS:
      console.log('reducer action.payload: ' + JSON.stringify(action.payload));
      return {
        ...state,
        newUser: {
          ...state.newUser,
          loading: false,
          newUser: action.payload.data,
        },
      };
    case CREATE_NEW_USER_FAIL:
      console.log('reducer action.payload: ' + JSON.stringify(action.error));
      return {
        ...state,
        newUser: {
          ...state.newUser,
          loading: false,
          error: 'Error while creationg new user',
        },
      };

    default:
      return state;
  }
}

// When we call the accountInfo function, the action GET_USERS is dispatched with a payload.request content.
// The redux-axios-middleware intercepts this action and eventually make an HTTP request to the GitHub API.
// After that, it will, automatically, dispatch either a GET_USERS_SUCCESS or a GET_USERS_FAIL action,
// depending on the status of the request. If you look at the reducer function, you see that we are returning
// a new state based on all the dispatched actions, being the most important the GET_USERS_SUCCCESS where we
// extract the users info from the action.payload (response from the API).

export const getUsersList = () => {
  return {
    type: GET_USERS,
    payload: {
      request: {
        url: '/users',
      },
    },
  };
};

export const getResourceList = () => {
  return {
    type: GET_RESOURCE,
    payload: {
      request: {
        url: '/unknwon',
      },
    },
  };
};

export const login = (email, password) => {
  return {
    type: LOGIN,
    payload: {
      request: {
        method: 'POST',
        url: '/login',
        data: {
          email,
          password,
        },
        options: {
          onError({getState, dispatch, error}) {
            dispatch({
              type: LOGIN_FAIL,
              payload: error.response,
            });
          },
        },
      },
    },
  };
};

export const register = user => {
  return {
    type: REGISTER,
    payload: {
      request: {
        method: 'POST',
        url: '/register',
        data: {
          email,
          password,
        },
        options: {
          onError({getState, dispatch, error}) {
            dispatch({
              type: REGISTER_FAIL,
              payload: error.response,
            });
          },
        },
      },
    },
  };
};

export const addUser = user => {
  return {
    type: CREATE_NEW_USER,
    payload: {
      request: {
        method: 'POST',
        url: '/users',
        data: {
          email,
          password,
        },
        options: {
          onError({getState, dispatch, error}) {
            dispatch({
              type: CREATE_NEW_USER_FAIL,
              payload: error.response,
            });
          },
        },
      },
    },
  };
};
