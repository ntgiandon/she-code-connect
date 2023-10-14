import React, {useContext, useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import Loading from '../../components/common/Loading';
import {GlobalContext} from '../../context/Provider';
import {windowWidth} from '../../utils/Dimetions';
import AttendedCard from '../../components/common/AttendedCard';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

const index = React.memo(() => {
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

  const {
    userEventState: {
      getUserEvent: {data, loading},
    },
  } = useContext(GlobalContext);

  const events = data.filter(data => data.isParticipated == true);

  const dataProvider = useMemo(() => {
    return provider.cloneWithRows(events);
  }, [events, provider]);

  const rowRenderer = (type, data) => {
    return (
      <AttendedCard
        name={data.name}
        timeStart={data.timeStart}
        date={data.date}
      />
    );
  };

  return (
    <View>
      {loading && <Loading />}
      {events.length > 0 && (
        <View
          style={{
            width: '100%',
            height: '95%',
            display: 'flex',
          }}>
          <RecyclerListView
            style={{flex: 1, flexDirection: 'column'}}
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
      )}
    </View>
  );
});

export default index;
