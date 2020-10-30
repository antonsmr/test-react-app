import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Upload, Button, notification } from 'antd';
import { isEmpty, uniqBy } from 'lodash';
import { InboxOutlined, SmileOutlined } from '@ant-design/icons';
import { shape, func } from 'prop-types';

import Layout from '../../components/Layout';
import { toBase64 } from '../../utils/base64Parser';

import {
  uploadVideo,
} from '../../actions/upload';

const { Dragger } = Upload;

const UploadPage = (props) => {
  const [fileList, setFileList] = useState([]);

  const { upload } = props;

  const openNotification = () => {
    notification.open({
      message: 'File uploader',
      description:
        'Video files were successfully uploaded.',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

  useEffect(() => {
    if (props.upload.uploaded) {
      openNotification();
      setFileList([]);
    }
  }, [props.upload.uploaded]);

  const handleUpload = async () => {
    const promises = await fileList.map(async (file) => {
      const base64String = await toBase64(file);
      return {
        name: file.name,
        base64String,
      };
    });
    const mappedList = await Promise.all(promises);

    props.uploadVideo(mappedList);
  };

  const beforeUpload = (file, files) => {
    setFileList(uniqBy([...fileList, ...files], 'uid'));
    return false;
  };

  const onRemove = (file) => {
    const index = fileList.indexOf(file);
    const newFileList = [...fileList].slice();
    newFileList.splice(index, 1);
    setFileList(newFileList);
  };

  return (
    <Layout>
      <h4>Upload a video</h4>
      <div className="content-upload">
        <Dragger fileList={fileList} beforeUpload={beforeUpload} onRemove={onRemove} multiple>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or
            other band files
          </p>
        </Dragger>
        <Button
          className="btn-upload"
          loading={upload.uploading}
          disabled={isEmpty(fileList)}
          onClick={handleUpload}
        >
          Upload
        </Button>
      </div>
    </Layout>
  );
};

UploadPage.propTypes = {
  upload: shape().isRequired,
  uploadVideo: func.isRequired,
};
UploadPage.defaultProps = {};

const mapStateToProps = (state) => ({
  upload: state.upload,
});

const actionCreators = {
  uploadVideo,
};

export default connect(mapStateToProps, actionCreators)(UploadPage);
