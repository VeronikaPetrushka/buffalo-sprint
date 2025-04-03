import React from 'react';
import { View } from 'react-native';
import { useMusic } from '../const/music';

const Music = () => {
    const { sound, toggleMusic } = useMusic();

    return <View />;
};

export default Music;