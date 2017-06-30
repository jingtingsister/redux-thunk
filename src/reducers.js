import { CHANGE_TEXT, BUTTON_CLICK, LETS_LOAD, LOADING_COMPLETE } from './constants';


const initialState = {
  text: 'Hello',
  loading: false,
  ready: false,
  content: {},
};

function myApp(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: state.text === 'Hello' ? 'Bye' : 'Hello',
      };
    case BUTTON_CLICK:
      return {
        ...state,
        text: 'You Just Click Button',
      };
    case LETS_LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOADING_COMPLETE:
      return {
        ...state,
        ready: true,
        loading: false,
        content: action.content, // 從action傳進來的json
      };
    default:
      return state;
  }
}

export default myApp;
