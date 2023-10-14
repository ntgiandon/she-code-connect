import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import colors from '../../../assets/theme/colors';
import CustomButton from '../CustomButton';
import Icon, {Icons} from '../Icon';
import styles from './styles';

const ModalCard = ({
  animationType,
  transparent,
  visible,
  onRequestClose,
  closeModal,
  isParticipated,
  note,
  name,
  organizer,
  guests,
  location,
  timeStart,
  date,
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={closeModal} style={styles.iconView}>
            <Icon type={Icons.Feather} name="x" color={colors.secondary} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>{name}</Text>
          <View style={styles.contentView}>
            {organizer !== '' && (
              <Text style={styles.fontCustom}>Host: {organizer}</Text>
            )}

            {guests !== '' && (
              <Text style={styles.fontCustom}>Guests: {guests}</Text>
            )}

            {location !== '' && (
              <Text style={styles.fontCustom}>Location: {location}</Text>
            )}

            {timeStart !== '' && (
              <Text style={[styles.fontCustom, {fontWeight: 'bold'}]}>
                Date: {date} | {timeStart}
              </Text>
            )}
          </View>

          <View style={styles.buttonView}>
            <CustomButton
              title="Joined"
              onPress={isParticipated}
              secondary
              style={styles.button}
            />
            <CustomButton title="Note" onPress={note} secondary />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalCard;
