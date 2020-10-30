import axios from 'axios';

import {
  UPLOAD_VIDEO_START,
  UPLOAD_VIDEO_FINISHED,
} from './types';

import { uploadApiPath } from '../utils/paths';

export const uploadVideo = (files) => async (dispatch) => {
  dispatch({
    type: UPLOAD_VIDEO_START,
    payload: {
      uploading: true,
      uploaded: false,
    },
  });

  await axios.post(uploadApiPath, { files });

  dispatch({
    type: UPLOAD_VIDEO_FINISHED,
    payload: {
      uploading: false,
      uploaded: true,
    },
  });
};

export default {
  uploadVideo,
};
