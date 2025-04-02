import React, { useEffect } from 'react';
import { Animated, ImageBackground, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from './source/screens/InitialScreen';
import TimerScreen from './source/screens/TimerScreen';
import SettingsScreen from './source/screens/SettingsScreen';
import AboutScreen from './source/screens/AboutScreen';
import KnowledgeScreen from './source/screens/KnowledgeScreen';
import ColorsScreen from './source/screens/ColorsScreen';
import LearnScreen from './source/screens/LearnScreen';
import HistoryScreen from './source/screens/HistoryScreen';

import { MusicProvider } from './source/constants/music';
import Music from './source/components/Music';

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
          navigation.replace('InitialScreen');
        });
      }, []);
    
      const rotate = progress.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg'],
      });

  return (
    <ImageBackground source={require('./source/assets/backgrounds/1.png')} style={{flex: 1}}>
        <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <Animated.Image
            source={require('./source/assets/decor/loader.png')}
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
      <MusicProvider>
          <Music />
          <NavigationContainer>
              <Stack.Navigator initialRouteName={"WelcomeLoader" }>    
                  <Stack.Screen 
                        name="WelcomeLoader" 
                        component={WelcomeLoader} 
                        options={{ headerShown: false }} 
                  />
                  <Stack.Screen 
                        name="InitialScreen" 
                        component={InitialScreen} 
                        options={{ headerShown: false }} 
                  />
                  <Stack.Screen 
                        name="TimerScreen" 
                        component={TimerScreen} 
                        options={{ headerShown: false }} 
                  />
                  <Stack.Screen 
                        name="SettingsScreen" 
                        component={SettingsScreen} 
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
      </MusicProvider>
    );
};

export default App;
