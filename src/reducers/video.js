import {
  GET_VIDEO_LIST_START,
  GET_VIDEO_LIST_FINISHED,
} from '../actions/types';

const initialState = {
  list: [],
  fetching: false,
  fetched: false,
};

export default (state = { ...initialState }, action = {}) => {
  switch (action.type) {
    case GET_VIDEO_LIST_START:
    case GET_VIDEO_LIST_FINISHED:
      return {
        ...state,
        ...action.payload,
      };
    default: return state;
  }
};
