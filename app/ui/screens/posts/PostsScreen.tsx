import React, {useEffect} from 'react';
import PostsViewModel from '../../../presentation/posts/PostsViewModel';
import {withDependencies} from '../../shared/contexts/DIContext';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import ScreenLayout from "../../shared/layouts/ScreenLayout";
import modulePresentationTypes from "../../../presentation/modulePresentationTypes";

type PostsScreenProps = {
  vm: PostsViewModel;
};

const PostsScreen: React.VFC<PostsScreenProps> = p => {
  useEffect(() => {
    p.vm.preparePosts();
  },[]);

  return (
    <ScreenLayout>
      <View style={{flex: 1}}>
        {p.vm.isLoading && <Text>Loading...</Text>}
        {p.vm.posts.map(post => (
          <View key={post.id} style={{backgroundColor: '#ccc', marginBottom: 2}}>
            <Text>{post.title}</Text>
            <Text>{post.body}</Text>
          </View>
        ))}
      </View>
    </ScreenLayout>
  );
};

export default withDependencies(
  'app',
  c => ({
    vm: c.get(modulePresentationTypes.PostsViewModel),
  }),
  observer(PostsScreen),
);
