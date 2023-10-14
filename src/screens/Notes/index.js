import React, {useContext, useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import {windowWidth} from '../../utils/Dimetions';
import {GlobalContext} from '../../context/Provider';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import deleteNote from '../../context/actions/note/deleteNote';
import getNote from '../../context/actions/note/getNote';
import Notes from '../../components/Notes';
import Loading from '../../components/common/Loading';
import ModalAlert from '../../components/common/ModalAlert';
import Filters from '../../components/common/Filters';

const ViewTypes = {
  HALF_LEFT: 1,
  HALF_RIGHT: 2,
};

const index = ({navigation}) => {
  const [mounted, setMounted] = useState(true);
  const [alert, setAlert] = useState(false);
  const [item, setItem] = useState({});
  const [organizer, setOrganizer] = useState('');
  const [notes, setNotes] = useState([]);

  const {
    noteState: {
      getNote: {data, loading},
    },

    userState: {user},
    noteDispatch,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (mounted) {
      getNote({studentId: user.id})(noteDispatch);
      setNotes([...data]);
      setOrganizerFilter(organizer);
    }
    return () => setMounted(false);
  }, []);

  const setOrganizerFilter = organizer => {
    if (organizer !== '') {
      setNotes([...data.filter(e => e.organizer === organizer)]);
    } else {
      setNotes([...data]);
    }
    setOrganizer(organizer);
  };

  const ITEM_WIDTH = windowWidth;

  const provider = useMemo(() => {
    return new DataProvider((r1, r2) => {
      return r1 !== r2;
    });
  }, []);

  const dataProvider = useMemo(() => {
    if (organizer == '') {
      return provider.cloneWithRows(data);
    } else {
      return provider.cloneWithRows(notes);
    }
  }, [notes, data, provider]);
  const [layoutProvider] = useState(
    new LayoutProvider(
      index => {
        if (index % 2 === 1) {
          return ViewTypes.HALF_LEFT;
        } else {
          return ViewTypes.HALF_RIGHT;
        }
      },
      (type, dim) => {
        switch (type) {
          case ViewTypes.HALF_LEFT:
            dim.width = ITEM_WIDTH / 2 - 0.001;
            dim.height = 150;
            break;
          case ViewTypes.HALF_RIGHT:
            dim.width = ITEM_WIDTH / 2;
            dim.height = 150;
            break;
          default:
            dim.width = 0;
            dim.height = 0;
        }
      },
    ),
  );

  layoutProvider.shouldRefreshWithAnchoring = false;

  const rowRenderer = (type, data) => {
    switch (type) {
      case ViewTypes.HALF_LEFT:
        return (
          <Notes
            title={data.title}
            desc={data.content}
            date={data.date}
            onPress={() => {
              navigation.navigate('CreateNote', {
                organizer: data.organizer,
                title: data.title,
                desc: data.content,
                id: data.id,
              });
            }}
            pressDelete={() => {
              setAlert(true);
              setItem(data);
            }}
            containerGridLeft
          />
        );
      case ViewTypes.HALF_RIGHT:
        return (
          <Notes
            title={data.title}
            desc={data.content}
            date={data.date}
            onPress={() => {
              navigation.navigate('CreateNote', {
                organizer: data.organizer,
                title: data.title,
                desc: data.content,
                id: data.id,
              });
              setOrganizer('');
              setOrganizerFilter;
            }}
            pressDelete={() => {
              setAlert(true);
              setItem(data);
            }}
            containerGridRight
          />
        );
      default:
        return null;
    }
  };

  return (
    <View>
      {loading && <Loading />}

      <ModalAlert
        animationType="fade"
        notification="Are you sure you want to this note?"
        transparent={true}
        visible={alert}
        onRequestClose={() => setAlert(!alert)}
        closeModal={() => setAlert(false)}
        pressOk={() => {
          deleteNote({studentId: user.id, noteId: item.id})(noteDispatch);
          setAlert(false);
        }}
        pressCancel={() => setAlert(false)}
      />

      <Filters
        filters={data}
        activeFiltersCount={0}
        activeFiltersMap={{}}
        onPress={setOrganizerFilter}
        filterPress={() => {
          setOrganizer('');
          setOrganizerFilter('');
        }}
      />

      {notes.length > 0 && (
        <View
          style={{
            width: '100%',
            height: '92%',
          }}>
          <RecyclerListView
            style={{flex: 1}}
            layoutProvider={layoutProvider}
            dataProvider={dataProvider}
            rowRenderer={rowRenderer}
            disableRecycling={true}
            onEndReachedThreshold={1}
            renderAheadOffset={0}
          />
        </View>
      )}
    </View>
  );
};

export default index;
