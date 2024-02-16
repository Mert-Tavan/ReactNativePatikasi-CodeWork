import * as React from 'react';
import {} from 'react-native';

import JobsPage from './pages/JobsPage';
import FavoritedJobsPage from './pages/FavoritedJobsPage';
import DetailPage from './pages/DetailPage';
import SubmitesPage from './pages/SubmitedPage'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import store from './context/store'
import { Provider } from 'react-redux'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const FirstScreenStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="JobsPage"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="JobsPage"
          component={JobsPage}
        />
        <Stack.Screen
        name="DetailPage"
        component={DetailPage}/>
      </Stack.Navigator>
  );
}

const SecondScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FavoritedJobsPage"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="FavoritedJobsPage"
        component={FavoritedJobsPage}/>
      <Stack.Screen
        name="DetailPage"
        component={DetailPage}/>
    </Stack.Navigator>
  );
}

const ThirdScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SubmitesPage"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name="SubmitesPage"
        component={SubmitesPage}/>
      <Stack.Screen
        name="DetailPage"
        component={DetailPage}/>
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: 'white', //Set Drawer background
              width: 250, //Set Drawer width
            },
            headerStyle: {
              backgroundColor: 'white', //Set Header color
            },
            headerTintColor: '#ef5350', //Set Header text color
            headerTitleStyle: {
            
            }
          }}>
          <Drawer.Screen
            name="FirstScreenStack"
            options={{
              drawerLabel: 'Jobs',
              title: 'Jobs'
            }}
            component={FirstScreenStack} />
          <Drawer.Screen
            name="SecondScreenStack"
            options={{
              drawerLabel: 'Favorited Jobs',
              title: 'Favorited Jobs'
            }}
            component={SecondScreenStack} />
            <Drawer.Screen
            name="ThirdScreenStack"
            options={{
              drawerLabel: 'Submited Jobs',
              title: 'Submited Jobs'
            }}
            component={ThirdScreenStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;
