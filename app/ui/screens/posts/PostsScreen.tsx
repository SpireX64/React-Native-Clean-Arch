import React from "react";
import PostsViewModel from "../../../presentation/posts/PostsViewModel";
import { withDependencies } from "../../shared/contexts/DIContext";
import { modulePresentationTypes } from "../../../presentation/ModulePresentation";
import { View } from "react-native";

type PostsScreenProps = {
  vm: PostsViewModel
};

const PostsScreen: React.VFC<PostsScreenProps> = (p) => {
  return (
    <View>

    </View>
  );
};

export default withDependencies(
  "app",
  c => ({
    vm: c.get(modulePresentationTypes.PostsViewModel),
  }),
  PostsScreen
);
