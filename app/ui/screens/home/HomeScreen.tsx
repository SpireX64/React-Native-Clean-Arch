import React from 'react';
import HomeViewModel from '../../../presentation/home/HomeViewModel';
import {withDependencies} from '../../shared/contexts/DIContext';
import {default as Layout} from './components/layout/LayoutComponent';
import {default as Button} from '../../shared/components/button/ButtonComponent';
import ScreenLayout from '../../shared/layouts/ScreenLayout';
import {View} from 'react-native';
import modulePresentationTypes from '../../../presentation/modulePresentationTypes';

type HomeScreenProps = {
  vm: HomeViewModel;
};

const HomeScreen: React.VFC<HomeScreenProps> = p => (
  <ScreenLayout>
    <Layout>
      <View>
        <Button
          text="See posts"
          size="LG"
          onPress={p.vm.openPostsPress}
        />
        <Button
          text="See TODOs list"
          onPress={p.vm.openTodoPress}
          style="Primary"
        />
      </View>
    </Layout>
  </ScreenLayout>
);

export default withDependencies(
  'app',
  c => ({
    vm: c.get(modulePresentationTypes.HomeViewModel),
  }),
  HomeScreen,
);
