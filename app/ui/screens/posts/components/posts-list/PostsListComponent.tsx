import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PostModel} from '../../../../../domain/usecases/posts/models';
import PostsListItemComponent from '../posts-list-item/PostsListItemComponent';
import SeparatorComponent from '../../../../shared/components/separator/SeparatorComponent';

type PostsListComponentProps = {
  data: PostModel[];
};
const PostsListComponent: React.VFC<PostsListComponentProps> = p => (
  <FlatList
    data={p.data}
    renderItem={renderItem}
    ItemSeparatorComponent={SeparatorComponent}
  />
);

const renderItem = (info: ListRenderItemInfo<PostModel>) => (
  <PostsListItemComponent data={info.item} />
);


export default PostsListComponent;
