import React, { useEffect } from 'react';
import { Animated, ImageBackground, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainMenuScreen from './src/scr/MainMenuScreen';

import AboutScreen from './src/scr/AboutScreen';
import TimerScreen from './src/scr/TimerScreen';
import SetScreen from './src/scr/SetScreen';
import WelcomeAbout from './src/scr/WelcomeAbout';
import KnowledgeScreen from './src/scr/KnowledgeScreen';
import ColorsScreen from './src/scr/ColorsScreen';
import LearnScreen from './src/scr/LearnScreen';
import HistoryScreen from './src/scr/HistoryScreen';

enableScreens();

const Stack = createStackNavigator();

const WelcomeLoader = ({ navigation }) => {
    const progress = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(progress, {
          toValue: 1,
          duration: 3500,
          useNativeDriver: true,
        }).start(() => {
          navigation.navigate('WelcomeAbout');
        });
      }, []);
    
      const rotate = progress.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg'],
      });

  return (
    <ImageBackground source={require('./src/asst/backs/1.png')} style={{flex: 1}}>
        <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <Animated.Image
                  source={require('./src/asst/decor/loader.png')}
                  style={{
                  width: 140,
                  height: 210,
                  resizeMode: 'contain',
                  transform: [{ rotate }],
                  }}
            />
        </View>
    </ImageBackground>
  );
};

const App = () => {

  return (
      <NavigationContainer>
            <Stack.Navigator initialRouteName={"WelcomeLoader" }>    
            <Stack.Screen 
                  name="WelcomeLoader" 
                  component={WelcomeLoader} 
                  options={{ headerShown: false }} 
            />
            <Stack.Screen 
                  name="WelcomeAbout" 
                  component={WelcomeAbout} 
                  options={{ headerShown: false }} 
            />
            <Stack.Screen 
                  name="MainMenuScreen" 
                  component={MainMenuScreen} 
                  options={{ headerShown: false }} 
            />
            <Stack.Screen 
                  name="TimerScreen" 
                  component={TimerScreen} 
                  options={{ headerShown: false }} 
            />
            <Stack.Screen 
                  name="SetScreen" 
                  component={SetScreen} 
                  options={{ headerShown: false }} 
            />
            <Stack.Screen 
                  name="AboutScreen" 
                  component={AboutScreen} 
                  options={{ headerShown: false }} 
            />
            <Stack.Screen 
                  name="KnowledgeScreen" 
                  component={KnowledgeScreen} 
                  options={{ headerShown: false }} 
            />
            <Stack.Screen 
                  name="ColorsScreen" 
                  component={ColorsScreen} 
                  options={{ headerShown: false }} 
            />
            <Stack.Screen 
                  name="LearnScreen" 
                  component={LearnScreen} 
                  options={{ headerShown: false }} 
            />
            <Stack.Screen 
                  name="HistoryScreen" 
                  component={HistoryScreen} 
                  options={{ headerShown: false }} 
            />
            </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;
