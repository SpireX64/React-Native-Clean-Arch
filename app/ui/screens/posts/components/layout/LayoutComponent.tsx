import React from 'react';
import { Falsy, View } from "react-native";
import ScreenLayout from '../../../../shared/layouts/ScreenLayout';
import NavBarComponent from '../../../../shared/components/navbar/NavBarComponent';
import {default as LoadingIndicator} from "../../../../shared/components/loading-indicator/LoadingIndicatorComponent";
import styles from "./LayoutComponent.style";

type LayoutComponentProps = {
  title?: string | Falsy;
  loading?: boolean;
  onBackPress: () => void;
};

const LayoutComponent: React.FC<LayoutComponentProps> = p => {
  return (
    <ScreenLayout>
      <NavBarComponent
        title={p.title}
        onBackPress={p.onBackPress} />

        {p.loading ? (
          <View style={styles.loadingWrapper}>
            <LoadingIndicator color={'#000'}/>
          </View>
        ) : (
          <View style={styles.contentWrapper}>
            {p.children}
          </View>
        )}
    </ScreenLayout>
  );
};

LayoutComponent.defaultProps = {
  title: null,
  loading: false,
};

export default LayoutComponent;
