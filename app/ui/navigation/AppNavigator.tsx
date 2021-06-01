import React, {useEffect, useMemo, useRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackGuardNavigator} from './navigators/StackGuardNavigator';
import HomeScreen from '../screens/home/HomeScreen';
import IRoutingService, {
  Routes,
} from '../../presentation/abstractions/IRoutingService';
import {withDependencies} from '../shared/contexts/DIContext';
import PostsScreen from '../screens/posts/PostsScreen';
import moduleUITypes from "../moduleUITypes";

type AppNavigatorProps = {
  routingService: IRoutingService;
};

const AppNavigator: React.FC<AppNavigatorProps> = p => {
  const Stack = useMemo(() => createStackGuardNavigator(), []);
  const navigationRef = useRef<NavigationContainerRef>(null);

  useEffect(() => {
    const navigator = navigationRef.current;
    if (navigator != null) {
      p.routingService.attachNavigator(navigationRef.current!);
    }

    return function cleanup() {
      p.routingService.detachNavigator();
    };
  });

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={Routes.Home}
        detachInactiveScreens={true}
        headerMode="none">
        <Stack.Screen name={Routes.Home} component={HomeScreen} />

        <Stack.Screen name={Routes.Posts} component={PostsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withDependencies(
  'app',
  c => ({
    routingService: c.get<IRoutingService>(moduleUITypes.routingService),
  }),
  AppNavigator,
);
