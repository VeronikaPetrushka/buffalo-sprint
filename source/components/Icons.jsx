import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icons = ({ type }) => {

  let imageSource;
  let iconStyle = [styles.icon];

  switch (type) {
    case '1':
      imageSource = require('../assets/nav-buttons/1.png');
      break;
    case '2':
      imageSource = require('../assets/nav-buttons/2.png');
      break;
    case '3':
      imageSource = require('../assets/nav-buttons/3.png');
      break;
    case '4':
      imageSource = require('../assets/nav-buttons/4.png');
      break;
    case 'back':
      imageSource = require('../assets/icons/back.png');
      break;
    case 'about':
      imageSource = require('../assets/icons/about.png');
      break;
    case 'share':
      imageSource = require('../assets/icons/share.png');
      break;
    case 'share-light':
      imageSource = require('../assets/icons/share-light.png');
      break;
    case 'pause':
      imageSource = require('../assets/icons/pause.png');
      break;
    case 'minus':
      imageSource = require('../assets/icons/minus.png');
      break;
    case 'plus':
      imageSource = require('../assets/icons/plus.png');
      break;
    case 'reset':
      imageSource = require('../assets/icons/reset.png');
      break;
    case 'start':
      imageSource = require('../assets/icons/start.png');
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
