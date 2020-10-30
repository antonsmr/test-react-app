import config from '../config';

export const { apiPath } = config;

// APP paths
export const rootAppPath = '/';
export const uploadVideoAppPath = '/upload';
export const videoListAppPath = '/video';

// API paths
export const uploadApiPath = `${apiPath}/files`;
export const streamApiPath = `${apiPath}/stream`;
