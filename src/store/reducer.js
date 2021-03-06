// https://github.com/svrcekmichal/redux-axios-middleware
// Every action which have payload.request defined will be handled by middleware. There are two possible type definitions.

// use action.type with string name
// action with type will be dispatched on start, and then followed by type suffixed with underscore and
// success suffix on success, or error suffix on error
// defaults: success suffix = "_SUCCESS" error suffix = "_FAIL"
import {navigation} from '../providers/navigationService';

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
  CLEAN_CREATE,
} from './actionTypes';

const navigate = (route, params) => {
  navigation.navigate(route, params);
};

const initialState = {
  users: {
    loading: false,
    error: false,
    data: {},
  },
  resources: {
    loading: false,
    error: false,
    data: {},
  },
  login: {
    loading: false,
    error: false,
    success: false,
    data: {},
  },
  register: {
    loading: false,
    error: false,
    success: false,
    data: {},
  },
  newUser: {
    triedCreate: false,
    loading: false,
    error: false,
    success: false,
    data: {},
  },
};

export default function reducer(state = initialState, action) {
  console.log('REDUX ACTION: ' + action.type);
  switch (action.type) {
    case GET_USERS:
      return {...state, users: {...state.users, loading: true}};
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: {...state.users, loading: false, data: action.payload.data},
      };
    case GET_USERS_FAIL:
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
      return {
        ...state,
        resources: {
          ...state.resources,
          loading: false,
          data: action.payload.data,
        },
      };
    case GET_RESOURCE_FAIL:
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
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          success: false,
          error: 'Error while login ' + handleResponseError(action.error),
        },
      };

    case REGISTER:
      return {...state, register: {...state.register, loading: true}};
    case REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          loading: false,
          success: true,
          data: action.payload.data,
        },
      };
    case REGISTER_FAIL:
      return {
        ...state,
        register: {
          ...state.register,
          loading: false,
          error: 'Error while register ' + handleResponseError(action.error),
        },
      };

    case CREATE_NEW_USER:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          triedCreate: true,
          loading: true,
          success: false,
        },
      };
    case CREATE_NEW_USER_SUCCESS:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          triedCreate: true,
          loading: false,
          success: true,
          error: false,
          data: action.payload.data,
        },
      };
    case CREATE_NEW_USER_FAIL:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          loading: false,
          triedCreate: true,
          loading: false,
          success: false,
          error:
            'Error while creationg new user ' +
            handleResponseError(action.error),
        },
      };

    case CLEAN_CREATE:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          triedCreate: false,
          loading: false,
          success: false,
          error: false,
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
        url: '/api/login',
        data: JSON.stringify({
          email: email,
          password: password,
        }),
      },
      options: {
        onSuccess({getState, dispatch, response}) {
          navigate('Home');
          dispatch({type: `${LOGIN}_SUCCESS`, payload: response.data});
        },
        onError({getState, dispatch, error}) {
          dispatch({type: `${LOGIN}_FAIL`, error: error});
        },
      },
    },
  };
};

export const register = (email, password) => {
  return {
    type: REGISTER,
    payload: {
      request: {
        method: 'POST',
        url: '/api/register',
        data: JSON.stringify({
          email,
          password,
        }),
      },
      options: {
        onSuccess({getState, dispatch, response}) {
          navigate('Home');
          dispatch({type: `${REGISTER}_SUCCESS`, payload: response.data});
        },
        onError({getState, dispatch, error}) {
          navigate('RegisterError', {
            message: handleResponseError(action.error),
          });
          dispatch({type: `${REGISTER}_FAIL`, error: error});
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
          user: user,
        },
      },
    },
  };
};

export const creanCreate = () => {
  return {
    type: CLEAN_CREATE,
  };
};

function handleResponseError(err) {
  if (err.message) {
    // Something happened in setting up the request that triggered an Error
    return JSON.stringify(err.message);
  }

  // Request made and server responded
  return JSON.stringify(err.data);
}
