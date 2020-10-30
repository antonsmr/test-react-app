import { combineReducers } from 'redux';
import upload from './upload';
import video from './video';

const reducers = combineReducers({
  upload,
  video,
});

export default reducers;
