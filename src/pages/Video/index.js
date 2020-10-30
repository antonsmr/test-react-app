/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { shape, func } from 'prop-types';
import { isEmpty } from 'lodash';
import { Row, Col } from 'antd';

import {
  getVideoList,
} from '../../actions/video';

import Layout from '../../components/Layout';

import { streamApiPath } from '../../utils/paths';

const VideoPage = (props) => {
  const [windowWidth, setWindowWidth] = useState(1000);
  const { video } = props;

  useEffect(() => {
    props.getVideoList();
  }, []);

  const updateDimensions = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    updateDimensions(window.innerWidth);
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const getGridSize = () => {
    let gridSize = 24;
    if (windowWidth >= 1200) gridSize = 8;
    if (windowWidth < 1200 && windowWidth >= 768) gridSize = 24;
    if (windowWidth <= 768) gridSize = 32;
    return gridSize;
  };

  return (
    <Layout>
      <h4>Video list</h4>

      <Row
        gutter={{
          xs: 8, sm: 16, md: 24, lg: 32,
        }}
      >
        {!isEmpty(video.list) && video.list.map((v) => (
          <Col key={v} className="gutter-row" span={getGridSize()}>
            <div className="video-list-item">
              <video id="video" controls="controls">
                <source src={`${streamApiPath}?fileName=${v}`} type="video/mp4" />
                <track src="captions_en.vtt" kind="captions" srcLang="en" label="english_captions" />
              </video>
            </div>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

VideoPage.propTypes = {
  video: shape().isRequired,
  getVideoList: func.isRequired,
};
VideoPage.defaultProps = {};

const mapStateToProps = (state) => ({
  video: state.video,
});

const actionCreators = {
  getVideoList,
};

export default connect(mapStateToProps, actionCreators)(VideoPage);
