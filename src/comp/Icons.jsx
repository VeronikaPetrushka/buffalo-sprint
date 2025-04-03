import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icons = ({ type }) => {

  let imageSource;
  let iconStyle = [styles.icon];

  switch (type) {
    case 'back':
      imageSource = require('../asst/icons/back.png');
      break;
    case 'about':
      imageSource = require('../asst/icons/about.png');
      break;
    case 'share':
      imageSource = require('../asst/icons/share.png');
      break;
    case 'share-light':
      imageSource = require('../asst/icons/share-light.png');
      break;
    case 'pause':
      imageSource = require('../asst/icons/pause.png');
      break;
    case 'minus':
      imageSource = require('../asst/icons/minus.png');
      break;
    case 'plus':
      imageSource = require('../asst/icons/plus.png');
      break;
    case 'reset':
      imageSource = require('../asst/icons/reset.png');
      break;
    case 'start':
      imageSource = require('../asst/icons/start.png');
      break;
  }

  return (
    <Image 
      source={imageSource} 
      style={iconStyle} 
    />
  );
};

const styles = StyleSheet.create({

  icon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  active: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    tintColor: '#cd2027',
  },

});

export default Icons;
