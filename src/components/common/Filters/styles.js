import {StyleSheet} from 'react-native';
import {windowWidth} from '../../../utils/Dimetions';
import colors from '../../../assets/theme/colors';

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: colors.white,
    marginBottom: 10,
    shadowColor: colors.darkGrey,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  stickyItem: {
    position: 'absolute',
    zIndex: 1,
    left: 10,
    paddingRight: 8,
    paddingTop: 10,
  },
  stickyItemMask: {
    minWidth: 44,
    marginLeft: -8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  scrollView: {
    marginLeft: 10,
  },
  scrollViewContent: {
    paddingLeft: 100,
    paddingRight: 10,
    paddingBottom: 13,
  },
  dropDownIcon: {
    marginRight: 6,
  },
});

export default styles;
