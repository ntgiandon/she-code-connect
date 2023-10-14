import React, {useMemo, useState} from 'react';
import {View} from 'react-native';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import {windowWidth} from '../../utils/Dimetions';
import styles from './styles';

export default function index({data, rowRenderer}) {
  const ITEM_HEIGHT = windowWidth;

  const [layoutProvider] = useState(
    new LayoutProvider(
      index => 1,
      (type, dim) => {
        dim.width = ITEM_HEIGHT;
        dim.height = 350;
      },
    ),
  );

  layoutProvider.shouldRefreshWithAnchoring = false;

  const provider = useMemo(() => {
    return new DataProvider((r1, r2) => {
      return r1 !== r2;
    });
  }, []);

  const dataProvider = useMemo(() => {
    return provider.cloneWithRows(data);
  }, [data, provider]);

  return (
    <View style={styles.container}>
      <RecyclerListView
        style={styles.recycleView}
        layoutProvider={layoutProvider}
        dataProvider={dataProvider}
        rowRenderer={rowRenderer}
        disableRecycling={true}
        onEndReachedThreshold={1}
        renderAheadOffset={0}
        scrollViewProps={{showsVerticalScrollIndicator: false}}
        forceNonDeterministicRendering={true}
      />
    </View>
  );
}
