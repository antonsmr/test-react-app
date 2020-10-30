import {
  UPLOAD_VIDEO_START,
  UPLOAD_VIDEO_FINISHED,
} from '../actions/types';

const initialState = {
  uploading: false,
  uploaded: false,
};

export default (state = { ...initialState }, action = {}) => {
  switch (action.type) {
    case UPLOAD_VIDEO_START:
    case UPLOAD_VIDEO_FINISHED:
      return {
        ...state,
        ...action.payload,
      };
    default: return state;
  }
};
