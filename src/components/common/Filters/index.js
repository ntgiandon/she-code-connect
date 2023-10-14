import React from 'react';
import {Animated, View, ScrollView} from 'react-native';
import ListItemButton from '../ListItemButton';
import StickyItemButton from '../StickyItemButton';
import styles from './styles';

const FILTERS_ICON_WIDTH = 44;
const FILTERS_BUTTON_WIDTH = 100;

const Filters = ({
  filters,
  activeFiltersCount,
  activeFiltersMap,
  onPress,
  filterPress,
}) => {
  const animatedWidth = new Animated.Value(FILTERS_BUTTON_WIDTH);

  const scrollViewRef = React.createRef();

  const onFiltersScroll = event => {
    const eventX = event.nativeEvent.contentOffset.x;

    const direction = eventX > 0 ? 1 : -1;
    const offsetX = Math.min(
      Math.abs(eventX),
      FILTERS_BUTTON_WIDTH - FILTERS_ICON_WIDTH,
    );
    animatedWidth.setValue(FILTERS_BUTTON_WIDTH - offsetX * direction);
  };

  const onScrollEndSnapToEdge = event => {
    const offsetX = event.nativeEvent.contentOffset.x;

    const maxOffset = FILTERS_BUTTON_WIDTH - FILTERS_ICON_WIDTH;
    const velocityFactor = Math.abs(event.nativeEvent.velocity.x * 30);

    if (offsetX > 0 && offsetX < maxOffset / 2 - velocityFactor) {
      this.scrollViewRef.scrollTo({x: 0});
    } else if (
      maxOffset / 2 + velocityFactor <= offsetX &&
      offsetX < maxOffset
    ) {
      this.scrollViewRef.scrollTo({
        x: FILTERS_BUTTON_WIDTH,
      });
    }
  };

  const scrollViewPaddingLeft = FILTERS_BUTTON_WIDTH - 18;

  return (
    <View style={styles.container}>
      <View style={styles.stickyItem}>
        <Animated.View
          style={[
            styles.stickyItemMask,
            {
              width: animatedWidth,
              maxWidth: FILTERS_BUTTON_WIDTH,
            },
          ]}>
          <StickyItemButton
            activeFiltersCount={activeFiltersCount}
            onPress={filterPress}
          />
        </Animated.View>
      </View>
      <ScrollView
        horizontal
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollViewContent,
          {paddingLeft: scrollViewPaddingLeft},
        ]}
        showsHorizontalScrollIndicator={false}
        onScroll={onFiltersScroll}
        onScrollEndDrag={onScrollEndSnapToEdge}
        scrollEventThrottle={16}
        ref={scrollViewRef}>
        {[...new Set(filters.map(item => item.organizer))].map(filter => (
          <ListItemButton
            key={filter}
            active={activeFiltersMap[filter]}
            text={filter}
            onPress={() => {
              onPress(filter);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Filters;
