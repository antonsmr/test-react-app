import axios from 'axios';

import {
  GET_VIDEO_LIST_START,
  GET_VIDEO_LIST_FINISHED,
} from './types';

import { uploadApiPath } from '../utils/paths';

export const getVideoList = () => async (dispatch) => {
  dispatch({
    type: GET_VIDEO_LIST_START,
    payload: {
      fetching: true,
      fetched: false,
    },
  });

  const result = await axios.get(uploadApiPath);

  dispatch({
    type: GET_VIDEO_LIST_FINISHED,
    payload: {
      fetching: false,
      fetched: true,
      list: result.data.files,
    },
  });
};

export default {
  getVideoList,
};
