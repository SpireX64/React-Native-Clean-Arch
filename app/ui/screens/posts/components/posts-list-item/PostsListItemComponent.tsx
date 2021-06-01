import React from 'react';
import {Text, View} from 'react-native';
import styles from './PostsListItemComponent.style';
import {PostModel} from '../../../../../domain/usecases/posts/models';

type PostsListItemComponentProps = {
  data: PostModel;
};

const PostsListItemComponent: React.VFC<PostsListItemComponentProps> = p => (
  <View style={styles.container}>
    <Text style={styles.title}>{p.data.title}</Text>
    <Text style={styles.body}>{p.data.body}</Text>
  </View>
);

export default PostsListItemComponent;
