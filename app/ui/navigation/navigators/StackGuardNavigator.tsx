import React from "react";
import { createNavigatorFactory, useNavigationBuilder } from "@react-navigation/native";
import StackGuardRouter from '../routers/StackGuardRouter';
import { StackView } from '@react-navigation/stack';

function StackGuardNavigator({
 initialRouteName,
 backBehavior,
 screenOptions,
 children,
 ...rest
}) {
  const { state, descriptors, navigation } = useNavigationBuilder(
    StackGuardRouter,
    {
      initialRouteName,
      backBehavior,
      screenOptions,
      children,
    });

  return (
    <StackView
      {...rest}
      state={state}
      descriptors={descriptors}
      navigation={navigation}/>
  );
}

export const createStackGuardNavigator =
  createNavigatorFactory(StackGuardNavigator);
