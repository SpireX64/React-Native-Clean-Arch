import React, {useEffect} from 'react';
import PostsViewModel from '../../../presentation/posts/PostsViewModel';
import {withDependencies} from '../../shared/contexts/DIContext';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import modulePresentationTypes from '../../../presentation/modulePresentationTypes';
import {default as Layout} from './components/layout/LayoutComponent';
import PostsListComponent from "./components/posts-list/PostsListComponent";

type PostsScreenProps = {
  vm: PostsViewModel;
};

const PostsScreen: React.VFC<PostsScreenProps> = p => {
  useEffect(() => {
    p.vm.preparePosts();
  }, []);

  return (
    <Layout
      title="Posts"
      loading={p.vm.isLoading}
      onBackPress={p.vm.goBack}>
      <PostsListComponent data={p.vm.posts}/>
    </Layout>
  );
};

export default withDependencies(
  'app',
  c => ({
    vm: c.get(modulePresentationTypes.PostsViewModel),
  }),
  observer(PostsScreen),
);
