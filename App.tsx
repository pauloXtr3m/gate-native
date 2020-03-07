import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BaseSpinnerScreen } from '@cpmech/rncomps';
import { useGateObserver } from './src/components';
import { NavMain, NavSignUp } from './src/navigation';
import { colors } from './src/styles';
import { gate } from './src/service';

export const App = () => {
  const { ready, hasAccess } = useGateObserver(gate, 'gatenative/App');

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.orange} barStyle="light-content" />
      {ready ? (
        // AWS Amplify has been initialized/configured
        hasAccess ? (
          // user has signed-up/signed-in already
          <NavMain />
        ) : (
          // sign-up/sign-in needed
          <NavSignUp />
        )
      ) : (
        // still initializing...
        <BaseSpinnerScreen darkColor={colors.orange} />
      )}
    </NavigationContainer>
  );
};
