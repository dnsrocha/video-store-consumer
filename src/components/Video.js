import React from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {

    const onVideoClick =() => {
        props.onClickCallBack(props.video);
    }

    return <button onClick = {onVideoClick}>
        {props.video.title}
    </button>

}

Video.propTypes = {
    onClickCallBack: PropTypes.func.isRequired,
    video: PropTypes.object
};

export default Video;