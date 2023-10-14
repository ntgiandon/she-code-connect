import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import colors from '../../../assets/theme/colors';
import CustomButton from '../CustomButton';
import Icon, {Icons} from '../Icon';
import styles from './styles';

const ModalAlert = ({
  animationType,
  transparent,
  visible,
  onRequestClose,
  closeModal,
  pressOk,
  pressCancel,
  notification,
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
          <Text style={styles.text}>{notification}</Text>

          <View style={styles.buttonView}>
            <CustomButton
              title="OK"
              onPress={pressOk}
              style={styles.button}
              danger
            />
            <CustomButton title="CANCLE" onPress={pressCancel} secondary />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAlert;
