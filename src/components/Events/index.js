import React from 'react';
import {View} from 'react-native';
import {Agenda} from 'react-native-calendars';
import colors from '../../assets/theme/colors';

const Events = ({
  items,
  loadItems,
  renderItem,
  renderEmptyData,
  pastScrollRange,
  onRefresh,
  futureScrollRange,
  rowHasChanged,
}) => {
  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        renderItem={renderItem}
        theme={{
          agendaDayTextColor: colors.accent,
          agendaDayNumColor: colors.accent,
          agendaTodayColor: colors.accent,
          agendaKnobColor: colors.accent,
          dotColor: colors.accent,
          todayTextColor: colors.accent,
          selectedDayBackgroundColor: colors.accent,
        }}
        renderEmptyData={renderEmptyData}
        pastScrollRange={pastScrollRange}
        onRefresh={onRefresh}
        futureScrollRange={futureScrollRange}
        rowHasChanged={rowHasChanged}
      />
    </View>
  );
};

export default Events;
