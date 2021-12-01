import React, {useEffect, useState} from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {screenOption} from './constants/options';
import {
  ContactListContainer,
  AddContactContainer
} from '../../Views';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={'contactList'} screenOptions={screenOption}>
      <Stack.Screen name={"contactList"} component={ContactListContainer} />
      <Stack.Screen name={"addContact"} component={AddContactContainer} />
    </Stack.Navigator>
  );
};
