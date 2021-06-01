import React from 'react';
import AppNavigator from './ui/navigation/AppNavigator';
import { DIContextProvider } from "./ui/shared/contexts/DIContext";

const App = () => {
  return (
    <DIContextProvider>
      <AppNavigator/>
    </DIContextProvider>
  );
};

export default App;
